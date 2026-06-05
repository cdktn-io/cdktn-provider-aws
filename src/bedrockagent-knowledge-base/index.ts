/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentKnowledgeBaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#region BedrockagentKnowledgeBase#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#knowledge_base_configuration BedrockagentKnowledgeBase#knowledge_base_configuration}
  */
  readonly knowledgeBaseConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration[] | cdktn.IResolvable;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#storage_configuration BedrockagentKnowledgeBase#storage_configuration}
  */
  readonly storageConfiguration?: BedrockagentKnowledgeBaseStorageConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#timeouts BedrockagentKnowledgeBase#timeouts}
  */
  readonly timeouts?: BedrockagentKnowledgeBaseTimeouts;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#kendra_index_arn BedrockagentKnowledgeBase#kendra_index_arn}
  */
  readonly kendraIndexArn: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kendra_index_arn: cdktn.stringToTerraform(struct!.kendraIndexArn),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kendra_index_arn: {
      value: cdktn.stringToHclTerraform(struct!.kendraIndexArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kendraIndexArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraIndexArn = this._kendraIndexArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kendraIndexArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kendraIndexArn = value.kendraIndexArn;
    }
  }

  // kendra_index_arn - computed: false, optional: false, required: true
  private _kendraIndexArn?: string; 
  public get kendraIndexArn() {
    return this.getStringAttribute('kendra_index_arn');
  }
  public set kendraIndexArn(value: string) {
    this._kendraIndexArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraIndexArnInput() {
    return this._kendraIndexArn;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#database_user BedrockagentKnowledgeBase#database_user}
  */
  readonly databaseUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#username_password_secret_arn BedrockagentKnowledgeBase#username_password_secret_arn}
  */
  readonly usernamePasswordSecretArn?: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_user: cdktn.stringToTerraform(struct!.databaseUser),
    type: cdktn.stringToTerraform(struct!.type),
    username_password_secret_arn: cdktn.stringToTerraform(struct!.usernamePasswordSecretArn),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_user: {
      value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
    username_password_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.usernamePasswordSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUser = this._databaseUser;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernamePasswordSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePasswordSecretArn = this._usernamePasswordSecretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseUser = undefined;
      this._type = undefined;
      this._usernamePasswordSecretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseUser = value.databaseUser;
      this._type = value.type;
      this._usernamePasswordSecretArn = value.usernamePasswordSecretArn;
    }
  }

  // database_user - computed: false, optional: true, required: false
  private _databaseUser?: string; 
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }
  public set databaseUser(value: string) {
    this._databaseUser = value;
  }
  public resetDatabaseUser() {
    this._databaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserInput() {
    return this._databaseUser;
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

  // username_password_secret_arn - computed: false, optional: true, required: false
  private _usernamePasswordSecretArn?: string; 
  public get usernamePasswordSecretArn() {
    return this.getStringAttribute('username_password_secret_arn');
  }
  public set usernamePasswordSecretArn(value: string) {
    this._usernamePasswordSecretArn = value;
  }
  public resetUsernamePasswordSecretArn() {
    this._usernamePasswordSecretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordSecretArnInput() {
    return this._usernamePasswordSecretArn;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#cluster_identifier BedrockagentKnowledgeBase#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * auth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#auth_configuration BedrockagentKnowledgeBase#auth_configuration}
  */
  readonly authConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    auth_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationToTerraform, true)(struct!.authConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationToHclTerraform, true)(struct!.authConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._authConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfiguration = this._authConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIdentifier = undefined;
      this._authConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIdentifier = value.clusterIdentifier;
      this._authConfiguration.internalValue = value.authConfiguration;
    }
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // auth_configuration - computed: false, optional: true, required: false
  private _authConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfigurationList(this, "auth_configuration", false);
  public get authConfiguration() {
    return this._authConfiguration;
  }
  public putAuthConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationAuthConfiguration[] | cdktn.IResolvable) {
    this._authConfiguration.internalValue = value;
  }
  public resetAuthConfiguration() {
    this._authConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigurationInput() {
    return this._authConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#username_password_secret_arn BedrockagentKnowledgeBase#username_password_secret_arn}
  */
  readonly usernamePasswordSecretArn?: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    username_password_secret_arn: cdktn.stringToTerraform(struct!.usernamePasswordSecretArn),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_password_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.usernamePasswordSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernamePasswordSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePasswordSecretArn = this._usernamePasswordSecretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._usernamePasswordSecretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._usernamePasswordSecretArn = value.usernamePasswordSecretArn;
    }
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

  // username_password_secret_arn - computed: false, optional: true, required: false
  private _usernamePasswordSecretArn?: string; 
  public get usernamePasswordSecretArn() {
    return this.getStringAttribute('username_password_secret_arn');
  }
  public set usernamePasswordSecretArn(value: string) {
    this._usernamePasswordSecretArn = value;
  }
  public resetUsernamePasswordSecretArn() {
    this._usernamePasswordSecretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordSecretArnInput() {
    return this._usernamePasswordSecretArn;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#workgroup_arn BedrockagentKnowledgeBase#workgroup_arn}
  */
  readonly workgroupArn: string;
  /**
  * auth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#auth_configuration BedrockagentKnowledgeBase#auth_configuration}
  */
  readonly authConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workgroup_arn: cdktn.stringToTerraform(struct!.workgroupArn),
    auth_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationToTerraform, true)(struct!.authConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workgroup_arn: {
      value: cdktn.stringToHclTerraform(struct!.workgroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationToHclTerraform, true)(struct!.authConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workgroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workgroupArn = this._workgroupArn;
    }
    if (this._authConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfiguration = this._authConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workgroupArn = undefined;
      this._authConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workgroupArn = value.workgroupArn;
      this._authConfiguration.internalValue = value.authConfiguration;
    }
  }

  // workgroup_arn - computed: false, optional: false, required: true
  private _workgroupArn?: string; 
  public get workgroupArn() {
    return this.getStringAttribute('workgroup_arn');
  }
  public set workgroupArn(value: string) {
    this._workgroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupArnInput() {
    return this._workgroupArn;
  }

  // auth_configuration - computed: false, optional: true, required: false
  private _authConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfigurationList(this, "auth_configuration", false);
  public get authConfiguration() {
    return this._authConfiguration;
  }
  public putAuthConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationAuthConfiguration[] | cdktn.IResolvable) {
    this._authConfiguration.internalValue = value;
  }
  public resetAuthConfiguration() {
    this._authConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigurationInput() {
    return this._authConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * provisioned_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#provisioned_configuration BedrockagentKnowledgeBase#provisioned_configuration}
  */
  readonly provisionedConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration[] | cdktn.IResolvable;
  /**
  * serverless_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#serverless_configuration BedrockagentKnowledgeBase#serverless_configuration}
  */
  readonly serverlessConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    provisioned_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationToTerraform, true)(struct!.provisionedConfiguration),
    serverless_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationToTerraform, true)(struct!.serverlessConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationToHclTerraform, true)(struct!.provisionedConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationList",
    },
    serverless_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationToHclTerraform, true)(struct!.serverlessConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._provisionedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConfiguration = this._provisionedConfiguration?.internalValue;
    }
    if (this._serverlessConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessConfiguration = this._serverlessConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._provisionedConfiguration.internalValue = undefined;
      this._serverlessConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._provisionedConfiguration.internalValue = value.provisionedConfiguration;
      this._serverlessConfiguration.internalValue = value.serverlessConfiguration;
    }
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

  // provisioned_configuration - computed: false, optional: true, required: false
  private _provisionedConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfigurationList(this, "provisioned_configuration", false);
  public get provisionedConfiguration() {
    return this._provisionedConfiguration;
  }
  public putProvisionedConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationProvisionedConfiguration[] | cdktn.IResolvable) {
    this._provisionedConfiguration.internalValue = value;
  }
  public resetProvisionedConfiguration() {
    this._provisionedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConfigurationInput() {
    return this._provisionedConfiguration.internalValue;
  }

  // serverless_configuration - computed: false, optional: true, required: false
  private _serverlessConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfigurationList(this, "serverless_configuration", false);
  public get serverlessConfiguration() {
    return this._serverlessConfiguration;
  }
  public putServerlessConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationServerlessConfiguration[] | cdktn.IResolvable) {
    this._serverlessConfiguration.internalValue = value;
  }
  public resetServerlessConfiguration() {
    this._serverlessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigurationInput() {
    return this._serverlessConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#natural_language BedrockagentKnowledgeBase#natural_language}
  */
  readonly naturalLanguage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#sql BedrockagentKnowledgeBase#sql}
  */
  readonly sql: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    natural_language: cdktn.stringToTerraform(struct!.naturalLanguage),
    sql: cdktn.stringToTerraform(struct!.sql),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    natural_language: {
      value: cdktn.stringToHclTerraform(struct!.naturalLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguage = this._naturalLanguage;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguage = undefined;
      this._sql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguage = value.naturalLanguage;
      this._sql = value.sql;
    }
  }

  // natural_language - computed: false, optional: false, required: true
  private _naturalLanguage?: string; 
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
  public set naturalLanguage(value: string) {
    this._naturalLanguage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageInput() {
    return this._naturalLanguage;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#inclusion BedrockagentKnowledgeBase#inclusion}
  */
  readonly inclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}
  */
  readonly name?: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    inclusion: cdktn.stringToTerraform(struct!.inclusion),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusion: {
      value: cdktn.stringToHclTerraform(struct!.inclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusion = this._inclusion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inclusion = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inclusion = value.inclusion;
      this._name = value.name;
    }
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

  // inclusion - computed: false, optional: true, required: false
  private _inclusion?: string; 
  public get inclusion() {
    return this.getStringAttribute('inclusion');
  }
  public set inclusion(value: string) {
    this._inclusion = value;
  }
  public resetInclusion() {
    this._inclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionInput() {
    return this._inclusion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#inclusion BedrockagentKnowledgeBase#inclusion}
  */
  readonly inclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}
  */
  readonly name: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#column BedrockagentKnowledgeBase#column}
  */
  readonly column?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    inclusion: cdktn.stringToTerraform(struct!.inclusion),
    name: cdktn.stringToTerraform(struct!.name),
    column: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnToTerraform, true)(struct!.column),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusion: {
      value: cdktn.stringToHclTerraform(struct!.inclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusion = this._inclusion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inclusion = undefined;
      this._name = undefined;
      this._column.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inclusion = value.inclusion;
      this._name = value.name;
      this._column.internalValue = value.column;
    }
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

  // inclusion - computed: false, optional: true, required: false
  private _inclusion?: string; 
  public get inclusion() {
    return this.getStringAttribute('inclusion');
  }
  public set inclusion(value: string) {
    this._inclusion = value;
  }
  public resetInclusion() {
    this._inclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionInput() {
    return this._inclusion;
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

  // column - computed: false, optional: true, required: false
  private _column = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableColumn[] | cdktn.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext {
  /**
  * curated_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#curated_query BedrockagentKnowledgeBase#curated_query}
  */
  readonly curatedQuery?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery[] | cdktn.IResolvable;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#table BedrockagentKnowledgeBase#table}
  */
  readonly table?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curated_query: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryToTerraform, true)(struct!.curatedQuery),
    table: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableToTerraform, true)(struct!.table),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curated_query: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryToHclTerraform, true)(struct!.curatedQuery),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryList",
    },
    table: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableToHclTerraform, true)(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curatedQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.curatedQuery = this._curatedQuery?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curatedQuery.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curatedQuery.internalValue = value.curatedQuery;
      this._table.internalValue = value.table;
    }
  }

  // curated_query - computed: false, optional: true, required: false
  private _curatedQuery = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQueryList(this, "curated_query", false);
  public get curatedQuery() {
    return this._curatedQuery;
  }
  public putCuratedQuery(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextCuratedQuery[] | cdktn.IResolvable) {
    this._curatedQuery.internalValue = value;
  }
  public resetCuratedQuery() {
    this._curatedQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curatedQueryInput() {
    return this._curatedQuery.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTableList(this, "table", false);
  public get table() {
    return this._table;
  }
  public putTable(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextTable[] | cdktn.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#execution_timeout_seconds BedrockagentKnowledgeBase#execution_timeout_seconds}
  */
  readonly executionTimeoutSeconds?: number;
  /**
  * generation_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#generation_context BedrockagentKnowledgeBase#generation_context}
  */
  readonly generationContext?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_timeout_seconds: cdktn.numberToTerraform(struct!.executionTimeoutSeconds),
    generation_context: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextToTerraform, true)(struct!.generationContext),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.executionTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generation_context: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextToHclTerraform, true)(struct!.generationContext),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeoutSeconds = this._executionTimeoutSeconds;
    }
    if (this._generationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationContext = this._generationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionTimeoutSeconds = undefined;
      this._generationContext.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionTimeoutSeconds = value.executionTimeoutSeconds;
      this._generationContext.internalValue = value.generationContext;
    }
  }

  // execution_timeout_seconds - computed: false, optional: true, required: false
  private _executionTimeoutSeconds?: number; 
  public get executionTimeoutSeconds() {
    return this.getNumberAttribute('execution_timeout_seconds');
  }
  public set executionTimeoutSeconds(value: number) {
    this._executionTimeoutSeconds = value;
  }
  public resetExecutionTimeoutSeconds() {
    this._executionTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutSecondsInput() {
    return this._executionTimeoutSeconds;
  }

  // generation_context - computed: false, optional: true, required: false
  private _generationContext = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContextList(this, "generation_context", false);
  public get generationContext() {
    return this._generationContext;
  }
  public putGenerationContext(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationGenerationContext[] | cdktn.IResolvable) {
    this._generationContext.internalValue = value;
  }
  public resetGenerationContext() {
    this._generationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationContextInput() {
    return this._generationContext.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#table_names BedrockagentKnowledgeBase#table_names}
  */
  readonly tableNames: string[];
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tableNames),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tableNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNames = this._tableNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableNames = value.tableNames;
    }
  }

  // table_names - computed: false, optional: false, required: true
  private _tableNames?: string[]; 
  public get tableNames() {
    return cdktn.Fn.tolist(this.getListAttribute('table_names'));
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}
  */
  readonly databaseName: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * aws_data_catalog_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#aws_data_catalog_configuration BedrockagentKnowledgeBase#aws_data_catalog_configuration}
  */
  readonly awsDataCatalogConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration[] | cdktn.IResolvable;
  /**
  * redshift_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#redshift_configuration BedrockagentKnowledgeBase#redshift_configuration}
  */
  readonly redshiftConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    aws_data_catalog_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationToTerraform, true)(struct!.awsDataCatalogConfiguration),
    redshift_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationToTerraform, true)(struct!.redshiftConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_data_catalog_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationToHclTerraform, true)(struct!.awsDataCatalogConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationList",
    },
    redshift_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationToHclTerraform, true)(struct!.redshiftConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._awsDataCatalogConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsDataCatalogConfiguration = this._awsDataCatalogConfiguration?.internalValue;
    }
    if (this._redshiftConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftConfiguration = this._redshiftConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._awsDataCatalogConfiguration.internalValue = undefined;
      this._redshiftConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._awsDataCatalogConfiguration.internalValue = value.awsDataCatalogConfiguration;
      this._redshiftConfiguration.internalValue = value.redshiftConfiguration;
    }
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

  // aws_data_catalog_configuration - computed: false, optional: true, required: false
  private _awsDataCatalogConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfigurationList(this, "aws_data_catalog_configuration", false);
  public get awsDataCatalogConfiguration() {
    return this._awsDataCatalogConfiguration;
  }
  public putAwsDataCatalogConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationAwsDataCatalogConfiguration[] | cdktn.IResolvable) {
    this._awsDataCatalogConfiguration.internalValue = value;
  }
  public resetAwsDataCatalogConfiguration() {
    this._awsDataCatalogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDataCatalogConfigurationInput() {
    return this._awsDataCatalogConfiguration.internalValue;
  }

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfigurationList(this, "redshift_configuration", false);
  public get redshiftConfiguration() {
    return this._redshiftConfiguration;
  }
  public putRedshiftConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationRedshiftConfiguration[] | cdktn.IResolvable) {
    this._redshiftConfiguration.internalValue = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration {
  /**
  * query_engine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#query_engine_configuration BedrockagentKnowledgeBase#query_engine_configuration}
  */
  readonly queryEngineConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration[] | cdktn.IResolvable;
  /**
  * query_generation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#query_generation_configuration BedrockagentKnowledgeBase#query_generation_configuration}
  */
  readonly queryGenerationConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration[] | cdktn.IResolvable;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#storage_configuration BedrockagentKnowledgeBase#storage_configuration}
  */
  readonly storageConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_engine_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationToTerraform, true)(struct!.queryEngineConfiguration),
    query_generation_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationToTerraform, true)(struct!.queryGenerationConfiguration),
    storage_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationToTerraform, true)(struct!.storageConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_engine_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationToHclTerraform, true)(struct!.queryEngineConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationList",
    },
    query_generation_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationToHclTerraform, true)(struct!.queryGenerationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationList",
    },
    storage_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationToHclTerraform, true)(struct!.storageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryEngineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryEngineConfiguration = this._queryEngineConfiguration?.internalValue;
    }
    if (this._queryGenerationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryGenerationConfiguration = this._queryGenerationConfiguration?.internalValue;
    }
    if (this._storageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfiguration = this._storageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryEngineConfiguration.internalValue = undefined;
      this._queryGenerationConfiguration.internalValue = undefined;
      this._storageConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryEngineConfiguration.internalValue = value.queryEngineConfiguration;
      this._queryGenerationConfiguration.internalValue = value.queryGenerationConfiguration;
      this._storageConfiguration.internalValue = value.storageConfiguration;
    }
  }

  // query_engine_configuration - computed: false, optional: true, required: false
  private _queryEngineConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfigurationList(this, "query_engine_configuration", false);
  public get queryEngineConfiguration() {
    return this._queryEngineConfiguration;
  }
  public putQueryEngineConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryEngineConfiguration[] | cdktn.IResolvable) {
    this._queryEngineConfiguration.internalValue = value;
  }
  public resetQueryEngineConfiguration() {
    this._queryEngineConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryEngineConfigurationInput() {
    return this._queryEngineConfiguration.internalValue;
  }

  // query_generation_configuration - computed: false, optional: true, required: false
  private _queryGenerationConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfigurationList(this, "query_generation_configuration", false);
  public get queryGenerationConfiguration() {
    return this._queryGenerationConfiguration;
  }
  public putQueryGenerationConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationQueryGenerationConfiguration[] | cdktn.IResolvable) {
    this._queryGenerationConfiguration.internalValue = value;
  }
  public resetQueryGenerationConfiguration() {
    this._queryGenerationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryGenerationConfigurationInput() {
    return this._queryGenerationConfiguration.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfigurationList(this, "storage_configuration", false);
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationStorageConfiguration[] | cdktn.IResolvable) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * redshift_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#redshift_configuration BedrockagentKnowledgeBase#redshift_configuration}
  */
  readonly redshiftConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    redshift_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationToTerraform, true)(struct!.redshiftConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshift_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationToHclTerraform, true)(struct!.redshiftConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._redshiftConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftConfiguration = this._redshiftConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._redshiftConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._redshiftConfiguration.internalValue = value.redshiftConfiguration;
    }
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

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfigurationList(this, "redshift_configuration", false);
  public get redshiftConfiguration() {
    return this._redshiftConfiguration;
  }
  public putRedshiftConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationRedshiftConfiguration[] | cdktn.IResolvable) {
    this._redshiftConfiguration.internalValue = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#dimensions BedrockagentKnowledgeBase#dimensions}
  */
  readonly dimensions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#embedding_data_type BedrockagentKnowledgeBase#embedding_data_type}
  */
  readonly embeddingDataType?: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktn.numberToTerraform(struct!.dimensions),
    embedding_data_type: cdktn.stringToTerraform(struct!.embeddingDataType),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktn.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    embedding_data_type: {
      value: cdktn.stringToHclTerraform(struct!.embeddingDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._embeddingDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDataType = this._embeddingDataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._embeddingDataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._embeddingDataType = value.embeddingDataType;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // embedding_data_type - computed: false, optional: true, required: false
  private _embeddingDataType?: string; 
  public get embeddingDataType() {
    return this.getStringAttribute('embedding_data_type');
  }
  public set embeddingDataType(value: string) {
    this._embeddingDataType = value;
  }
  public resetEmbeddingDataType() {
    this._embeddingDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDataTypeInput() {
    return this._embeddingDataType;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration {
  /**
  * bedrock_embedding_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#bedrock_embedding_model_configuration BedrockagentKnowledgeBase#bedrock_embedding_model_configuration}
  */
  readonly bedrockEmbeddingModelConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bedrock_embedding_model_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationToTerraform, true)(struct!.bedrockEmbeddingModelConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bedrock_embedding_model_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationToHclTerraform, true)(struct!.bedrockEmbeddingModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEmbeddingModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEmbeddingModelConfiguration = this._bedrockEmbeddingModelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEmbeddingModelConfiguration.internalValue = value.bedrockEmbeddingModelConfiguration;
    }
  }

  // bedrock_embedding_model_configuration - computed: false, optional: true, required: false
  private _bedrockEmbeddingModelConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList(this, "bedrock_embedding_model_configuration", false);
  public get bedrockEmbeddingModelConfiguration() {
    return this._bedrockEmbeddingModelConfiguration;
  }
  public putBedrockEmbeddingModelConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration[] | cdktn.IResolvable) {
    this._bedrockEmbeddingModelConfiguration.internalValue = value;
  }
  public resetBedrockEmbeddingModelConfiguration() {
    this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEmbeddingModelConfigurationInput() {
    return this._bedrockEmbeddingModelConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#uri BedrockagentKnowledgeBase#uri}
  */
  readonly uri: string;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#s3_location BedrockagentKnowledgeBase#s3_location}
  */
  readonly s3Location?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    s3_location: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationToTerraform, true)(struct!.s3Location),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_location: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationToHclTerraform, true)(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._s3Location.internalValue = value.s3Location;
    }
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

  // s3_location - computed: false, optional: true, required: false
  private _s3Location = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList(this, "s3_location", false);
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location[] | cdktn.IResolvable) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration {
  /**
  * storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#storage_location BedrockagentKnowledgeBase#storage_location}
  */
  readonly storageLocation?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_location: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationToTerraform, true)(struct!.storageLocation),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_location: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationToHclTerraform, true)(struct!.storageLocation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageLocation.internalValue = value.storageLocation;
    }
  }

  // storage_location - computed: false, optional: true, required: false
  private _storageLocation = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList(this, "storage_location", false);
  public get storageLocation() {
    return this._storageLocation;
  }
  public putStorageLocation(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation[] | cdktn.IResolvable) {
    this._storageLocation.internalValue = value;
  }
  public resetStorageLocation() {
    this._storageLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#embedding_model_arn BedrockagentKnowledgeBase#embedding_model_arn}
  */
  readonly embeddingModelArn: string;
  /**
  * embedding_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#embedding_model_configuration BedrockagentKnowledgeBase#embedding_model_configuration}
  */
  readonly embeddingModelConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration[] | cdktn.IResolvable;
  /**
  * supplemental_data_storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#supplemental_data_storage_configuration BedrockagentKnowledgeBase#supplemental_data_storage_configuration}
  */
  readonly supplementalDataStorageConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_model_arn: cdktn.stringToTerraform(struct!.embeddingModelArn),
    embedding_model_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationToTerraform, true)(struct!.embeddingModelConfiguration),
    supplemental_data_storage_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationToTerraform, true)(struct!.supplementalDataStorageConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_model_arn: {
      value: cdktn.stringToHclTerraform(struct!.embeddingModelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_model_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationToHclTerraform, true)(struct!.embeddingModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList",
    },
    supplemental_data_storage_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationToHclTerraform, true)(struct!.supplementalDataStorageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelArn = this._embeddingModelArn;
    }
    if (this._embeddingModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelConfiguration = this._embeddingModelConfiguration?.internalValue;
    }
    if (this._supplementalDataStorageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalDataStorageConfiguration = this._supplementalDataStorageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelArn = undefined;
      this._embeddingModelConfiguration.internalValue = undefined;
      this._supplementalDataStorageConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelArn = value.embeddingModelArn;
      this._embeddingModelConfiguration.internalValue = value.embeddingModelConfiguration;
      this._supplementalDataStorageConfiguration.internalValue = value.supplementalDataStorageConfiguration;
    }
  }

  // embedding_model_arn - computed: false, optional: false, required: true
  private _embeddingModelArn?: string; 
  public get embeddingModelArn() {
    return this.getStringAttribute('embedding_model_arn');
  }
  public set embeddingModelArn(value: string) {
    this._embeddingModelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelArnInput() {
    return this._embeddingModelArn;
  }

  // embedding_model_configuration - computed: false, optional: true, required: false
  private _embeddingModelConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList(this, "embedding_model_configuration", false);
  public get embeddingModelConfiguration() {
    return this._embeddingModelConfiguration;
  }
  public putEmbeddingModelConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration[] | cdktn.IResolvable) {
    this._embeddingModelConfiguration.internalValue = value;
  }
  public resetEmbeddingModelConfiguration() {
    this._embeddingModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelConfigurationInput() {
    return this._embeddingModelConfiguration.internalValue;
  }

  // supplemental_data_storage_configuration - computed: false, optional: true, required: false
  private _supplementalDataStorageConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList(this, "supplemental_data_storage_configuration", false);
  public get supplementalDataStorageConfiguration() {
    return this._supplementalDataStorageConfiguration;
  }
  public putSupplementalDataStorageConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration[] | cdktn.IResolvable) {
    this._supplementalDataStorageConfiguration.internalValue = value;
  }
  public resetSupplementalDataStorageConfiguration() {
    this._supplementalDataStorageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalDataStorageConfigurationInput() {
    return this._supplementalDataStorageConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * kendra_knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#kendra_knowledge_base_configuration BedrockagentKnowledgeBase#kendra_knowledge_base_configuration}
  */
  readonly kendraKnowledgeBaseConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration[] | cdktn.IResolvable;
  /**
  * sql_knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#sql_knowledge_base_configuration BedrockagentKnowledgeBase#sql_knowledge_base_configuration}
  */
  readonly sqlKnowledgeBaseConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration[] | cdktn.IResolvable;
  /**
  * vector_knowledge_base_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_knowledge_base_configuration BedrockagentKnowledgeBase#vector_knowledge_base_configuration}
  */
  readonly vectorKnowledgeBaseConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    kendra_knowledge_base_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationToTerraform, true)(struct!.kendraKnowledgeBaseConfiguration),
    sql_knowledge_base_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationToTerraform, true)(struct!.sqlKnowledgeBaseConfiguration),
    vector_knowledge_base_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationToTerraform, true)(struct!.vectorKnowledgeBaseConfiguration),
  }
}


