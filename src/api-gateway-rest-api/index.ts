/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiGatewayRestApiConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}
  */
  readonly apiKeySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}
  */
  readonly binaryMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#body ApiGatewayRestApi#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#description ApiGatewayRestApi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}
  */
  readonly disableExecuteApiEndpoint?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#endpoint_access_mode ApiGatewayRestApi#endpoint_access_mode}
  */
  readonly endpointAccessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#fail_on_warnings ApiGatewayRestApi#fail_on_warnings}
  */
  readonly failOnWarnings?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#id ApiGatewayRestApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}
  */
  readonly minimumCompressionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#name ApiGatewayRestApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#policy ApiGatewayRestApi#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}
  */
  readonly putRestApiMode?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#region ApiGatewayRestApi#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#security_policy ApiGatewayRestApi#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#tags ApiGatewayRestApi#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * endpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}
  */
  readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration;
}
export interface ApiGatewayRestApiEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#ip_address_type ApiGatewayRestApi#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#types ApiGatewayRestApi#types}
  */
  readonly types: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}
  */
  readonly vpcEndpointIds?: string[];
}

export function apiGatewayRestApiEndpointConfigurationToTerraform(struct?: ApiGatewayRestApiEndpointConfigurationOutputReference | ApiGatewayRestApiEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    vpc_endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcEndpointIds),
  }
}


