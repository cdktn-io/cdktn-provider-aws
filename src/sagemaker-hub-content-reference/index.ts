/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerHubContentReferenceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Name of the hub content reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#hub_content_name SagemakerHubContentReference#hub_content_name}
  */
  readonly hubContentName: string;
  /**
  * Name of the private SageMaker Hub to add the content reference to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#hub_name SagemakerHubContentReference#hub_name}
  */
  readonly hubName: string;
  /**
  * Minimum version of the hub content to reference. Use "1.0.0" to support all versions. Changing this value to an empty string forces replacement of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#min_version SagemakerHubContentReference#min_version}
  */
  readonly minVersion?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#region SagemakerHubContentReference#region}
  */
  readonly region?: string;
  /**
  * ARN of the public SageMaker JumpStart hub content to reference. The ARN must not include a version suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#sagemaker_public_hub_content_arn SagemakerHubContentReference#sagemaker_public_hub_content_arn}
  */
  readonly sagemakerPublicHubContentArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#tags SagemakerHubContentReference#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#timeouts SagemakerHubContentReference#timeouts}
  */
  readonly timeouts?: SagemakerHubContentReferenceTimeouts;
}
export interface SagemakerHubContentReferenceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#create SagemakerHubContentReference#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#delete SagemakerHubContentReference#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#update SagemakerHubContentReference#update}
  */
  readonly update?: string;
}

export function sagemakerHubContentReferenceTimeoutsToTerraform(struct?: SagemakerHubContentReferenceTimeouts | cdktn.IResolvable): any {
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


export function sagemakerHubContentReferenceTimeoutsToHclTerraform(struct?: SagemakerHubContentReferenceTimeouts | cdktn.IResolvable): any {
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

export class SagemakerHubContentReferenceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerHubContentReferenceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerHubContentReferenceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference aws_sagemaker_hub_content_reference}
*/
export class SagemakerHubContentReference extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_hub_content_reference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerHubContentReference resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerHubContentReference to import
  * @param importFromId The id of the existing SagemakerHubContentReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerHubContentReference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_hub_content_reference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_hub_content_reference aws_sagemaker_hub_content_reference} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerHubContentReferenceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerHubContentReferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_hub_content_reference',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
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
    this._hubContentName = config.hubContentName;
    this._hubName = config.hubName;
    this._minVersion = config.minVersion;
    this._region = config.region;
    this._sagemakerPublicHubContentArn = config.sagemakerPublicHubContentArn;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hub_arn - computed: true, optional: false, required: false
  public get hubArn() {
    return this.getStringAttribute('hub_arn');
  }

  // hub_content_arn - computed: true, optional: false, required: false
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }

  // hub_content_name - computed: false, optional: false, required: true
  private _hubContentName?: string; 
  public get hubContentName() {
    return this.getStringAttribute('hub_content_name');
  }
  public set hubContentName(value: string) {
    this._hubContentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentNameInput() {
    return this._hubContentName;
  }

  // hub_content_status - computed: true, optional: false, required: false
  public get hubContentStatus() {
    return this.getStringAttribute('hub_content_status');
  }

  // hub_content_version - computed: true, optional: false, required: false
  public get hubContentVersion() {
    return this.getStringAttribute('hub_content_version');
  }

  // hub_name - computed: false, optional: false, required: true
  private _hubName?: string; 
  public get hubName() {
    return this.getStringAttribute('hub_name');
  }
  public set hubName(value: string) {
    this._hubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNameInput() {
    return this._hubName;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
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

  // sagemaker_public_hub_content_arn - computed: false, optional: false, required: true
  private _sagemakerPublicHubContentArn?: string; 
  public get sagemakerPublicHubContentArn() {
    return this.getStringAttribute('sagemaker_public_hub_content_arn');
  }
  public set sagemakerPublicHubContentArn(value: string) {
    this._sagemakerPublicHubContentArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerPublicHubContentArnInput() {
    return this._sagemakerPublicHubContentArn;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SagemakerHubContentReferenceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SagemakerHubContentReferenceTimeouts) {
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
      hub_content_name: cdktn.stringToTerraform(this._hubContentName),
      hub_name: cdktn.stringToTerraform(this._hubName),
      min_version: cdktn.stringToTerraform(this._minVersion),
      region: cdktn.stringToTerraform(this._region),
      sagemaker_public_hub_content_arn: cdktn.stringToTerraform(this._sagemakerPublicHubContentArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: sagemakerHubContentReferenceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hub_content_name: {
        value: cdktn.stringToHclTerraform(this._hubContentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_name: {
        value: cdktn.stringToHclTerraform(this._hubName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_version: {
        value: cdktn.stringToHclTerraform(this._minVersion),
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
      sagemaker_public_hub_content_arn: {
        value: cdktn.stringToHclTerraform(this._sagemakerPublicHubContentArn),
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
      timeouts: {
        value: sagemakerHubContentReferenceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerHubContentReferenceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
