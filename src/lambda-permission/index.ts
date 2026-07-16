/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdaPermissionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#action LambdaPermission#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}
  */
  readonly eventSourceToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}
  */
  readonly functionUrlAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#id LambdaPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}
  */
  readonly invokedViaFunctionUrl?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#principal LambdaPermission#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}
  */
  readonly principalOrgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#region LambdaPermission#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}
  */
  readonly sourceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}
  */
  readonly sourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}
  */
  readonly statementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}
  */
  readonly statementIdPrefix?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#timeouts LambdaPermission#timeouts}
  */
  readonly timeouts?: LambdaPermissionTimeouts;
}
export interface LambdaPermissionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#create LambdaPermission#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#delete LambdaPermission#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#read LambdaPermission#read}
  */
  readonly read?: string;
}

export function lambdaPermissionTimeoutsToTerraform(struct?: LambdaPermissionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function lambdaPermissionTimeoutsToHclTerraform(struct?: LambdaPermissionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaPermissionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaPermissionTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaPermissionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission aws_lambda_permission}
*/
export class LambdaPermission extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdaPermission resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaPermission to import
  * @param importFromId The id of the existing LambdaPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_permission aws_lambda_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_permission',
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
    this._action = config.action;
    this._eventSourceToken = config.eventSourceToken;
    this._functionName = config.functionName;
    this._functionUrlAuthType = config.functionUrlAuthType;
    this._id = config.id;
    this._invokedViaFunctionUrl = config.invokedViaFunctionUrl;
    this._principal = config.principal;
    this._principalOrgId = config.principalOrgId;
    this._qualifier = config.qualifier;
    this._region = config.region;
    this._sourceAccount = config.sourceAccount;
    this._sourceArn = config.sourceArn;
    this._statementId = config.statementId;
    this._statementIdPrefix = config.statementIdPrefix;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // event_source_token - computed: false, optional: true, required: false
  private _eventSourceToken?: string; 
  public get eventSourceToken() {
    return this.getStringAttribute('event_source_token');
  }
  public set eventSourceToken(value: string) {
    this._eventSourceToken = value;
  }
  public resetEventSourceToken() {
    this._eventSourceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceTokenInput() {
    return this._eventSourceToken;
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

  // function_url_auth_type - computed: false, optional: true, required: false
  private _functionUrlAuthType?: string; 
  public get functionUrlAuthType() {
    return this.getStringAttribute('function_url_auth_type');
  }
  public set functionUrlAuthType(value: string) {
    this._functionUrlAuthType = value;
  }
  public resetFunctionUrlAuthType() {
    this._functionUrlAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUrlAuthTypeInput() {
    return this._functionUrlAuthType;
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

  // invoked_via_function_url - computed: false, optional: true, required: false
  private _invokedViaFunctionUrl?: boolean | cdktn.IResolvable; 
  public get invokedViaFunctionUrl() {
    return this.getBooleanAttribute('invoked_via_function_url');
  }
  public set invokedViaFunctionUrl(value: boolean | cdktn.IResolvable) {
    this._invokedViaFunctionUrl = value;
  }
  public resetInvokedViaFunctionUrl() {
    this._invokedViaFunctionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokedViaFunctionUrlInput() {
    return this._invokedViaFunctionUrl;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // principal_org_id - computed: false, optional: true, required: false
  private _principalOrgId?: string; 
  public get principalOrgId() {
    return this.getStringAttribute('principal_org_id');
  }
  public set principalOrgId(value: string) {
    this._principalOrgId = value;
  }
  public resetPrincipalOrgId() {
    this._principalOrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalOrgIdInput() {
    return this._principalOrgId;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
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

  // source_account - computed: false, optional: true, required: false
  private _sourceAccount?: string; 
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }
  public set sourceAccount(value: string) {
    this._sourceAccount = value;
  }
  public resetSourceAccount() {
    this._sourceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccountInput() {
    return this._sourceAccount;
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }

  // statement_id - computed: true, optional: true, required: false
  private _statementId?: string; 
  public get statementId() {
    return this.getStringAttribute('statement_id');
  }
  public set statementId(value: string) {
    this._statementId = value;
  }
  public resetStatementId() {
    this._statementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdInput() {
    return this._statementId;
  }

  // statement_id_prefix - computed: true, optional: true, required: false
  private _statementIdPrefix?: string; 
  public get statementIdPrefix() {
    return this.getStringAttribute('statement_id_prefix');
  }
  public set statementIdPrefix(value: string) {
    this._statementIdPrefix = value;
  }
  public resetStatementIdPrefix() {
    this._statementIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdPrefixInput() {
    return this._statementIdPrefix;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdaPermissionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdaPermissionTimeouts) {
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
      action: cdktn.stringToTerraform(this._action),
      event_source_token: cdktn.stringToTerraform(this._eventSourceToken),
      function_name: cdktn.stringToTerraform(this._functionName),
      function_url_auth_type: cdktn.stringToTerraform(this._functionUrlAuthType),
      id: cdktn.stringToTerraform(this._id),
      invoked_via_function_url: cdktn.booleanToTerraform(this._invokedViaFunctionUrl),
      principal: cdktn.stringToTerraform(this._principal),
      principal_org_id: cdktn.stringToTerraform(this._principalOrgId),
      qualifier: cdktn.stringToTerraform(this._qualifier),
      region: cdktn.stringToTerraform(this._region),
      source_account: cdktn.stringToTerraform(this._sourceAccount),
      source_arn: cdktn.stringToTerraform(this._sourceArn),
      statement_id: cdktn.stringToTerraform(this._statementId),
      statement_id_prefix: cdktn.stringToTerraform(this._statementIdPrefix),
      timeouts: lambdaPermissionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktn.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_source_token: {
        value: cdktn.stringToHclTerraform(this._eventSourceToken),
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
      function_url_auth_type: {
        value: cdktn.stringToHclTerraform(this._functionUrlAuthType),
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
      invoked_via_function_url: {
        value: cdktn.booleanToHclTerraform(this._invokedViaFunctionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      principal: {
        value: cdktn.stringToHclTerraform(this._principal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_org_id: {
        value: cdktn.stringToHclTerraform(this._principalOrgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktn.stringToHclTerraform(this._qualifier),
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
      source_account: {
        value: cdktn.stringToHclTerraform(this._sourceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_arn: {
        value: cdktn.stringToHclTerraform(this._sourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement_id: {
        value: cdktn.stringToHclTerraform(this._statementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement_id_prefix: {
        value: cdktn.stringToHclTerraform(this._statementIdPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lambdaPermissionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaPermissionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
