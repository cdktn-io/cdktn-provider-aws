/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsOpensearchserverlessSecurityConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique identifier of the security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config#id DataAwsOpensearchserverlessSecurityConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config#region DataAwsOpensearchserverlessSecurityConfig#region}
  */
  readonly region?: string;
  /**
  * iam_federation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config#iam_federation_options DataAwsOpensearchserverlessSecurityConfig#iam_federation_options}
  */
  readonly iamFederationOptions?: DataAwsOpensearchserverlessSecurityConfigIamFederationOptions[] | cdktn.IResolvable;
  /**
  * iam_identity_center_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config#iam_identity_center_options DataAwsOpensearchserverlessSecurityConfig#iam_identity_center_options}
  */
  readonly iamIdentityCenterOptions?: DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions[] | cdktn.IResolvable;
  /**
  * saml_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config#saml_options DataAwsOpensearchserverlessSecurityConfig#saml_options}
  */
  readonly samlOptions?: DataAwsOpensearchserverlessSecurityConfigSamlOptions[] | cdktn.IResolvable;
}
export interface DataAwsOpensearchserverlessSecurityConfigIamFederationOptions {
}

export function dataAwsOpensearchserverlessSecurityConfigIamFederationOptionsToTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigIamFederationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsOpensearchserverlessSecurityConfigIamFederationOptionsToHclTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigIamFederationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsOpensearchserverlessSecurityConfigIamFederationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOpensearchserverlessSecurityConfigIamFederationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // group_attribute - computed: true, optional: false, required: false
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }

  // user_attribute - computed: true, optional: false, required: false
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
}

export class DataAwsOpensearchserverlessSecurityConfigIamFederationOptionsList extends cdktn.ComplexList {
  public internalValue? : DataAwsOpensearchserverlessSecurityConfigIamFederationOptions[] | cdktn.IResolvable

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
  public get(index: number): DataAwsOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference {
    return new DataAwsOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions {
}

export function dataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsToTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsToHclTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // group_attribute - computed: true, optional: false, required: false
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // user_attribute - computed: true, optional: false, required: false
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
}

export class DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsList extends cdktn.ComplexList {
  public internalValue? : DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions[] | cdktn.IResolvable

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
  public get(index: number): DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference {
    return new DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsOpensearchserverlessSecurityConfigSamlOptions {
}

export function dataAwsOpensearchserverlessSecurityConfigSamlOptionsToTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsOpensearchserverlessSecurityConfigSamlOptionsToHclTerraform(struct?: DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsOpensearchserverlessSecurityConfigSamlOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // group_attribute - computed: true, optional: false, required: false
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // user_attribute - computed: true, optional: false, required: false
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
}

export class DataAwsOpensearchserverlessSecurityConfigSamlOptionsList extends cdktn.ComplexList {
  public internalValue? : DataAwsOpensearchserverlessSecurityConfigSamlOptions[] | cdktn.IResolvable

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
  public get(index: number): DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference {
    return new DataAwsOpensearchserverlessSecurityConfigSamlOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config aws_opensearchserverless_security_config}
*/
export class DataAwsOpensearchserverlessSecurityConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearchserverless_security_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsOpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessSecurityConfig to import
  * @param importFromId The id of the existing DataAwsOpensearchserverlessSecurityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessSecurityConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearchserverless_security_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_security_config aws_opensearchserverless_security_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOpensearchserverlessSecurityConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessSecurityConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearchserverless_security_config',
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
    this._id = config.id;
    this._region = config.region;
    this._iamFederationOptions.internalValue = config.iamFederationOptions;
    this._iamIdentityCenterOptions.internalValue = config.iamIdentityCenterOptions;
    this._samlOptions.internalValue = config.samlOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // iam_federation_options - computed: false, optional: true, required: false
  private _iamFederationOptions = new DataAwsOpensearchserverlessSecurityConfigIamFederationOptionsList(this, "iam_federation_options", false);
  public get iamFederationOptions() {
    return this._iamFederationOptions;
  }
  public putIamFederationOptions(value: DataAwsOpensearchserverlessSecurityConfigIamFederationOptions[] | cdktn.IResolvable) {
    this._iamFederationOptions.internalValue = value;
  }
  public resetIamFederationOptions() {
    this._iamFederationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamFederationOptionsInput() {
    return this._iamFederationOptions.internalValue;
  }

  // iam_identity_center_options - computed: false, optional: true, required: false
  private _iamIdentityCenterOptions = new DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsList(this, "iam_identity_center_options", false);
  public get iamIdentityCenterOptions() {
    return this._iamIdentityCenterOptions;
  }
  public putIamIdentityCenterOptions(value: DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptions[] | cdktn.IResolvable) {
    this._iamIdentityCenterOptions.internalValue = value;
  }
  public resetIamIdentityCenterOptions() {
    this._iamIdentityCenterOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterOptionsInput() {
    return this._iamIdentityCenterOptions.internalValue;
  }

  // saml_options - computed: false, optional: true, required: false
  private _samlOptions = new DataAwsOpensearchserverlessSecurityConfigSamlOptionsList(this, "saml_options", false);
  public get samlOptions() {
    return this._samlOptions;
  }
  public putSamlOptions(value: DataAwsOpensearchserverlessSecurityConfigSamlOptions[] | cdktn.IResolvable) {
    this._samlOptions.internalValue = value;
  }
  public resetSamlOptions() {
    this._samlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlOptionsInput() {
    return this._samlOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      iam_federation_options: cdktn.listMapper(dataAwsOpensearchserverlessSecurityConfigIamFederationOptionsToTerraform, true)(this._iamFederationOptions.internalValue),
      iam_identity_center_options: cdktn.listMapper(dataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsToTerraform, true)(this._iamIdentityCenterOptions.internalValue),
      saml_options: cdktn.listMapper(dataAwsOpensearchserverlessSecurityConfigSamlOptionsToTerraform, true)(this._samlOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      iam_federation_options: {
        value: cdktn.listMapperHcl(dataAwsOpensearchserverlessSecurityConfigIamFederationOptionsToHclTerraform, true)(this._iamFederationOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsOpensearchserverlessSecurityConfigIamFederationOptionsList",
      },
      iam_identity_center_options: {
        value: cdktn.listMapperHcl(dataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsToHclTerraform, true)(this._iamIdentityCenterOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsOpensearchserverlessSecurityConfigIamIdentityCenterOptionsList",
      },
      saml_options: {
        value: cdktn.listMapperHcl(dataAwsOpensearchserverlessSecurityConfigSamlOptionsToHclTerraform, true)(this._samlOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsOpensearchserverlessSecurityConfigSamlOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