export function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kendra_knowledge_base_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationToHclTerraform, true)(struct!.kendraKnowledgeBaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationList",
    },
    sql_knowledge_base_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationToHclTerraform, true)(struct!.sqlKnowledgeBaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationList",
    },
    vector_knowledge_base_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationToHclTerraform, true)(struct!.vectorKnowledgeBaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._kendraKnowledgeBaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraKnowledgeBaseConfiguration = this._kendraKnowledgeBaseConfiguration?.internalValue;
    }
    if (this._sqlKnowledgeBaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlKnowledgeBaseConfiguration = this._sqlKnowledgeBaseConfiguration?.internalValue;
    }
    if (this._vectorKnowledgeBaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorKnowledgeBaseConfiguration = this._vectorKnowledgeBaseConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._kendraKnowledgeBaseConfiguration.internalValue = undefined;
      this._sqlKnowledgeBaseConfiguration.internalValue = undefined;
      this._vectorKnowledgeBaseConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._kendraKnowledgeBaseConfiguration.internalValue = value.kendraKnowledgeBaseConfiguration;
      this._sqlKnowledgeBaseConfiguration.internalValue = value.sqlKnowledgeBaseConfiguration;
      this._vectorKnowledgeBaseConfiguration.internalValue = value.vectorKnowledgeBaseConfiguration;
    }
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

  // kendra_knowledge_base_configuration - computed: false, optional: true, required: false
  private _kendraKnowledgeBaseConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfigurationList(this, "kendra_knowledge_base_configuration", false);
  public get kendraKnowledgeBaseConfiguration() {
    return this._kendraKnowledgeBaseConfiguration;
  }
  public putKendraKnowledgeBaseConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationKendraKnowledgeBaseConfiguration[] | cdktn.IResolvable) {
    this._kendraKnowledgeBaseConfiguration.internalValue = value;
  }
  public resetKendraKnowledgeBaseConfiguration() {
    this._kendraKnowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraKnowledgeBaseConfigurationInput() {
    return this._kendraKnowledgeBaseConfiguration.internalValue;
  }

  // sql_knowledge_base_configuration - computed: false, optional: true, required: false
  private _sqlKnowledgeBaseConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfigurationList(this, "sql_knowledge_base_configuration", false);
  public get sqlKnowledgeBaseConfiguration() {
    return this._sqlKnowledgeBaseConfiguration;
  }
  public putSqlKnowledgeBaseConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationSqlKnowledgeBaseConfiguration[] | cdktn.IResolvable) {
    this._sqlKnowledgeBaseConfiguration.internalValue = value;
  }
  public resetSqlKnowledgeBaseConfiguration() {
    this._sqlKnowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlKnowledgeBaseConfigurationInput() {
    return this._sqlKnowledgeBaseConfiguration.internalValue;
  }

  // vector_knowledge_base_configuration - computed: false, optional: true, required: false
  private _vectorKnowledgeBaseConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList(this, "vector_knowledge_base_configuration", false);
  public get vectorKnowledgeBaseConfiguration() {
    return this._vectorKnowledgeBaseConfiguration;
  }
  public putVectorKnowledgeBaseConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[] | cdktn.IResolvable) {
    this._vectorKnowledgeBaseConfiguration.internalValue = value;
  }
  public resetVectorKnowledgeBaseConfiguration() {
    this._vectorKnowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorKnowledgeBaseConfigurationInput() {
    return this._vectorKnowledgeBaseConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseKnowledgeBaseConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#collection_name BedrockagentKnowledgeBase#collection_name}
  */
  readonly collectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#endpoint BedrockagentKnowledgeBase#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#endpoint_service_name BedrockagentKnowledgeBase#endpoint_service_name}
  */
  readonly endpointServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_index_name BedrockagentKnowledgeBase#text_index_name}
  */
  readonly textIndexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktn.stringToTerraform(struct!.collectionName),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    endpoint_service_name: cdktn.stringToTerraform(struct!.endpointServiceName),
    text_index_name: cdktn.stringToTerraform(struct!.textIndexName),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_name: {
      value: cdktn.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_service_name: {
      value: cdktn.stringToHclTerraform(struct!.endpointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_index_name: {
      value: cdktn.stringToHclTerraform(struct!.textIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._endpointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointServiceName = this._endpointServiceName;
    }
    if (this._textIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.textIndexName = this._textIndexName;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._credentialsSecretArn = undefined;
      this._databaseName = undefined;
      this._endpoint = undefined;
      this._endpointServiceName = undefined;
      this._textIndexName = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._databaseName = value.databaseName;
      this._endpoint = value.endpoint;
      this._endpointServiceName = value.endpointServiceName;
      this._textIndexName = value.textIndexName;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // collection_name - computed: false, optional: false, required: true
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // endpoint_service_name - computed: false, optional: true, required: false
  private _endpointServiceName?: string; 
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }
  public set endpointServiceName(value: string) {
    this._endpointServiceName = value;
  }
  public resetEndpointServiceName() {
    this._endpointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceNameInput() {
    return this._endpointServiceName;
  }

  // text_index_name - computed: false, optional: true, required: false
  private _textIndexName?: string; 
  public get textIndexName() {
    return this.getStringAttribute('text_index_name');
  }
  public set textIndexName(value: string) {
    this._textIndexName = value;
  }
  public resetTextIndexName() {
    this._textIndexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textIndexNameInput() {
    return this._textIndexName;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationFieldMapping[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
  */
  readonly textField: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#graph_arn BedrockagentKnowledgeBase#graph_arn}
  */
  readonly graphArn: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graph_arn: cdktn.stringToTerraform(struct!.graphArn),
    field_mapping: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graph_arn: {
      value: cdktn.stringToHclTerraform(struct!.graphArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphArn = this._graphArn;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graphArn = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graphArn = value.graphArn;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // graph_arn - computed: false, optional: false, required: true
  private _graphArn?: string; 
  public get graphArn() {
    return this.getStringAttribute('graph_arn');
  }
  public set graphArn(value: string) {
    this._graphArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphArnInput() {
    return this._graphArn;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationFieldMapping[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#domain_arn BedrockagentKnowledgeBase#domain_arn}
  */
  readonly domainArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#domain_endpoint BedrockagentKnowledgeBase#domain_endpoint}
  */
  readonly domainEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_arn: cdktn.stringToTerraform(struct!.domainArn),
    domain_endpoint: cdktn.stringToTerraform(struct!.domainEndpoint),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_arn: {
      value: cdktn.stringToHclTerraform(struct!.domainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.domainEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainArn = this._domainArn;
    }
    if (this._domainEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainEndpoint = this._domainEndpoint;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainArn = undefined;
      this._domainEndpoint = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainArn = value.domainArn;
      this._domainEndpoint = value.domainEndpoint;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // domain_arn - computed: false, optional: false, required: true
  private _domainArn?: string; 
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }
  public set domainArn(value: string) {
    this._domainArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainArnInput() {
    return this._domainArn;
  }

  // domain_endpoint - computed: false, optional: false, required: true
  private _domainEndpoint?: string; 
  public get domainEndpoint() {
    return this.getStringAttribute('domain_endpoint');
  }
  public set domainEndpoint(value: string) {
    this._domainEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointInput() {
    return this._domainEndpoint;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationFieldMapping[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#collection_arn BedrockagentKnowledgeBase#collection_arn}
  */
  readonly collectionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_arn: cdktn.stringToTerraform(struct!.collectionArn),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_arn: {
      value: cdktn.stringToHclTerraform(struct!.collectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionArn = this._collectionArn;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionArn = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionArn = value.collectionArn;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // collection_arn - computed: false, optional: false, required: true
  private _collectionArn?: string; 
  public get collectionArn() {
    return this.getStringAttribute('collection_arn');
  }
  public set collectionArn(value: string) {
    this._collectionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionArnInput() {
    return this._collectionArn;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
  */
  readonly textField: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
    }
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#connection_string BedrockagentKnowledgeBase#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#namespace BedrockagentKnowledgeBase#namespace}
  */
  readonly namespace?: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktn.stringToTerraform(struct!.connectionString),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    field_mapping: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string: {
      value: cdktn.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionString = undefined;
      this._credentialsSecretArn = undefined;
      this._namespace = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionString = value.connectionString;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._namespace = value.namespace;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#custom_metadata_field BedrockagentKnowledgeBase#custom_metadata_field}
  */
  readonly customMetadataField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
  */
  readonly metadataField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#primary_key_field BedrockagentKnowledgeBase#primary_key_field}
  */
  readonly primaryKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
  */
  readonly textField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
  */
  readonly vectorField: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_metadata_field: cdktn.stringToTerraform(struct!.customMetadataField),
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    primary_key_field: cdktn.stringToTerraform(struct!.primaryKeyField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.customMetadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key_field: {
      value: cdktn.stringToHclTerraform(struct!.primaryKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetadataField = this._customMetadataField;
    }
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._primaryKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyField = this._primaryKeyField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetadataField = undefined;
      this._metadataField = undefined;
      this._primaryKeyField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetadataField = value.customMetadataField;
      this._metadataField = value.metadataField;
      this._primaryKeyField = value.primaryKeyField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // custom_metadata_field - computed: false, optional: true, required: false
  private _customMetadataField?: string; 
  public get customMetadataField() {
    return this.getStringAttribute('custom_metadata_field');
  }
  public set customMetadataField(value: string) {
    this._customMetadataField = value;
  }
  public resetCustomMetadataField() {
    this._customMetadataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataFieldInput() {
    return this._customMetadataField;
  }

  // metadata_field - computed: false, optional: false, required: true
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // primary_key_field - computed: false, optional: false, required: true
  private _primaryKeyField?: string; 
  public get primaryKeyField() {
    return this.getStringAttribute('primary_key_field');
  }
  public set primaryKeyField(value: string) {
    this._primaryKeyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyFieldInput() {
    return this._primaryKeyField;
  }

  // text_field - computed: false, optional: false, required: true
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: false, required: true
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#resource_arn BedrockagentKnowledgeBase#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#table_name BedrockagentKnowledgeBase#table_name}
  */
  readonly tableName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    field_mapping: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = undefined;
      this._databaseName = undefined;
      this._resourceArn = undefined;
      this._tableName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._databaseName = value.databaseName;
      this._resourceArn = value.resourceArn;
      this._tableName = value.tableName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
  */
  readonly metadataField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
  */
  readonly textField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
  */
  readonly vectorField?: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_field: cdktn.stringToTerraform(struct!.metadataField),
    text_field: cdktn.stringToTerraform(struct!.textField),
    vector_field: cdktn.stringToTerraform(struct!.vectorField),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_field: {
      value: cdktn.stringToHclTerraform(struct!.metadataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_field: {
      value: cdktn.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktn.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataField = this._metadataField;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataField = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataField = value.metadataField;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // metadata_field - computed: false, optional: true, required: false
  private _metadataField?: string; 
  public get metadataField() {
    return this.getStringAttribute('metadata_field');
  }
  public set metadataField(value: string) {
    this._metadataField = value;
  }
  public resetMetadataField() {
    this._metadataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldInput() {
    return this._metadataField;
  }

  // text_field - computed: false, optional: true, required: false
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  public resetTextField() {
    this._textField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // vector_field - computed: false, optional: true, required: false
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  public resetVectorField() {
    this._vectorField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#endpoint BedrockagentKnowledgeBase#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}
  */
  readonly vectorIndexName: string;
  /**
  * field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
  */
  readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    field_mapping: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingToTerraform, true)(struct!.fieldMapping),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_index_name: {
      value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_mapping: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingToHclTerraform, true)(struct!.fieldMapping),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._vectorIndexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorIndexName = this._vectorIndexName;
    }
    if (this._fieldMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = undefined;
      this._endpoint = undefined;
      this._vectorIndexName = undefined;
      this._fieldMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._endpoint = value.endpoint;
      this._vectorIndexName = value.vectorIndexName;
      this._fieldMapping.internalValue = value.fieldMapping;
    }
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // vector_index_name - computed: false, optional: false, required: true
  private _vectorIndexName?: string; 
  public get vectorIndexName() {
    return this.getStringAttribute('vector_index_name');
  }
  public set vectorIndexName(value: string) {
    this._vectorIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIndexNameInput() {
    return this._vectorIndexName;
  }

  // field_mapping - computed: false, optional: true, required: false
  private _fieldMapping = new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList(this, "field_mapping", false);
  public get fieldMapping() {
    return this._fieldMapping;
  }
  public putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[] | cdktn.IResolvable) {
    this._fieldMapping.internalValue = value;
  }
  public resetFieldMapping() {
    this._fieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingInput() {
    return this._fieldMapping.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#index_arn BedrockagentKnowledgeBase#index_arn}
  */
  readonly indexArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#index_name BedrockagentKnowledgeBase#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#vector_bucket_arn BedrockagentKnowledgeBase#vector_bucket_arn}
  */
  readonly vectorBucketArn?: string;
}

export function bedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_arn: cdktn.stringToTerraform(struct!.indexArn),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    vector_bucket_arn: cdktn.stringToTerraform(struct!.vectorBucketArn),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_arn: {
      value: cdktn.stringToHclTerraform(struct!.indexArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.vectorBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexArn = this._indexArn;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._vectorBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorBucketArn = this._vectorBucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexArn = undefined;
      this._indexName = undefined;
      this._vectorBucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexArn = value.indexArn;
      this._indexName = value.indexName;
      this._vectorBucketArn = value.vectorBucketArn;
    }
  }

  // index_arn - computed: false, optional: true, required: false
  private _indexArn?: string; 
  public get indexArn() {
    return this.getStringAttribute('index_arn');
  }
  public set indexArn(value: string) {
    this._indexArn = value;
  }
  public resetIndexArn() {
    this._indexArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexArnInput() {
    return this._indexArn;
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // vector_bucket_arn - computed: false, optional: true, required: false
  private _vectorBucketArn?: string; 
  public get vectorBucketArn() {
    return this.getStringAttribute('vector_bucket_arn');
  }
  public set vectorBucketArn(value: string) {
    this._vectorBucketArn = value;
  }
  public resetVectorBucketArn() {
    this._vectorBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorBucketArnInput() {
    return this._vectorBucketArn;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * mongo_db_atlas_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#mongo_db_atlas_configuration BedrockagentKnowledgeBase#mongo_db_atlas_configuration}
  */
  readonly mongoDbAtlasConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration[] | cdktn.IResolvable;
  /**
  * neptune_analytics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#neptune_analytics_configuration BedrockagentKnowledgeBase#neptune_analytics_configuration}
  */
  readonly neptuneAnalyticsConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration[] | cdktn.IResolvable;
  /**
  * opensearch_managed_cluster_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#opensearch_managed_cluster_configuration BedrockagentKnowledgeBase#opensearch_managed_cluster_configuration}
  */
  readonly opensearchManagedClusterConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration[] | cdktn.IResolvable;
  /**
  * opensearch_serverless_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#opensearch_serverless_configuration BedrockagentKnowledgeBase#opensearch_serverless_configuration}
  */
  readonly opensearchServerlessConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration[] | cdktn.IResolvable;
  /**
  * pinecone_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#pinecone_configuration BedrockagentKnowledgeBase#pinecone_configuration}
  */
  readonly pineconeConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration[] | cdktn.IResolvable;
  /**
  * rds_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#rds_configuration BedrockagentKnowledgeBase#rds_configuration}
  */
  readonly rdsConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration[] | cdktn.IResolvable;
  /**
  * redis_enterprise_cloud_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#redis_enterprise_cloud_configuration BedrockagentKnowledgeBase#redis_enterprise_cloud_configuration}
  */
  readonly redisEnterpriseCloudConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration[] | cdktn.IResolvable;
  /**
  * s3_vectors_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#s3_vectors_configuration BedrockagentKnowledgeBase#s3_vectors_configuration}
  */
  readonly s3VectorsConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentKnowledgeBaseStorageConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    mongo_db_atlas_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationToTerraform, true)(struct!.mongoDbAtlasConfiguration),
    neptune_analytics_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationToTerraform, true)(struct!.neptuneAnalyticsConfiguration),
    opensearch_managed_cluster_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationToTerraform, true)(struct!.opensearchManagedClusterConfiguration),
    opensearch_serverless_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationToTerraform, true)(struct!.opensearchServerlessConfiguration),
    pinecone_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationToTerraform, true)(struct!.pineconeConfiguration),
    rds_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationToTerraform, true)(struct!.rdsConfiguration),
    redis_enterprise_cloud_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationToTerraform, true)(struct!.redisEnterpriseCloudConfiguration),
    s3_vectors_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationToTerraform, true)(struct!.s3VectorsConfiguration),
  }
}


export function bedrockagentKnowledgeBaseStorageConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mongo_db_atlas_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationToHclTerraform, true)(struct!.mongoDbAtlasConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationList",
    },
    neptune_analytics_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationToHclTerraform, true)(struct!.neptuneAnalyticsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationList",
    },
    opensearch_managed_cluster_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationToHclTerraform, true)(struct!.opensearchManagedClusterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationList",
    },
    opensearch_serverless_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationToHclTerraform, true)(struct!.opensearchServerlessConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList",
    },
    pinecone_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationToHclTerraform, true)(struct!.pineconeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList",
    },
    rds_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationToHclTerraform, true)(struct!.rdsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList",
    },
    redis_enterprise_cloud_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationToHclTerraform, true)(struct!.redisEnterpriseCloudConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList",
    },
    s3_vectors_configuration: {
      value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationToHclTerraform, true)(struct!.s3VectorsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentKnowledgeBaseStorageConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentKnowledgeBaseStorageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._mongoDbAtlasConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoDbAtlasConfiguration = this._mongoDbAtlasConfiguration?.internalValue;
    }
    if (this._neptuneAnalyticsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neptuneAnalyticsConfiguration = this._neptuneAnalyticsConfiguration?.internalValue;
    }
    if (this._opensearchManagedClusterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchManagedClusterConfiguration = this._opensearchManagedClusterConfiguration?.internalValue;
    }
    if (this._opensearchServerlessConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchServerlessConfiguration = this._opensearchServerlessConfiguration?.internalValue;
    }
    if (this._pineconeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pineconeConfiguration = this._pineconeConfiguration?.internalValue;
    }
    if (this._rdsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsConfiguration = this._rdsConfiguration?.internalValue;
    }
    if (this._redisEnterpriseCloudConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisEnterpriseCloudConfiguration = this._redisEnterpriseCloudConfiguration?.internalValue;
    }
    if (this._s3VectorsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3VectorsConfiguration = this._s3VectorsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentKnowledgeBaseStorageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._mongoDbAtlasConfiguration.internalValue = undefined;
      this._neptuneAnalyticsConfiguration.internalValue = undefined;
      this._opensearchManagedClusterConfiguration.internalValue = undefined;
      this._opensearchServerlessConfiguration.internalValue = undefined;
      this._pineconeConfiguration.internalValue = undefined;
      this._rdsConfiguration.internalValue = undefined;
      this._redisEnterpriseCloudConfiguration.internalValue = undefined;
      this._s3VectorsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._mongoDbAtlasConfiguration.internalValue = value.mongoDbAtlasConfiguration;
      this._neptuneAnalyticsConfiguration.internalValue = value.neptuneAnalyticsConfiguration;
      this._opensearchManagedClusterConfiguration.internalValue = value.opensearchManagedClusterConfiguration;
      this._opensearchServerlessConfiguration.internalValue = value.opensearchServerlessConfiguration;
      this._pineconeConfiguration.internalValue = value.pineconeConfiguration;
      this._rdsConfiguration.internalValue = value.rdsConfiguration;
      this._redisEnterpriseCloudConfiguration.internalValue = value.redisEnterpriseCloudConfiguration;
      this._s3VectorsConfiguration.internalValue = value.s3VectorsConfiguration;
    }
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

  // mongo_db_atlas_configuration - computed: false, optional: true, required: false
  private _mongoDbAtlasConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfigurationList(this, "mongo_db_atlas_configuration", false);
  public get mongoDbAtlasConfiguration() {
    return this._mongoDbAtlasConfiguration;
  }
  public putMongoDbAtlasConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationMongoDbAtlasConfiguration[] | cdktn.IResolvable) {
    this._mongoDbAtlasConfiguration.internalValue = value;
  }
  public resetMongoDbAtlasConfiguration() {
    this._mongoDbAtlasConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbAtlasConfigurationInput() {
    return this._mongoDbAtlasConfiguration.internalValue;
  }

  // neptune_analytics_configuration - computed: false, optional: true, required: false
  private _neptuneAnalyticsConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfigurationList(this, "neptune_analytics_configuration", false);
  public get neptuneAnalyticsConfiguration() {
    return this._neptuneAnalyticsConfiguration;
  }
  public putNeptuneAnalyticsConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationNeptuneAnalyticsConfiguration[] | cdktn.IResolvable) {
    this._neptuneAnalyticsConfiguration.internalValue = value;
  }
  public resetNeptuneAnalyticsConfiguration() {
    this._neptuneAnalyticsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneAnalyticsConfigurationInput() {
    return this._neptuneAnalyticsConfiguration.internalValue;
  }

  // opensearch_managed_cluster_configuration - computed: false, optional: true, required: false
  private _opensearchManagedClusterConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfigurationList(this, "opensearch_managed_cluster_configuration", false);
  public get opensearchManagedClusterConfiguration() {
    return this._opensearchManagedClusterConfiguration;
  }
  public putOpensearchManagedClusterConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchManagedClusterConfiguration[] | cdktn.IResolvable) {
    this._opensearchManagedClusterConfiguration.internalValue = value;
  }
  public resetOpensearchManagedClusterConfiguration() {
    this._opensearchManagedClusterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchManagedClusterConfigurationInput() {
    return this._opensearchManagedClusterConfiguration.internalValue;
  }

  // opensearch_serverless_configuration - computed: false, optional: true, required: false
  private _opensearchServerlessConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList(this, "opensearch_serverless_configuration", false);
  public get opensearchServerlessConfiguration() {
    return this._opensearchServerlessConfiguration;
  }
  public putOpensearchServerlessConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration[] | cdktn.IResolvable) {
    this._opensearchServerlessConfiguration.internalValue = value;
  }
  public resetOpensearchServerlessConfiguration() {
    this._opensearchServerlessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchServerlessConfigurationInput() {
    return this._opensearchServerlessConfiguration.internalValue;
  }

  // pinecone_configuration - computed: false, optional: true, required: false
  private _pineconeConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList(this, "pinecone_configuration", false);
  public get pineconeConfiguration() {
    return this._pineconeConfiguration;
  }
  public putPineconeConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration[] | cdktn.IResolvable) {
    this._pineconeConfiguration.internalValue = value;
  }
  public resetPineconeConfiguration() {
    this._pineconeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pineconeConfigurationInput() {
    return this._pineconeConfiguration.internalValue;
  }

  // rds_configuration - computed: false, optional: true, required: false
  private _rdsConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList(this, "rds_configuration", false);
  public get rdsConfiguration() {
    return this._rdsConfiguration;
  }
  public putRdsConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration[] | cdktn.IResolvable) {
    this._rdsConfiguration.internalValue = value;
  }
  public resetRdsConfiguration() {
    this._rdsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsConfigurationInput() {
    return this._rdsConfiguration.internalValue;
  }

  // redis_enterprise_cloud_configuration - computed: false, optional: true, required: false
  private _redisEnterpriseCloudConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList(this, "redis_enterprise_cloud_configuration", false);
  public get redisEnterpriseCloudConfiguration() {
    return this._redisEnterpriseCloudConfiguration;
  }
  public putRedisEnterpriseCloudConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration[] | cdktn.IResolvable) {
    this._redisEnterpriseCloudConfiguration.internalValue = value;
  }
  public resetRedisEnterpriseCloudConfiguration() {
    this._redisEnterpriseCloudConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisEnterpriseCloudConfigurationInput() {
    return this._redisEnterpriseCloudConfiguration.internalValue;
  }

  // s3_vectors_configuration - computed: false, optional: true, required: false
  private _s3VectorsConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfigurationList(this, "s3_vectors_configuration", false);
  public get s3VectorsConfiguration() {
    return this._s3VectorsConfiguration;
  }
  public putS3VectorsConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationS3VectorsConfiguration[] | cdktn.IResolvable) {
    this._s3VectorsConfiguration.internalValue = value;
  }
  public resetS3VectorsConfiguration() {
    this._s3VectorsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3VectorsConfigurationInput() {
    return this._s3VectorsConfiguration.internalValue;
  }
}

export class BedrockagentKnowledgeBaseStorageConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentKnowledgeBaseStorageConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOutputReference {
    return new BedrockagentKnowledgeBaseStorageConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentKnowledgeBaseTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#create BedrockagentKnowledgeBase#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#delete BedrockagentKnowledgeBase#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#update BedrockagentKnowledgeBase#update}
  */
  readonly update?: string;
}

export function bedrockagentKnowledgeBaseTimeoutsToTerraform(struct?: BedrockagentKnowledgeBaseTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function bedrockagentKnowledgeBaseTimeoutsToHclTerraform(struct?: BedrockagentKnowledgeBaseTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class BedrockagentKnowledgeBaseTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentKnowledgeBaseTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentKnowledgeBaseTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base}
*/
export class BedrockagentKnowledgeBase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentKnowledgeBase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentKnowledgeBase to import
  * @param importFromId The id of the existing BedrockagentKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentKnowledgeBaseConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentKnowledgeBaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_knowledge_base',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.49.0',
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
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._knowledgeBaseConfiguration.internalValue = config.knowledgeBaseConfiguration;
    this._storageConfiguration.internalValue = config.storageConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // failure_reasons - computed: true, optional: false, required: false
  public get failureReasons() {
    return this.getListAttribute('failure_reasons');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // knowledge_base_configuration - computed: false, optional: true, required: false
  private _knowledgeBaseConfiguration = new BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList(this, "knowledge_base_configuration", false);
  public get knowledgeBaseConfiguration() {
    return this._knowledgeBaseConfiguration;
  }
  public putKnowledgeBaseConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration[] | cdktn.IResolvable) {
    this._knowledgeBaseConfiguration.internalValue = value;
  }
  public resetKnowledgeBaseConfiguration() {
    this._knowledgeBaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseConfigurationInput() {
    return this._knowledgeBaseConfiguration.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new BedrockagentKnowledgeBaseStorageConfigurationList(this, "storage_configuration", false);
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: BedrockagentKnowledgeBaseStorageConfiguration[] | cdktn.IResolvable) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentKnowledgeBaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentKnowledgeBaseTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      knowledge_base_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationToTerraform, true)(this._knowledgeBaseConfiguration.internalValue),
      storage_configuration: cdktn.listMapper(bedrockagentKnowledgeBaseStorageConfigurationToTerraform, true)(this._storageConfiguration.internalValue),
      timeouts: bedrockagentKnowledgeBaseTimeoutsToTerraform(this._timeouts.internalValue),
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
      knowledge_base_configuration: {
        value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseKnowledgeBaseConfigurationToHclTerraform, true)(this._knowledgeBaseConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList",
      },
      storage_configuration: {
        value: cdktn.listMapperHcl(bedrockagentKnowledgeBaseStorageConfigurationToHclTerraform, true)(this._storageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentKnowledgeBaseStorageConfigurationList",
      },
      timeouts: {
        value: bedrockagentKnowledgeBaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentKnowledgeBaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
