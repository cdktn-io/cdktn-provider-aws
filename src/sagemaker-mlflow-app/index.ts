/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerMlflowAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}
  */
  readonly accountDefaultStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}
  */
  readonly artifactStoreUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}
  */
  readonly defaultDomainIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}
  */
  readonly modelRegistrationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#region SagemakerMlflowApp#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}
  */
  readonly weeklyMaintenanceWindowStart?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#timeouts SagemakerMlflowApp#timeouts}
  */
  readonly timeouts?: SagemakerMlflowAppTimeouts;
}
export interface SagemakerMlflowAppTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#create SagemakerMlflowApp#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#delete SagemakerMlflowApp#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#update SagemakerMlflowApp#update}
  */
  readonly update?: string;
}

export function sagemakerMlflowAppTimeoutsToTerraform(struct?: SagemakerMlflowAppTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function sagemakerMlflowAppTimeoutsToHclTerraform(struct?: SagemakerMlflowAppTimeouts | cdktn.IResolvable): any {
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

export class SagemakerMlflowAppTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerMlflowAppTimeouts | cdktn.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerMlflowAppTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app aws_sagemaker_mlflow_app}
*/
export class SagemakerMlflowApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_mlflow_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerMlflowApp to import
  * @param importFromId The id of the existing SagemakerMlflowApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerMlflowApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_mlflow_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/sagemaker_mlflow_app aws_sagemaker_mlflow_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerMlflowAppConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerMlflowAppConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_mlflow_app',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.54.0',
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
    this._accountDefaultStatus = config.accountDefaultStatus;
    this._artifactStoreUri = config.artifactStoreUri;
    this._defaultDomainIdList = config.defaultDomainIdList;
    this._modelRegistrationMode = config.modelRegistrationMode;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_default_status - computed: false, optional: true, required: false
  private _accountDefaultStatus?: string; 
  public get accountDefaultStatus() {
    return this.getStringAttribute('account_default_status');
  }
  public set accountDefaultStatus(value: string) {
    this._accountDefaultStatus = value;
  }
  public resetAccountDefaultStatus() {
    this._accountDefaultStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDefaultStatusInput() {
    return this._accountDefaultStatus;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // artifact_store_uri - computed: false, optional: false, required: true
  private _artifactStoreUri?: string; 
  public get artifactStoreUri() {
    return this.getStringAttribute('artifact_store_uri');
  }
  public set artifactStoreUri(value: string) {
    this._artifactStoreUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoreUriInput() {
    return this._artifactStoreUri;
  }

  // default_domain_id_list - computed: false, optional: true, required: false
  private _defaultDomainIdList?: string[]; 
  public get defaultDomainIdList() {
    return cdktn.Fn.tolist(this.getListAttribute('default_domain_id_list'));
  }
  public set defaultDomainIdList(value: string[]) {
    this._defaultDomainIdList = value;
  }
  public resetDefaultDomainIdList() {
    this._defaultDomainIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainIdListInput() {
    return this._defaultDomainIdList;
  }

  // model_registration_mode - computed: true, optional: true, required: false
  private _modelRegistrationMode?: string; 
  public get modelRegistrationMode() {
    return this.getStringAttribute('model_registration_mode');
  }
  public set modelRegistrationMode(value: string) {
    this._modelRegistrationMode = value;
  }
  public resetModelRegistrationMode() {
    this._modelRegistrationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelRegistrationModeInput() {
    return this._modelRegistrationMode;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // weekly_maintenance_window_start - computed: true, optional: true, required: false
  private _weeklyMaintenanceWindowStart?: string; 
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
  }
  public set weeklyMaintenanceWindowStart(value: string) {
    this._weeklyMaintenanceWindowStart = value;
  }
  public resetWeeklyMaintenanceWindowStart() {
    this._weeklyMaintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowStartInput() {
    return this._weeklyMaintenanceWindowStart;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SagemakerMlflowAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SagemakerMlflowAppTimeouts) {
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
      account_default_status: cdktn.stringToTerraform(this._accountDefaultStatus),
      artifact_store_uri: cdktn.stringToTerraform(this._artifactStoreUri),
      default_domain_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._defaultDomainIdList),
      model_registration_mode: cdktn.stringToTerraform(this._modelRegistrationMode),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      weekly_maintenance_window_start: cdktn.stringToTerraform(this._weeklyMaintenanceWindowStart),
      timeouts: sagemakerMlflowAppTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_default_status: {
        value: cdktn.stringToHclTerraform(this._accountDefaultStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_store_uri: {
        value: cdktn.stringToHclTerraform(this._artifactStoreUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_domain_id_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._defaultDomainIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      model_registration_mode: {
        value: cdktn.stringToHclTerraform(this._modelRegistrationMode),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      weekly_maintenance_window_start: {
        value: cdktn.stringToHclTerraform(this._weeklyMaintenanceWindowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sagemakerMlflowAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerMlflowAppTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
