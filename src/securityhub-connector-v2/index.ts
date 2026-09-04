/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubConnectorV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * connector_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}
  */
  readonly connectorProvider?: SecurityhubConnectorV2ConnectorProvider[] | cdktn.IResolvable;
}
export interface SecurityhubConnectorV2Health {
}

export function securityhubConnectorV2HealthToTerraform(struct?: SecurityhubConnectorV2Health): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function securityhubConnectorV2HealthToHclTerraform(struct?: SecurityhubConnectorV2Health): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityhubConnectorV2HealthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecurityhubConnectorV2Health | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorV2Health | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_status - computed: true, optional: false, required: false
  public get connectorStatus() {
    return this.getStringAttribute('connector_status');
  }

  // last_checked_at - computed: true, optional: false, required: false
  public get lastCheckedAt() {
    return this.getStringAttribute('last_checked_at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class SecurityhubConnectorV2HealthList extends cdktn.ComplexList {

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
  public get(index: number): SecurityhubConnectorV2HealthOutputReference {
    return new SecurityhubConnectorV2HealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubConnectorV2ConnectorProviderJiraCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}
  */
  readonly projectKey: string;
}

export function securityhubConnectorV2ConnectorProviderJiraCloudToTerraform(struct?: SecurityhubConnectorV2ConnectorProviderJiraCloud | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_key: cdktn.stringToTerraform(struct!.projectKey),
  }
}


export function securityhubConnectorV2ConnectorProviderJiraCloudToHclTerraform(struct?: SecurityhubConnectorV2ConnectorProviderJiraCloud | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_key: {
      value: cdktn.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubConnectorV2ConnectorProviderJiraCloud | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorV2ConnectorProviderJiraCloud | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectKey = value.projectKey;
    }
  }

  // auth_status - computed: true, optional: false, required: false
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }
}

export class SecurityhubConnectorV2ConnectorProviderJiraCloudList extends cdktn.ComplexList {
  public internalValue? : SecurityhubConnectorV2ConnectorProviderJiraCloud[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference {
    return new SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubConnectorV2ConnectorProviderServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}
  */
  readonly secretArn: string;
}

export function securityhubConnectorV2ConnectorProviderServiceNowToTerraform(struct?: SecurityhubConnectorV2ConnectorProviderServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_name: cdktn.stringToTerraform(struct!.instanceName),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function securityhubConnectorV2ConnectorProviderServiceNowToHclTerraform(struct?: SecurityhubConnectorV2ConnectorProviderServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubConnectorV2ConnectorProviderServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorV2ConnectorProviderServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceName = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceName = value.instanceName;
      this._secretArn = value.secretArn;
    }
  }

  // auth_status - computed: true, optional: false, required: false
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}

export class SecurityhubConnectorV2ConnectorProviderServiceNowList extends cdktn.ComplexList {
  public internalValue? : SecurityhubConnectorV2ConnectorProviderServiceNow[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference {
    return new SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubConnectorV2ConnectorProvider {
  /**
  * jira_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}
  */
  readonly jiraCloud?: SecurityhubConnectorV2ConnectorProviderJiraCloud[] | cdktn.IResolvable;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}
  */
  readonly serviceNow?: SecurityhubConnectorV2ConnectorProviderServiceNow[] | cdktn.IResolvable;
}

export function securityhubConnectorV2ConnectorProviderToTerraform(struct?: SecurityhubConnectorV2ConnectorProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jira_cloud: cdktn.listMapper(securityhubConnectorV2ConnectorProviderJiraCloudToTerraform, true)(struct!.jiraCloud),
    service_now: cdktn.listMapper(securityhubConnectorV2ConnectorProviderServiceNowToTerraform, true)(struct!.serviceNow),
  }
}


export function securityhubConnectorV2ConnectorProviderToHclTerraform(struct?: SecurityhubConnectorV2ConnectorProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jira_cloud: {
      value: cdktn.listMapperHcl(securityhubConnectorV2ConnectorProviderJiraCloudToHclTerraform, true)(struct!.jiraCloud),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubConnectorV2ConnectorProviderJiraCloudList",
    },
    service_now: {
      value: cdktn.listMapperHcl(securityhubConnectorV2ConnectorProviderServiceNowToHclTerraform, true)(struct!.serviceNow),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubConnectorV2ConnectorProviderServiceNowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorV2ConnectorProviderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubConnectorV2ConnectorProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jiraCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraCloud = this._jiraCloud?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorV2ConnectorProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jiraCloud.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jiraCloud.internalValue = value.jiraCloud;
      this._serviceNow.internalValue = value.serviceNow;
    }
  }

  // jira_cloud - computed: false, optional: true, required: false
  private _jiraCloud = new SecurityhubConnectorV2ConnectorProviderJiraCloudList(this, "jira_cloud", false);
  public get jiraCloud() {
    return this._jiraCloud;
  }
  public putJiraCloud(value: SecurityhubConnectorV2ConnectorProviderJiraCloud[] | cdktn.IResolvable) {
    this._jiraCloud.internalValue = value;
  }
  public resetJiraCloud() {
    this._jiraCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraCloudInput() {
    return this._jiraCloud.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new SecurityhubConnectorV2ConnectorProviderServiceNowList(this, "service_now", false);
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: SecurityhubConnectorV2ConnectorProviderServiceNow[] | cdktn.IResolvable) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }
}

export class SecurityhubConnectorV2ConnectorProviderList extends cdktn.ComplexList {
  public internalValue? : SecurityhubConnectorV2ConnectorProvider[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubConnectorV2ConnectorProviderOutputReference {
    return new SecurityhubConnectorV2ConnectorProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2 aws_securityhub_connector_v2}
*/
export class SecurityhubConnectorV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_connector_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubConnectorV2 to import
  * @param importFromId The id of the existing SecurityhubConnectorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubConnectorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_connector_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securityhub_connector_v2 aws_securityhub_connector_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubConnectorV2Config
  */
  public constructor(scope: Construct, id: string, config: SecurityhubConnectorV2Config) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_connector_v2',
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
    this._description = config.description;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._connectorProvider.internalValue = config.connectorProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
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

  // health - computed: true, optional: false, required: false
  private _health = new SecurityhubConnectorV2HealthList(this, "health", false);
  public get health() {
    return this._health;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // connector_provider - computed: false, optional: true, required: false
  private _connectorProvider = new SecurityhubConnectorV2ConnectorProviderList(this, "connector_provider", false);
  public get connectorProvider() {
    return this._connectorProvider;
  }
  public putConnectorProvider(value: SecurityhubConnectorV2ConnectorProvider[] | cdktn.IResolvable) {
    this._connectorProvider.internalValue = value;
  }
  public resetConnectorProvider() {
    this._connectorProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProviderInput() {
    return this._connectorProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      connector_provider: cdktn.listMapper(securityhubConnectorV2ConnectorProviderToTerraform, true)(this._connectorProvider.internalValue),
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
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connector_provider: {
        value: cdktn.listMapperHcl(securityhubConnectorV2ConnectorProviderToHclTerraform, true)(this._connectorProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubConnectorV2ConnectorProviderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
