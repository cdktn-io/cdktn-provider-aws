/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontConnectionFunctionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#connection_function_code CloudfrontConnectionFunction#connection_function_code}
  */
  readonly connectionFunctionCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#name CloudfrontConnectionFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#publish CloudfrontConnectionFunction#publish}
  */
  readonly publish?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#tags CloudfrontConnectionFunction#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * connection_function_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#connection_function_config CloudfrontConnectionFunction#connection_function_config}
  */
  readonly connectionFunctionConfig?: CloudfrontConnectionFunctionConnectionFunctionConfig[] | cdktn.IResolvable;
}
export interface CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#key_value_store_arn CloudfrontConnectionFunction#key_value_store_arn}
  */
  readonly keyValueStoreArn: string;
}

export function cloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationToTerraform(struct?: CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_store_arn: cdktn.stringToTerraform(struct!.keyValueStoreArn),
  }
}


export function cloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationToHclTerraform(struct?: CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_store_arn: {
      value: cdktn.stringToHclTerraform(struct!.keyValueStoreArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValueStoreArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueStoreArn = this._keyValueStoreArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValueStoreArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValueStoreArn = value.keyValueStoreArn;
    }
  }

  // key_value_store_arn - computed: false, optional: false, required: true
  private _keyValueStoreArn?: string; 
  public get keyValueStoreArn() {
    return this.getStringAttribute('key_value_store_arn');
  }
  public set keyValueStoreArn(value: string) {
    this._keyValueStoreArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueStoreArnInput() {
    return this._keyValueStoreArn;
  }
}

export class CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList extends cdktn.ComplexList {
  public internalValue? : CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference {
    return new CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontConnectionFunctionConnectionFunctionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#comment CloudfrontConnectionFunction#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#runtime CloudfrontConnectionFunction#runtime}
  */
  readonly runtime: string;
  /**
  * key_value_store_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#key_value_store_association CloudfrontConnectionFunction#key_value_store_association}
  */
  readonly keyValueStoreAssociation?: CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation[] | cdktn.IResolvable;
}

export function cloudfrontConnectionFunctionConnectionFunctionConfigToTerraform(struct?: CloudfrontConnectionFunctionConnectionFunctionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    runtime: cdktn.stringToTerraform(struct!.runtime),
    key_value_store_association: cdktn.listMapper(cloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationToTerraform, true)(struct!.keyValueStoreAssociation),
  }
}


export function cloudfrontConnectionFunctionConnectionFunctionConfigToHclTerraform(struct?: CloudfrontConnectionFunctionConnectionFunctionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime: {
      value: cdktn.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_store_association: {
      value: cdktn.listMapperHcl(cloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationToHclTerraform, true)(struct!.keyValueStoreAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontConnectionFunctionConnectionFunctionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._keyValueStoreAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueStoreAssociation = this._keyValueStoreAssociation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontConnectionFunctionConnectionFunctionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._runtime = undefined;
      this._keyValueStoreAssociation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._runtime = value.runtime;
      this._keyValueStoreAssociation.internalValue = value.keyValueStoreAssociation;
    }
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // key_value_store_association - computed: false, optional: true, required: false
  private _keyValueStoreAssociation = new CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList(this, "key_value_store_association", false);
  public get keyValueStoreAssociation() {
    return this._keyValueStoreAssociation;
  }
  public putKeyValueStoreAssociation(value: CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation[] | cdktn.IResolvable) {
    this._keyValueStoreAssociation.internalValue = value;
  }
  public resetKeyValueStoreAssociation() {
    this._keyValueStoreAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueStoreAssociationInput() {
    return this._keyValueStoreAssociation.internalValue;
  }
}

export class CloudfrontConnectionFunctionConnectionFunctionConfigList extends cdktn.ComplexList {
  public internalValue? : CloudfrontConnectionFunctionConnectionFunctionConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference {
    return new CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function aws_cloudfront_connection_function}
*/
export class CloudfrontConnectionFunction extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_connection_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontConnectionFunction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontConnectionFunction to import
  * @param importFromId The id of the existing CloudfrontConnectionFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontConnectionFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_connection_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/cloudfront_connection_function aws_cloudfront_connection_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontConnectionFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontConnectionFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_connection_function',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.40.0',
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
    this._connectionFunctionCode = config.connectionFunctionCode;
    this._name = config.name;
    this._publish = config.publish;
    this._tags = config.tags;
    this._connectionFunctionConfig.internalValue = config.connectionFunctionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_function_arn - computed: true, optional: false, required: false
  public get connectionFunctionArn() {
    return this.getStringAttribute('connection_function_arn');
  }

  // connection_function_code - computed: false, optional: false, required: true
  private _connectionFunctionCode?: string; 
  public get connectionFunctionCode() {
    return this.getStringAttribute('connection_function_code');
  }
  public set connectionFunctionCode(value: string) {
    this._connectionFunctionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFunctionCodeInput() {
    return this._connectionFunctionCode;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // live_stage_etag - computed: true, optional: false, required: false
  public get liveStageEtag() {
    return this.getStringAttribute('live_stage_etag');
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

  // publish - computed: true, optional: true, required: false
  private _publish?: boolean | cdktn.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktn.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // connection_function_config - computed: false, optional: true, required: false
  private _connectionFunctionConfig = new CloudfrontConnectionFunctionConnectionFunctionConfigList(this, "connection_function_config", false);
  public get connectionFunctionConfig() {
    return this._connectionFunctionConfig;
  }
  public putConnectionFunctionConfig(value: CloudfrontConnectionFunctionConnectionFunctionConfig[] | cdktn.IResolvable) {
    this._connectionFunctionConfig.internalValue = value;
  }
  public resetConnectionFunctionConfig() {
    this._connectionFunctionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFunctionConfigInput() {
    return this._connectionFunctionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_function_code: cdktn.stringToTerraform(this._connectionFunctionCode),
      name: cdktn.stringToTerraform(this._name),
      publish: cdktn.booleanToTerraform(this._publish),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      connection_function_config: cdktn.listMapper(cloudfrontConnectionFunctionConnectionFunctionConfigToTerraform, true)(this._connectionFunctionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_function_code: {
        value: cdktn.stringToHclTerraform(this._connectionFunctionCode),
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
      publish: {
        value: cdktn.booleanToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_function_config: {
        value: cdktn.listMapperHcl(cloudfrontConnectionFunctionConnectionFunctionConfigToHclTerraform, true)(this._connectionFunctionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontConnectionFunctionConnectionFunctionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