export function apiGatewayRestApiEndpointConfigurationToHclTerraform(struct?: ApiGatewayRestApiEndpointConfigurationOutputReference | ApiGatewayRestApiEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_endpoint_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcEndpointIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayRestApiEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayRestApiEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._vpcEndpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointIds = this._vpcEndpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayRestApiEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressType = undefined;
      this._types = undefined;
      this._vpcEndpointIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressType = value.ipAddressType;
      this._types = value.types;
      this._vpcEndpointIds = value.vpcEndpointIds;
    }
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // vpc_endpoint_ids - computed: true, optional: true, required: false
  private _vpcEndpointIds?: string[]; 
  public get vpcEndpointIds() {
    return cdktn.Fn.tolist(this.getListAttribute('vpc_endpoint_ids'));
  }
  public set vpcEndpointIds(value: string[]) {
    this._vpcEndpointIds = value;
  }
  public resetVpcEndpointIds() {
    this._vpcEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdsInput() {
    return this._vpcEndpointIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api aws_api_gateway_rest_api}
*/
export class ApiGatewayRestApi extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_rest_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiGatewayRestApi resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayRestApi to import
  * @param importFromId The id of the existing ApiGatewayRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayRestApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_rest_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/api_gateway_rest_api aws_api_gateway_rest_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayRestApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayRestApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_rest_api',
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
    this._apiKeySource = config.apiKeySource;
    this._binaryMediaTypes = config.binaryMediaTypes;
    this._body = config.body;
    this._description = config.description;
    this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
    this._endpointAccessMode = config.endpointAccessMode;
    this._failOnWarnings = config.failOnWarnings;
    this._id = config.id;
    this._minimumCompressionSize = config.minimumCompressionSize;
    this._name = config.name;
    this._parameters = config.parameters;
    this._policy = config.policy;
    this._putRestApiMode = config.putRestApiMode;
    this._region = config.region;
    this._securityPolicy = config.securityPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._endpointConfiguration.internalValue = config.endpointConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_source - computed: true, optional: true, required: false
  private _apiKeySource?: string; 
  public get apiKeySource() {
    return this.getStringAttribute('api_key_source');
  }
  public set apiKeySource(value: string) {
    this._apiKeySource = value;
  }
  public resetApiKeySource() {
    this._apiKeySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySourceInput() {
    return this._apiKeySource;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // binary_media_types - computed: true, optional: true, required: false
  private _binaryMediaTypes?: string[]; 
  public get binaryMediaTypes() {
    return this.getListAttribute('binary_media_types');
  }
  public set binaryMediaTypes(value: string[]) {
    this._binaryMediaTypes = value;
  }
  public resetBinaryMediaTypes() {
    this._binaryMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryMediaTypesInput() {
    return this._binaryMediaTypes;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: true, required: false
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

  // disable_execute_api_endpoint - computed: true, optional: true, required: false
  private _disableExecuteApiEndpoint?: boolean | cdktn.IResolvable; 
  public get disableExecuteApiEndpoint() {
    return this.getBooleanAttribute('disable_execute_api_endpoint');
  }
  public set disableExecuteApiEndpoint(value: boolean | cdktn.IResolvable) {
    this._disableExecuteApiEndpoint = value;
  }
  public resetDisableExecuteApiEndpoint() {
    this._disableExecuteApiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableExecuteApiEndpointInput() {
    return this._disableExecuteApiEndpoint;
  }

  // endpoint_access_mode - computed: false, optional: true, required: false
  private _endpointAccessMode?: string; 
  public get endpointAccessMode() {
    return this.getStringAttribute('endpoint_access_mode');
  }
  public set endpointAccessMode(value: string) {
    this._endpointAccessMode = value;
  }
  public resetEndpointAccessMode() {
    this._endpointAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAccessModeInput() {
    return this._endpointAccessMode;
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // fail_on_warnings - computed: false, optional: true, required: false
  private _failOnWarnings?: boolean | cdktn.IResolvable; 
  public get failOnWarnings() {
    return this.getBooleanAttribute('fail_on_warnings');
  }
  public set failOnWarnings(value: boolean | cdktn.IResolvable) {
    this._failOnWarnings = value;
  }
  public resetFailOnWarnings() {
    this._failOnWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnWarningsInput() {
    return this._failOnWarnings;
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

  // minimum_compression_size - computed: true, optional: true, required: false
  private _minimumCompressionSize?: string; 
  public get minimumCompressionSize() {
    return this.getStringAttribute('minimum_compression_size');
  }
  public set minimumCompressionSize(value: string) {
    this._minimumCompressionSize = value;
  }
  public resetMinimumCompressionSize() {
    this._minimumCompressionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCompressionSizeInput() {
    return this._minimumCompressionSize;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // put_rest_api_mode - computed: false, optional: true, required: false
  private _putRestApiMode?: string; 
  public get putRestApiMode() {
    return this.getStringAttribute('put_rest_api_mode');
  }
  public set putRestApiMode(value: string) {
    this._putRestApiMode = value;
  }
  public resetPutRestApiMode() {
    this._putRestApiMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putRestApiModeInput() {
    return this._putRestApiMode;
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

  // root_resource_id - computed: true, optional: false, required: false
  public get rootResourceId() {
    return this.getStringAttribute('root_resource_id');
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
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

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration = new ApiGatewayRestApiEndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public putEndpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration) {
    this._endpointConfiguration.internalValue = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_source: cdktn.stringToTerraform(this._apiKeySource),
      binary_media_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._binaryMediaTypes),
      body: cdktn.stringToTerraform(this._body),
      description: cdktn.stringToTerraform(this._description),
      disable_execute_api_endpoint: cdktn.booleanToTerraform(this._disableExecuteApiEndpoint),
      endpoint_access_mode: cdktn.stringToTerraform(this._endpointAccessMode),
      fail_on_warnings: cdktn.booleanToTerraform(this._failOnWarnings),
      id: cdktn.stringToTerraform(this._id),
      minimum_compression_size: cdktn.stringToTerraform(this._minimumCompressionSize),
      name: cdktn.stringToTerraform(this._name),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      policy: cdktn.stringToTerraform(this._policy),
      put_rest_api_mode: cdktn.stringToTerraform(this._putRestApiMode),
      region: cdktn.stringToTerraform(this._region),
      security_policy: cdktn.stringToTerraform(this._securityPolicy),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      endpoint_configuration: apiGatewayRestApiEndpointConfigurationToTerraform(this._endpointConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_source: {
        value: cdktn.stringToHclTerraform(this._apiKeySource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_media_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._binaryMediaTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      body: {
        value: cdktn.stringToHclTerraform(this._body),
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
      disable_execute_api_endpoint: {
        value: cdktn.booleanToHclTerraform(this._disableExecuteApiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_access_mode: {
        value: cdktn.stringToHclTerraform(this._endpointAccessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_on_warnings: {
        value: cdktn.booleanToHclTerraform(this._failOnWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_compression_size: {
        value: cdktn.stringToHclTerraform(this._minimumCompressionSize),
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
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      policy: {
        value: cdktn.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      put_rest_api_mode: {
        value: cdktn.stringToHclTerraform(this._putRestApiMode),
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
      security_policy: {
        value: cdktn.stringToHclTerraform(this._securityPolicy),
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
      endpoint_configuration: {
        value: apiGatewayRestApiEndpointConfigurationToHclTerraform(this._endpointConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayRestApiEndpointConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
