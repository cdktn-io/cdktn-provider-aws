/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppconfigConfigurationProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#kms_key_identifier AppconfigConfigurationProfile#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}
  */
  readonly locationUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#region AppconfigConfigurationProfile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}
  */
  readonly retrievalRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}
  */
  readonly type?: string;
  /**
  * validator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#validator AppconfigConfigurationProfile#validator}
  */
  readonly validator?: AppconfigConfigurationProfileValidator[] | cdktn.IResolvable;
}
export interface AppconfigConfigurationProfileValidator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}
  */
  readonly type: string;
}

export function appconfigConfigurationProfileValidatorToTerraform(struct?: AppconfigConfigurationProfileValidator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function appconfigConfigurationProfileValidatorToHclTerraform(struct?: AppconfigConfigurationProfileValidator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppconfigConfigurationProfileValidatorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppconfigConfigurationProfileValidator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppconfigConfigurationProfileValidator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AppconfigConfigurationProfileValidatorList extends cdktn.ComplexList {
  public internalValue? : AppconfigConfigurationProfileValidator[] | cdktn.IResolvable

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
  public get(index: number): AppconfigConfigurationProfileValidatorOutputReference {
    return new AppconfigConfigurationProfileValidatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile aws_appconfig_configuration_profile}
*/
export class AppconfigConfigurationProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appconfig_configuration_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppconfigConfigurationProfile to import
  * @param importFromId The id of the existing AppconfigConfigurationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppconfigConfigurationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appconfig_configuration_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appconfig_configuration_profile aws_appconfig_configuration_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppconfigConfigurationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AppconfigConfigurationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appconfig_configuration_profile',
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
    this._applicationId = config.applicationId;
    this._description = config.description;
    this._id = config.id;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._locationUri = config.locationUri;
    this._name = config.name;
    this._region = config.region;
    this._retrievalRoleArn = config.retrievalRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._validator.internalValue = config.validator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_profile_id - computed: true, optional: false, required: false
  public get configurationProfileId() {
    return this.getStringAttribute('configuration_profile_id');
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

  // kms_key_identifier - computed: false, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }

  // location_uri - computed: false, optional: false, required: true
  private _locationUri?: string; 
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }
  public set locationUri(value: string) {
    this._locationUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationUriInput() {
    return this._locationUri;
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

  // retrieval_role_arn - computed: false, optional: true, required: false
  private _retrievalRoleArn?: string; 
  public get retrievalRoleArn() {
    return this.getStringAttribute('retrieval_role_arn');
  }
  public set retrievalRoleArn(value: string) {
    this._retrievalRoleArn = value;
  }
  public resetRetrievalRoleArn() {
    this._retrievalRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalRoleArnInput() {
    return this._retrievalRoleArn;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validator - computed: false, optional: true, required: false
  private _validator = new AppconfigConfigurationProfileValidatorList(this, "validator", true);
  public get validator() {
    return this._validator;
  }
  public putValidator(value: AppconfigConfigurationProfileValidator[] | cdktn.IResolvable) {
    this._validator.internalValue = value;
  }
  public resetValidator() {
    this._validator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorInput() {
    return this._validator.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktn.stringToTerraform(this._applicationId),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
      location_uri: cdktn.stringToTerraform(this._locationUri),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      retrieval_role_arn: cdktn.stringToTerraform(this._retrievalRoleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      validator: cdktn.listMapper(appconfigConfigurationProfileValidatorToTerraform, true)(this._validator.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      kms_key_identifier: {
        value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_uri: {
        value: cdktn.stringToHclTerraform(this._locationUri),
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
      retrieval_role_arn: {
        value: cdktn.stringToHclTerraform(this._retrievalRoleArn),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validator: {
        value: cdktn.listMapperHcl(appconfigConfigurationProfileValidatorToHclTerraform, true)(this._validator.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppconfigConfigurationProfileValidatorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
