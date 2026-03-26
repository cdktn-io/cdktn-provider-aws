/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DmsEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}
  */
  readonly engineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}
  */
  readonly extraConnectionAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#id DmsEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#password DmsEndpoint#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}
  */
  readonly pauseReplicationTasks?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#port DmsEndpoint#port}
  */
  readonly port?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#region DmsEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}
  */
  readonly secretsManagerAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}
  */
  readonly secretsManagerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}
  */
  readonly serviceAccessRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#username DmsEndpoint#username}
  */
  readonly username?: string;
  /**
  * elasticsearch_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}
  */
  readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings;
  /**
  * kafka_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}
  */
  readonly kafkaSettings?: DmsEndpointKafkaSettings;
  /**
  * kinesis_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}
  */
  readonly kinesisSettings?: DmsEndpointKinesisSettings;
  /**
  * mongodb_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}
  */
  readonly mongodbSettings?: DmsEndpointMongodbSettings;
  /**
  * mysql_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#mysql_settings DmsEndpoint#mysql_settings}
  */
  readonly mysqlSettings?: DmsEndpointMysqlSettings;
  /**
  * oracle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}
  */
  readonly oracleSettings?: DmsEndpointOracleSettings;
  /**
  * postgres_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#postgres_settings DmsEndpoint#postgres_settings}
  */
  readonly postgresSettings?: DmsEndpointPostgresSettings;
  /**
  * redis_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}
  */
  readonly redisSettings?: DmsEndpointRedisSettings;
  /**
  * redshift_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}
  */
  readonly redshiftSettings?: DmsEndpointRedshiftSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#timeouts DmsEndpoint#timeouts}
  */
  readonly timeouts?: DmsEndpointTimeouts;
}
export interface DmsEndpointElasticsearchSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}
  */
  readonly endpointUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}
  */
  readonly errorRetryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}
  */
  readonly fullLoadErrorPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}
  */
  readonly useNewMappingType?: boolean | cdktn.IResolvable;
}

export function dmsEndpointElasticsearchSettingsToTerraform(struct?: DmsEndpointElasticsearchSettingsOutputReference | DmsEndpointElasticsearchSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_uri: cdktn.stringToTerraform(struct!.endpointUri),
    error_retry_duration: cdktn.numberToTerraform(struct!.errorRetryDuration),
    full_load_error_percentage: cdktn.numberToTerraform(struct!.fullLoadErrorPercentage),
    service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
    use_new_mapping_type: cdktn.booleanToTerraform(struct!.useNewMappingType),
  }
}


export function dmsEndpointElasticsearchSettingsToHclTerraform(struct?: DmsEndpointElasticsearchSettingsOutputReference | DmsEndpointElasticsearchSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_uri: {
      value: cdktn.stringToHclTerraform(struct!.endpointUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.errorRetryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_load_error_percentage: {
      value: cdktn.numberToHclTerraform(struct!.fullLoadErrorPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_new_mapping_type: {
      value: cdktn.booleanToHclTerraform(struct!.useNewMappingType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointElasticsearchSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointElasticsearchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUri = this._endpointUri;
    }
    if (this._errorRetryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRetryDuration = this._errorRetryDuration;
    }
    if (this._fullLoadErrorPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullLoadErrorPercentage = this._fullLoadErrorPercentage;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    if (this._useNewMappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNewMappingType = this._useNewMappingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointElasticsearchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointUri = undefined;
      this._errorRetryDuration = undefined;
      this._fullLoadErrorPercentage = undefined;
      this._serviceAccessRoleArn = undefined;
      this._useNewMappingType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointUri = value.endpointUri;
      this._errorRetryDuration = value.errorRetryDuration;
      this._fullLoadErrorPercentage = value.fullLoadErrorPercentage;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
      this._useNewMappingType = value.useNewMappingType;
    }
  }

  // endpoint_uri - computed: false, optional: false, required: true
  private _endpointUri?: string; 
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }
  public set endpointUri(value: string) {
    this._endpointUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUriInput() {
    return this._endpointUri;
  }

  // error_retry_duration - computed: false, optional: true, required: false
  private _errorRetryDuration?: number; 
  public get errorRetryDuration() {
    return this.getNumberAttribute('error_retry_duration');
  }
  public set errorRetryDuration(value: number) {
    this._errorRetryDuration = value;
  }
  public resetErrorRetryDuration() {
    this._errorRetryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRetryDurationInput() {
    return this._errorRetryDuration;
  }

  // full_load_error_percentage - computed: false, optional: true, required: false
  private _fullLoadErrorPercentage?: number; 
  public get fullLoadErrorPercentage() {
    return this.getNumberAttribute('full_load_error_percentage');
  }
  public set fullLoadErrorPercentage(value: number) {
    this._fullLoadErrorPercentage = value;
  }
  public resetFullLoadErrorPercentage() {
    this._fullLoadErrorPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullLoadErrorPercentageInput() {
    return this._fullLoadErrorPercentage;
  }

  // service_access_role_arn - computed: false, optional: false, required: true
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }

  // use_new_mapping_type - computed: false, optional: true, required: false
  private _useNewMappingType?: boolean | cdktn.IResolvable; 
  public get useNewMappingType() {
    return this.getBooleanAttribute('use_new_mapping_type');
  }
  public set useNewMappingType(value: boolean | cdktn.IResolvable) {
    this._useNewMappingType = value;
  }
  public resetUseNewMappingType() {
    this._useNewMappingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNewMappingTypeInput() {
    return this._useNewMappingType;
  }
}
export interface DmsEndpointKafkaSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}
  */
  readonly broker: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}
  */
  readonly includeControlDetails?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}
  */
  readonly includeNullAndEmpty?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}
  */
  readonly includePartitionValue?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
  */
  readonly includeTableAlterOperations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}
  */
  readonly includeTransactionDetails?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}
  */
  readonly messageMaxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}
  */
  readonly noHexPrefix?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
  */
  readonly partitionIncludeSchemaTable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
  */
  readonly sslCaCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}
  */
  readonly sslClientCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}
  */
  readonly sslClientKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}
  */
  readonly sslClientKeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}
  */
  readonly topic?: string;
}

export function dmsEndpointKafkaSettingsToTerraform(struct?: DmsEndpointKafkaSettingsOutputReference | DmsEndpointKafkaSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker: cdktn.stringToTerraform(struct!.broker),
    include_control_details: cdktn.booleanToTerraform(struct!.includeControlDetails),
    include_null_and_empty: cdktn.booleanToTerraform(struct!.includeNullAndEmpty),
    include_partition_value: cdktn.booleanToTerraform(struct!.includePartitionValue),
    include_table_alter_operations: cdktn.booleanToTerraform(struct!.includeTableAlterOperations),
    include_transaction_details: cdktn.booleanToTerraform(struct!.includeTransactionDetails),
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    message_max_bytes: cdktn.numberToTerraform(struct!.messageMaxBytes),
    no_hex_prefix: cdktn.booleanToTerraform(struct!.noHexPrefix),
    partition_include_schema_table: cdktn.booleanToTerraform(struct!.partitionIncludeSchemaTable),
    sasl_mechanism: cdktn.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktn.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktn.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
    ssl_ca_certificate_arn: cdktn.stringToTerraform(struct!.sslCaCertificateArn),
    ssl_client_certificate_arn: cdktn.stringToTerraform(struct!.sslClientCertificateArn),
    ssl_client_key_arn: cdktn.stringToTerraform(struct!.sslClientKeyArn),
    ssl_client_key_password: cdktn.stringToTerraform(struct!.sslClientKeyPassword),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function dmsEndpointKafkaSettingsToHclTerraform(struct?: DmsEndpointKafkaSettingsOutputReference | DmsEndpointKafkaSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker: {
      value: cdktn.stringToHclTerraform(struct!.broker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_control_details: {
      value: cdktn.booleanToHclTerraform(struct!.includeControlDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_null_and_empty: {
      value: cdktn.booleanToHclTerraform(struct!.includeNullAndEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_partition_value: {
      value: cdktn.booleanToHclTerraform(struct!.includePartitionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_table_alter_operations: {
      value: cdktn.booleanToHclTerraform(struct!.includeTableAlterOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_transaction_details: {
      value: cdktn.booleanToHclTerraform(struct!.includeTransactionDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_max_bytes: {
      value: cdktn.numberToHclTerraform(struct!.messageMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_hex_prefix: {
      value: cdktn.booleanToHclTerraform(struct!.noHexPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partition_include_schema_table: {
      value: cdktn.booleanToHclTerraform(struct!.partitionIncludeSchemaTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sasl_mechanism: {
      value: cdktn.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_password: {
      value: cdktn.stringToHclTerraform(struct!.saslPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_username: {
      value: cdktn.stringToHclTerraform(struct!.saslUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.sslCaCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.sslClientCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.sslClientKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_key_password: {
      value: cdktn.stringToHclTerraform(struct!.sslClientKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointKafkaSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointKafkaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broker !== undefined) {
      hasAnyValues = true;
      internalValueResult.broker = this._broker;
    }
    if (this._includeControlDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeControlDetails = this._includeControlDetails;
    }
    if (this._includeNullAndEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
    }
    if (this._includePartitionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePartitionValue = this._includePartitionValue;
    }
    if (this._includeTableAlterOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
    }
    if (this._includeTransactionDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._messageMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageMaxBytes = this._messageMaxBytes;
    }
    if (this._noHexPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHexPrefix = this._noHexPrefix;
    }
    if (this._partitionIncludeSchemaTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslCaCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
    }
    if (this._sslClientCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificateArn = this._sslClientCertificateArn;
    }
    if (this._sslClientKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKeyArn = this._sslClientKeyArn;
    }
    if (this._sslClientKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKeyPassword = this._sslClientKeyPassword;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointKafkaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broker = undefined;
      this._includeControlDetails = undefined;
      this._includeNullAndEmpty = undefined;
      this._includePartitionValue = undefined;
      this._includeTableAlterOperations = undefined;
      this._includeTransactionDetails = undefined;
      this._messageFormat = undefined;
      this._messageMaxBytes = undefined;
      this._noHexPrefix = undefined;
      this._partitionIncludeSchemaTable = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
      this._sslCaCertificateArn = undefined;
      this._sslClientCertificateArn = undefined;
      this._sslClientKeyArn = undefined;
      this._sslClientKeyPassword = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broker = value.broker;
      this._includeControlDetails = value.includeControlDetails;
      this._includeNullAndEmpty = value.includeNullAndEmpty;
      this._includePartitionValue = value.includePartitionValue;
      this._includeTableAlterOperations = value.includeTableAlterOperations;
      this._includeTransactionDetails = value.includeTransactionDetails;
      this._messageFormat = value.messageFormat;
      this._messageMaxBytes = value.messageMaxBytes;
      this._noHexPrefix = value.noHexPrefix;
      this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
      this._sslCaCertificateArn = value.sslCaCertificateArn;
      this._sslClientCertificateArn = value.sslClientCertificateArn;
      this._sslClientKeyArn = value.sslClientKeyArn;
      this._sslClientKeyPassword = value.sslClientKeyPassword;
      this._topic = value.topic;
    }
  }

  // broker - computed: false, optional: false, required: true
  private _broker?: string; 
  public get broker() {
    return this.getStringAttribute('broker');
  }
  public set broker(value: string) {
    this._broker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerInput() {
    return this._broker;
  }

  // include_control_details - computed: false, optional: true, required: false
  private _includeControlDetails?: boolean | cdktn.IResolvable; 
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }
  public set includeControlDetails(value: boolean | cdktn.IResolvable) {
    this._includeControlDetails = value;
  }
  public resetIncludeControlDetails() {
    this._includeControlDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeControlDetailsInput() {
    return this._includeControlDetails;
  }

  // include_null_and_empty - computed: false, optional: true, required: false
  private _includeNullAndEmpty?: boolean | cdktn.IResolvable; 
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }
  public set includeNullAndEmpty(value: boolean | cdktn.IResolvable) {
    this._includeNullAndEmpty = value;
  }
  public resetIncludeNullAndEmpty() {
    this._includeNullAndEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNullAndEmptyInput() {
    return this._includeNullAndEmpty;
  }

  // include_partition_value - computed: false, optional: true, required: false
  private _includePartitionValue?: boolean | cdktn.IResolvable; 
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }
  public set includePartitionValue(value: boolean | cdktn.IResolvable) {
    this._includePartitionValue = value;
  }
  public resetIncludePartitionValue() {
    this._includePartitionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePartitionValueInput() {
    return this._includePartitionValue;
  }

  // include_table_alter_operations - computed: false, optional: true, required: false
  private _includeTableAlterOperations?: boolean | cdktn.IResolvable; 
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }
  public set includeTableAlterOperations(value: boolean | cdktn.IResolvable) {
    this._includeTableAlterOperations = value;
  }
  public resetIncludeTableAlterOperations() {
    this._includeTableAlterOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTableAlterOperationsInput() {
    return this._includeTableAlterOperations;
  }

  // include_transaction_details - computed: false, optional: true, required: false
  private _includeTransactionDetails?: boolean | cdktn.IResolvable; 
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }
  public set includeTransactionDetails(value: boolean | cdktn.IResolvable) {
    this._includeTransactionDetails = value;
  }
  public resetIncludeTransactionDetails() {
    this._includeTransactionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTransactionDetailsInput() {
    return this._includeTransactionDetails;
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // message_max_bytes - computed: false, optional: true, required: false
  private _messageMaxBytes?: number; 
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }
  public set messageMaxBytes(value: number) {
    this._messageMaxBytes = value;
  }
  public resetMessageMaxBytes() {
    this._messageMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageMaxBytesInput() {
    return this._messageMaxBytes;
  }

  // no_hex_prefix - computed: false, optional: true, required: false
  private _noHexPrefix?: boolean | cdktn.IResolvable; 
  public get noHexPrefix() {
    return this.getBooleanAttribute('no_hex_prefix');
  }
  public set noHexPrefix(value: boolean | cdktn.IResolvable) {
    this._noHexPrefix = value;
  }
  public resetNoHexPrefix() {
    this._noHexPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHexPrefixInput() {
    return this._noHexPrefix;
  }

  // partition_include_schema_table - computed: false, optional: true, required: false
  private _partitionIncludeSchemaTable?: boolean | cdktn.IResolvable; 
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }
  public set partitionIncludeSchemaTable(value: boolean | cdktn.IResolvable) {
    this._partitionIncludeSchemaTable = value;
  }
  public resetPartitionIncludeSchemaTable() {
    this._partitionIncludeSchemaTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIncludeSchemaTableInput() {
    return this._partitionIncludeSchemaTable;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_ca_certificate_arn - computed: false, optional: true, required: false
  private _sslCaCertificateArn?: string; 
  public get sslCaCertificateArn() {
    return this.getStringAttribute('ssl_ca_certificate_arn');
  }
  public set sslCaCertificateArn(value: string) {
    this._sslCaCertificateArn = value;
  }
  public resetSslCaCertificateArn() {
    this._sslCaCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateArnInput() {
    return this._sslCaCertificateArn;
  }

  // ssl_client_certificate_arn - computed: false, optional: true, required: false
  private _sslClientCertificateArn?: string; 
  public get sslClientCertificateArn() {
    return this.getStringAttribute('ssl_client_certificate_arn');
  }
  public set sslClientCertificateArn(value: string) {
    this._sslClientCertificateArn = value;
  }
  public resetSslClientCertificateArn() {
    this._sslClientCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateArnInput() {
    return this._sslClientCertificateArn;
  }

  // ssl_client_key_arn - computed: false, optional: true, required: false
  private _sslClientKeyArn?: string; 
  public get sslClientKeyArn() {
    return this.getStringAttribute('ssl_client_key_arn');
  }
  public set sslClientKeyArn(value: string) {
    this._sslClientKeyArn = value;
  }
  public resetSslClientKeyArn() {
    this._sslClientKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeyArnInput() {
    return this._sslClientKeyArn;
  }

  // ssl_client_key_password - computed: false, optional: true, required: false
  private _sslClientKeyPassword?: string; 
  public get sslClientKeyPassword() {
    return this.getStringAttribute('ssl_client_key_password');
  }
  public set sslClientKeyPassword(value: string) {
    this._sslClientKeyPassword = value;
  }
  public resetSslClientKeyPassword() {
    this._sslClientKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeyPasswordInput() {
    return this._sslClientKeyPassword;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DmsEndpointKinesisSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}
  */
  readonly includeControlDetails?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}
  */
  readonly includeNullAndEmpty?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}
  */
  readonly includePartitionValue?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
  */
  readonly includeTableAlterOperations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}
  */
  readonly includeTransactionDetails?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
  */
  readonly partitionIncludeSchemaTable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}
  */
  readonly streamArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_large_integer_value DmsEndpoint#use_large_integer_value}
  */
  readonly useLargeIntegerValue?: boolean | cdktn.IResolvable;
}

export function dmsEndpointKinesisSettingsToTerraform(struct?: DmsEndpointKinesisSettingsOutputReference | DmsEndpointKinesisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_control_details: cdktn.booleanToTerraform(struct!.includeControlDetails),
    include_null_and_empty: cdktn.booleanToTerraform(struct!.includeNullAndEmpty),
    include_partition_value: cdktn.booleanToTerraform(struct!.includePartitionValue),
    include_table_alter_operations: cdktn.booleanToTerraform(struct!.includeTableAlterOperations),
    include_transaction_details: cdktn.booleanToTerraform(struct!.includeTransactionDetails),
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    partition_include_schema_table: cdktn.booleanToTerraform(struct!.partitionIncludeSchemaTable),
    service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
    stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    use_large_integer_value: cdktn.booleanToTerraform(struct!.useLargeIntegerValue),
  }
}


export function dmsEndpointKinesisSettingsToHclTerraform(struct?: DmsEndpointKinesisSettingsOutputReference | DmsEndpointKinesisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_control_details: {
      value: cdktn.booleanToHclTerraform(struct!.includeControlDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_null_and_empty: {
      value: cdktn.booleanToHclTerraform(struct!.includeNullAndEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_partition_value: {
      value: cdktn.booleanToHclTerraform(struct!.includePartitionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_table_alter_operations: {
      value: cdktn.booleanToHclTerraform(struct!.includeTableAlterOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_transaction_details: {
      value: cdktn.booleanToHclTerraform(struct!.includeTransactionDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_include_schema_table: {
      value: cdktn.booleanToHclTerraform(struct!.partitionIncludeSchemaTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_large_integer_value: {
      value: cdktn.booleanToHclTerraform(struct!.useLargeIntegerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointKinesisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointKinesisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeControlDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeControlDetails = this._includeControlDetails;
    }
    if (this._includeNullAndEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
    }
    if (this._includePartitionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePartitionValue = this._includePartitionValue;
    }
    if (this._includeTableAlterOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
    }
    if (this._includeTransactionDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._partitionIncludeSchemaTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    if (this._useLargeIntegerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLargeIntegerValue = this._useLargeIntegerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointKinesisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeControlDetails = undefined;
      this._includeNullAndEmpty = undefined;
      this._includePartitionValue = undefined;
      this._includeTableAlterOperations = undefined;
      this._includeTransactionDetails = undefined;
      this._messageFormat = undefined;
      this._partitionIncludeSchemaTable = undefined;
      this._serviceAccessRoleArn = undefined;
      this._streamArn = undefined;
      this._useLargeIntegerValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeControlDetails = value.includeControlDetails;
      this._includeNullAndEmpty = value.includeNullAndEmpty;
      this._includePartitionValue = value.includePartitionValue;
      this._includeTableAlterOperations = value.includeTableAlterOperations;
      this._includeTransactionDetails = value.includeTransactionDetails;
      this._messageFormat = value.messageFormat;
      this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
      this._streamArn = value.streamArn;
      this._useLargeIntegerValue = value.useLargeIntegerValue;
    }
  }

  // include_control_details - computed: false, optional: true, required: false
  private _includeControlDetails?: boolean | cdktn.IResolvable; 
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }
  public set includeControlDetails(value: boolean | cdktn.IResolvable) {
    this._includeControlDetails = value;
  }
  public resetIncludeControlDetails() {
    this._includeControlDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeControlDetailsInput() {
    return this._includeControlDetails;
  }

  // include_null_and_empty - computed: false, optional: true, required: false
  private _includeNullAndEmpty?: boolean | cdktn.IResolvable; 
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }
  public set includeNullAndEmpty(value: boolean | cdktn.IResolvable) {
    this._includeNullAndEmpty = value;
  }
  public resetIncludeNullAndEmpty() {
    this._includeNullAndEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNullAndEmptyInput() {
    return this._includeNullAndEmpty;
  }

  // include_partition_value - computed: false, optional: true, required: false
  private _includePartitionValue?: boolean | cdktn.IResolvable; 
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }
  public set includePartitionValue(value: boolean | cdktn.IResolvable) {
    this._includePartitionValue = value;
  }
  public resetIncludePartitionValue() {
    this._includePartitionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePartitionValueInput() {
    return this._includePartitionValue;
  }

  // include_table_alter_operations - computed: false, optional: true, required: false
  private _includeTableAlterOperations?: boolean | cdktn.IResolvable; 
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }
  public set includeTableAlterOperations(value: boolean | cdktn.IResolvable) {
    this._includeTableAlterOperations = value;
  }
  public resetIncludeTableAlterOperations() {
    this._includeTableAlterOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTableAlterOperationsInput() {
    return this._includeTableAlterOperations;
  }

  // include_transaction_details - computed: false, optional: true, required: false
  private _includeTransactionDetails?: boolean | cdktn.IResolvable; 
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }
  public set includeTransactionDetails(value: boolean | cdktn.IResolvable) {
    this._includeTransactionDetails = value;
  }
  public resetIncludeTransactionDetails() {
    this._includeTransactionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTransactionDetailsInput() {
    return this._includeTransactionDetails;
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // partition_include_schema_table - computed: false, optional: true, required: false
  private _partitionIncludeSchemaTable?: boolean | cdktn.IResolvable; 
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }
  public set partitionIncludeSchemaTable(value: boolean | cdktn.IResolvable) {
    this._partitionIncludeSchemaTable = value;
  }
  public resetPartitionIncludeSchemaTable() {
    this._partitionIncludeSchemaTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIncludeSchemaTableInput() {
    return this._partitionIncludeSchemaTable;
  }

  // service_access_role_arn - computed: false, optional: true, required: false
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  public resetServiceAccessRoleArn() {
    this._serviceAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }

  // stream_arn - computed: false, optional: true, required: false
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  public resetStreamArn() {
    this._streamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }

  // use_large_integer_value - computed: false, optional: true, required: false
  private _useLargeIntegerValue?: boolean | cdktn.IResolvable; 
  public get useLargeIntegerValue() {
    return this.getBooleanAttribute('use_large_integer_value');
  }
  public set useLargeIntegerValue(value: boolean | cdktn.IResolvable) {
    this._useLargeIntegerValue = value;
  }
  public resetUseLargeIntegerValue() {
    this._useLargeIntegerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLargeIntegerValueInput() {
    return this._useLargeIntegerValue;
  }
}
export interface DmsEndpointMongodbSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}
  */
  readonly authMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}
  */
  readonly authSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}
  */
  readonly docsToInvestigate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}
  */
  readonly extractDocId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}
  */
  readonly nestingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_update_lookup DmsEndpoint#use_update_lookup}
  */
  readonly useUpdateLookup?: boolean | cdktn.IResolvable;
}

export function dmsEndpointMongodbSettingsToTerraform(struct?: DmsEndpointMongodbSettingsOutputReference | DmsEndpointMongodbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_mechanism: cdktn.stringToTerraform(struct!.authMechanism),
    auth_source: cdktn.stringToTerraform(struct!.authSource),
    auth_type: cdktn.stringToTerraform(struct!.authType),
    docs_to_investigate: cdktn.stringToTerraform(struct!.docsToInvestigate),
    extract_doc_id: cdktn.stringToTerraform(struct!.extractDocId),
    nesting_level: cdktn.stringToTerraform(struct!.nestingLevel),
    use_update_lookup: cdktn.booleanToTerraform(struct!.useUpdateLookup),
  }
}


export function dmsEndpointMongodbSettingsToHclTerraform(struct?: DmsEndpointMongodbSettingsOutputReference | DmsEndpointMongodbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_mechanism: {
      value: cdktn.stringToHclTerraform(struct!.authMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_source: {
      value: cdktn.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docs_to_investigate: {
      value: cdktn.stringToHclTerraform(struct!.docsToInvestigate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extract_doc_id: {
      value: cdktn.stringToHclTerraform(struct!.extractDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nesting_level: {
      value: cdktn.stringToHclTerraform(struct!.nestingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_update_lookup: {
      value: cdktn.booleanToHclTerraform(struct!.useUpdateLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointMongodbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointMongodbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMechanism = this._authMechanism;
    }
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._docsToInvestigate !== undefined) {
      hasAnyValues = true;
      internalValueResult.docsToInvestigate = this._docsToInvestigate;
    }
    if (this._extractDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractDocId = this._extractDocId;
    }
    if (this._nestingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestingLevel = this._nestingLevel;
    }
    if (this._useUpdateLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUpdateLookup = this._useUpdateLookup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointMongodbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authMechanism = undefined;
      this._authSource = undefined;
      this._authType = undefined;
      this._docsToInvestigate = undefined;
      this._extractDocId = undefined;
      this._nestingLevel = undefined;
      this._useUpdateLookup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authMechanism = value.authMechanism;
      this._authSource = value.authSource;
      this._authType = value.authType;
      this._docsToInvestigate = value.docsToInvestigate;
      this._extractDocId = value.extractDocId;
      this._nestingLevel = value.nestingLevel;
      this._useUpdateLookup = value.useUpdateLookup;
    }
  }

  // auth_mechanism - computed: false, optional: true, required: false
  private _authMechanism?: string; 
  public get authMechanism() {
    return this.getStringAttribute('auth_mechanism');
  }
  public set authMechanism(value: string) {
    this._authMechanism = value;
  }
  public resetAuthMechanism() {
    this._authMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMechanismInput() {
    return this._authMechanism;
  }

  // auth_source - computed: false, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // docs_to_investigate - computed: false, optional: true, required: false
  private _docsToInvestigate?: string; 
  public get docsToInvestigate() {
    return this.getStringAttribute('docs_to_investigate');
  }
  public set docsToInvestigate(value: string) {
    this._docsToInvestigate = value;
  }
  public resetDocsToInvestigate() {
    this._docsToInvestigate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsToInvestigateInput() {
    return this._docsToInvestigate;
  }

  // extract_doc_id - computed: false, optional: true, required: false
  private _extractDocId?: string; 
  public get extractDocId() {
    return this.getStringAttribute('extract_doc_id');
  }
  public set extractDocId(value: string) {
    this._extractDocId = value;
  }
  public resetExtractDocId() {
    this._extractDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractDocIdInput() {
    return this._extractDocId;
  }

  // nesting_level - computed: false, optional: true, required: false
  private _nestingLevel?: string; 
  public get nestingLevel() {
    return this.getStringAttribute('nesting_level');
  }
  public set nestingLevel(value: string) {
    this._nestingLevel = value;
  }
  public resetNestingLevel() {
    this._nestingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestingLevelInput() {
    return this._nestingLevel;
  }

  // use_update_lookup - computed: false, optional: true, required: false
  private _useUpdateLookup?: boolean | cdktn.IResolvable; 
  public get useUpdateLookup() {
    return this.getBooleanAttribute('use_update_lookup');
  }
  public set useUpdateLookup(value: boolean | cdktn.IResolvable) {
    this._useUpdateLookup = value;
  }
  public resetUseUpdateLookup() {
    this._useUpdateLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUpdateLookupInput() {
    return this._useUpdateLookup;
  }
}
export interface DmsEndpointMysqlSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}
  */
  readonly afterConnectScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}
  */
  readonly cleanSourceMetadataOnMismatch?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}
  */
  readonly eventsPollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}
  */
  readonly executeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}
  */
  readonly parallelLoadThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}
  */
  readonly serverTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}
  */
  readonly targetDbType?: string;
}

export function dmsEndpointMysqlSettingsToTerraform(struct?: DmsEndpointMysqlSettingsOutputReference | DmsEndpointMysqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_connect_script: cdktn.stringToTerraform(struct!.afterConnectScript),
    authentication_method: cdktn.stringToTerraform(struct!.authenticationMethod),
    clean_source_metadata_on_mismatch: cdktn.booleanToTerraform(struct!.cleanSourceMetadataOnMismatch),
    events_poll_interval: cdktn.numberToTerraform(struct!.eventsPollInterval),
    execute_timeout: cdktn.numberToTerraform(struct!.executeTimeout),
    max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
    parallel_load_threads: cdktn.numberToTerraform(struct!.parallelLoadThreads),
    server_timezone: cdktn.stringToTerraform(struct!.serverTimezone),
    service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
    target_db_type: cdktn.stringToTerraform(struct!.targetDbType),
  }
}


export function dmsEndpointMysqlSettingsToHclTerraform(struct?: DmsEndpointMysqlSettingsOutputReference | DmsEndpointMysqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_connect_script: {
      value: cdktn.stringToHclTerraform(struct!.afterConnectScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_method: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clean_source_metadata_on_mismatch: {
      value: cdktn.booleanToHclTerraform(struct!.cleanSourceMetadataOnMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    events_poll_interval: {
      value: cdktn.numberToHclTerraform(struct!.eventsPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    execute_timeout: {
      value: cdktn.numberToHclTerraform(struct!.executeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_file_size: {
      value: cdktn.numberToHclTerraform(struct!.maxFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallel_load_threads: {
      value: cdktn.numberToHclTerraform(struct!.parallelLoadThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_timezone: {
      value: cdktn.stringToHclTerraform(struct!.serverTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_db_type: {
      value: cdktn.stringToHclTerraform(struct!.targetDbType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointMysqlSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointMysqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterConnectScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterConnectScript = this._afterConnectScript;
    }
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._cleanSourceMetadataOnMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanSourceMetadataOnMismatch = this._cleanSourceMetadataOnMismatch;
    }
    if (this._eventsPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventsPollInterval = this._eventsPollInterval;
    }
    if (this._executeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTimeout = this._executeTimeout;
    }
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    if (this._parallelLoadThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelLoadThreads = this._parallelLoadThreads;
    }
    if (this._serverTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTimezone = this._serverTimezone;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    if (this._targetDbType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDbType = this._targetDbType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointMysqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterConnectScript = undefined;
      this._authenticationMethod = undefined;
      this._cleanSourceMetadataOnMismatch = undefined;
      this._eventsPollInterval = undefined;
      this._executeTimeout = undefined;
      this._maxFileSize = undefined;
      this._parallelLoadThreads = undefined;
      this._serverTimezone = undefined;
      this._serviceAccessRoleArn = undefined;
      this._targetDbType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterConnectScript = value.afterConnectScript;
      this._authenticationMethod = value.authenticationMethod;
      this._cleanSourceMetadataOnMismatch = value.cleanSourceMetadataOnMismatch;
      this._eventsPollInterval = value.eventsPollInterval;
      this._executeTimeout = value.executeTimeout;
      this._maxFileSize = value.maxFileSize;
      this._parallelLoadThreads = value.parallelLoadThreads;
      this._serverTimezone = value.serverTimezone;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
      this._targetDbType = value.targetDbType;
    }
  }

  // after_connect_script - computed: true, optional: true, required: false
  private _afterConnectScript?: string; 
  public get afterConnectScript() {
    return this.getStringAttribute('after_connect_script');
  }
  public set afterConnectScript(value: string) {
    this._afterConnectScript = value;
  }
  public resetAfterConnectScript() {
    this._afterConnectScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterConnectScriptInput() {
    return this._afterConnectScript;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // clean_source_metadata_on_mismatch - computed: true, optional: true, required: false
  private _cleanSourceMetadataOnMismatch?: boolean | cdktn.IResolvable; 
  public get cleanSourceMetadataOnMismatch() {
    return this.getBooleanAttribute('clean_source_metadata_on_mismatch');
  }
  public set cleanSourceMetadataOnMismatch(value: boolean | cdktn.IResolvable) {
    this._cleanSourceMetadataOnMismatch = value;
  }
  public resetCleanSourceMetadataOnMismatch() {
    this._cleanSourceMetadataOnMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanSourceMetadataOnMismatchInput() {
    return this._cleanSourceMetadataOnMismatch;
  }

  // events_poll_interval - computed: true, optional: true, required: false
  private _eventsPollInterval?: number; 
  public get eventsPollInterval() {
    return this.getNumberAttribute('events_poll_interval');
  }
  public set eventsPollInterval(value: number) {
    this._eventsPollInterval = value;
  }
  public resetEventsPollInterval() {
    this._eventsPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsPollIntervalInput() {
    return this._eventsPollInterval;
  }

  // execute_timeout - computed: true, optional: true, required: false
  private _executeTimeout?: number; 
  public get executeTimeout() {
    return this.getNumberAttribute('execute_timeout');
  }
  public set executeTimeout(value: number) {
    this._executeTimeout = value;
  }
  public resetExecuteTimeout() {
    this._executeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeoutInput() {
    return this._executeTimeout;
  }

  // max_file_size - computed: true, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // parallel_load_threads - computed: true, optional: true, required: false
  private _parallelLoadThreads?: number; 
  public get parallelLoadThreads() {
    return this.getNumberAttribute('parallel_load_threads');
  }
  public set parallelLoadThreads(value: number) {
    this._parallelLoadThreads = value;
  }
  public resetParallelLoadThreads() {
    this._parallelLoadThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelLoadThreadsInput() {
    return this._parallelLoadThreads;
  }

  // server_timezone - computed: true, optional: true, required: false
  private _serverTimezone?: string; 
  public get serverTimezone() {
    return this.getStringAttribute('server_timezone');
  }
  public set serverTimezone(value: string) {
    this._serverTimezone = value;
  }
  public resetServerTimezone() {
    this._serverTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimezoneInput() {
    return this._serverTimezone;
  }

  // service_access_role_arn - computed: true, optional: true, required: false
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  public resetServiceAccessRoleArn() {
    this._serviceAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }

  // target_db_type - computed: true, optional: true, required: false
  private _targetDbType?: string; 
  public get targetDbType() {
    return this.getStringAttribute('target_db_type');
  }
  public set targetDbType(value: string) {
    this._targetDbType = value;
  }
  public resetTargetDbType() {
    this._targetDbType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDbTypeInput() {
    return this._targetDbType;
  }
}
export interface DmsEndpointOracleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}
  */
  readonly accessAlternateDirectly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}
  */
  readonly addSupplementalLogging?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}
  */
  readonly additionalArchivedLogDestId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#allow_selected_nested_tables DmsEndpoint#allow_selected_nested_tables}
  */
  readonly allowSelectedNestedTables?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}
  */
  readonly archivedLogDestId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}
  */
  readonly archivedLogsOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}
  */
  readonly asmPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}
  */
  readonly asmServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}
  */
  readonly asmUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}
  */
  readonly charLengthSemantics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#convert_timestamp_with_zone_to_utc DmsEndpoint#convert_timestamp_with_zone_to_utc}
  */
  readonly convertTimestampWithZoneToUtc?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}
  */
  readonly directPathNoLog?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}
  */
  readonly directPathParallelLoad?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}
  */
  readonly enableHomogenousTablespace?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}
  */
  readonly extraArchivedLogDestIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#fail_task_on_lob_truncation DmsEndpoint#fail_task_on_lob_truncation}
  */
  readonly failTaskOnLobTruncation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}
  */
  readonly numberDatatypeScale?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#open_transaction_window DmsEndpoint#open_transaction_window}
  */
  readonly openTransactionWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}
  */
  readonly oraclePathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}
  */
  readonly parallelAsmReadThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}
  */
  readonly readAheadBlocks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}
  */
  readonly readTableSpaceName?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}
  */
  readonly replacePathPrefix?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}
  */
  readonly secretsManagerOracleAsmAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}
  */
  readonly secretsManagerOracleAsmSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}
  */
  readonly securityDbEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}
  */
  readonly securityDbEncryptionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}
  */
  readonly spatialDataOptionToGeoJsonFunctionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}
  */
  readonly standbyDelayTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}
  */
  readonly trimSpaceInChar?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}
  */
  readonly useAlternateFolderForOnline?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_bfile DmsEndpoint#use_bfile}
  */
  readonly useBfile?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}
  */
  readonly useDirectPathFullLoad?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}
  */
  readonly useLogminerReader?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}
  */
  readonly usePathPrefix?: string;
}

export function dmsEndpointOracleSettingsToTerraform(struct?: DmsEndpointOracleSettingsOutputReference | DmsEndpointOracleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_alternate_directly: cdktn.booleanToTerraform(struct!.accessAlternateDirectly),
    add_supplemental_logging: cdktn.booleanToTerraform(struct!.addSupplementalLogging),
    additional_archived_log_dest_id: cdktn.numberToTerraform(struct!.additionalArchivedLogDestId),
    allow_selected_nested_tables: cdktn.booleanToTerraform(struct!.allowSelectedNestedTables),
    archived_log_dest_id: cdktn.numberToTerraform(struct!.archivedLogDestId),
    archived_logs_only: cdktn.booleanToTerraform(struct!.archivedLogsOnly),
    asm_password: cdktn.stringToTerraform(struct!.asmPassword),
    asm_server: cdktn.stringToTerraform(struct!.asmServer),
    asm_user: cdktn.stringToTerraform(struct!.asmUser),
    authentication_method: cdktn.stringToTerraform(struct!.authenticationMethod),
    char_length_semantics: cdktn.stringToTerraform(struct!.charLengthSemantics),
    convert_timestamp_with_zone_to_utc: cdktn.booleanToTerraform(struct!.convertTimestampWithZoneToUtc),
    direct_path_no_log: cdktn.booleanToTerraform(struct!.directPathNoLog),
    direct_path_parallel_load: cdktn.booleanToTerraform(struct!.directPathParallelLoad),
    enable_homogenous_tablespace: cdktn.booleanToTerraform(struct!.enableHomogenousTablespace),
    extra_archived_log_dest_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.extraArchivedLogDestIds),
    fail_task_on_lob_truncation: cdktn.booleanToTerraform(struct!.failTaskOnLobTruncation),
    number_datatype_scale: cdktn.numberToTerraform(struct!.numberDatatypeScale),
    open_transaction_window: cdktn.numberToTerraform(struct!.openTransactionWindow),
    oracle_path_prefix: cdktn.stringToTerraform(struct!.oraclePathPrefix),
    parallel_asm_read_threads: cdktn.numberToTerraform(struct!.parallelAsmReadThreads),
    read_ahead_blocks: cdktn.numberToTerraform(struct!.readAheadBlocks),
    read_table_space_name: cdktn.booleanToTerraform(struct!.readTableSpaceName),
    replace_path_prefix: cdktn.booleanToTerraform(struct!.replacePathPrefix),
    retry_interval: cdktn.numberToTerraform(struct!.retryInterval),
    secrets_manager_oracle_asm_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
    secrets_manager_oracle_asm_secret_id: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmSecretId),
    security_db_encryption: cdktn.stringToTerraform(struct!.securityDbEncryption),
    security_db_encryption_name: cdktn.stringToTerraform(struct!.securityDbEncryptionName),
    spatial_data_option_to_geo_json_function_name: cdktn.stringToTerraform(struct!.spatialDataOptionToGeoJsonFunctionName),
    standby_delay_time: cdktn.numberToTerraform(struct!.standbyDelayTime),
    trim_space_in_char: cdktn.booleanToTerraform(struct!.trimSpaceInChar),
    use_alternate_folder_for_online: cdktn.booleanToTerraform(struct!.useAlternateFolderForOnline),
    use_bfile: cdktn.booleanToTerraform(struct!.useBfile),
    use_direct_path_full_load: cdktn.booleanToTerraform(struct!.useDirectPathFullLoad),
    use_logminer_reader: cdktn.booleanToTerraform(struct!.useLogminerReader),
    use_path_prefix: cdktn.stringToTerraform(struct!.usePathPrefix),
  }
}


export function dmsEndpointOracleSettingsToHclTerraform(struct?: DmsEndpointOracleSettingsOutputReference | DmsEndpointOracleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_alternate_directly: {
      value: cdktn.booleanToHclTerraform(struct!.accessAlternateDirectly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_supplemental_logging: {
      value: cdktn.booleanToHclTerraform(struct!.addSupplementalLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    additional_archived_log_dest_id: {
      value: cdktn.numberToHclTerraform(struct!.additionalArchivedLogDestId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_selected_nested_tables: {
      value: cdktn.booleanToHclTerraform(struct!.allowSelectedNestedTables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    archived_log_dest_id: {
      value: cdktn.numberToHclTerraform(struct!.archivedLogDestId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    archived_logs_only: {
      value: cdktn.booleanToHclTerraform(struct!.archivedLogsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asm_password: {
      value: cdktn.stringToHclTerraform(struct!.asmPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asm_server: {
      value: cdktn.stringToHclTerraform(struct!.asmServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asm_user: {
      value: cdktn.stringToHclTerraform(struct!.asmUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_method: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    char_length_semantics: {
      value: cdktn.stringToHclTerraform(struct!.charLengthSemantics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    convert_timestamp_with_zone_to_utc: {
      value: cdktn.booleanToHclTerraform(struct!.convertTimestampWithZoneToUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    direct_path_no_log: {
      value: cdktn.booleanToHclTerraform(struct!.directPathNoLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    direct_path_parallel_load: {
      value: cdktn.booleanToHclTerraform(struct!.directPathParallelLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_homogenous_tablespace: {
      value: cdktn.booleanToHclTerraform(struct!.enableHomogenousTablespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_archived_log_dest_ids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.extraArchivedLogDestIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    fail_task_on_lob_truncation: {
      value: cdktn.booleanToHclTerraform(struct!.failTaskOnLobTruncation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_datatype_scale: {
      value: cdktn.numberToHclTerraform(struct!.numberDatatypeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_transaction_window: {
      value: cdktn.numberToHclTerraform(struct!.openTransactionWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oracle_path_prefix: {
      value: cdktn.stringToHclTerraform(struct!.oraclePathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel_asm_read_threads: {
      value: cdktn.numberToHclTerraform(struct!.parallelAsmReadThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_ahead_blocks: {
      value: cdktn.numberToHclTerraform(struct!.readAheadBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_table_space_name: {
      value: cdktn.booleanToHclTerraform(struct!.readTableSpaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_path_prefix: {
      value: cdktn.booleanToHclTerraform(struct!.replacePathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_interval: {
      value: cdktn.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secrets_manager_oracle_asm_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_oracle_asm_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_db_encryption: {
      value: cdktn.stringToHclTerraform(struct!.securityDbEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_db_encryption_name: {
      value: cdktn.stringToHclTerraform(struct!.securityDbEncryptionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spatial_data_option_to_geo_json_function_name: {
      value: cdktn.stringToHclTerraform(struct!.spatialDataOptionToGeoJsonFunctionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_delay_time: {
      value: cdktn.numberToHclTerraform(struct!.standbyDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trim_space_in_char: {
      value: cdktn.booleanToHclTerraform(struct!.trimSpaceInChar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_alternate_folder_for_online: {
      value: cdktn.booleanToHclTerraform(struct!.useAlternateFolderForOnline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_bfile: {
      value: cdktn.booleanToHclTerraform(struct!.useBfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_direct_path_full_load: {
      value: cdktn.booleanToHclTerraform(struct!.useDirectPathFullLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_logminer_reader: {
      value: cdktn.booleanToHclTerraform(struct!.useLogminerReader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_path_prefix: {
      value: cdktn.stringToHclTerraform(struct!.usePathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointOracleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointOracleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessAlternateDirectly !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessAlternateDirectly = this._accessAlternateDirectly;
    }
    if (this._addSupplementalLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSupplementalLogging = this._addSupplementalLogging;
    }
    if (this._additionalArchivedLogDestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalArchivedLogDestId = this._additionalArchivedLogDestId;
    }
    if (this._allowSelectedNestedTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSelectedNestedTables = this._allowSelectedNestedTables;
    }
    if (this._archivedLogDestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivedLogDestId = this._archivedLogDestId;
    }
    if (this._archivedLogsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivedLogsOnly = this._archivedLogsOnly;
    }
    if (this._asmPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmPassword = this._asmPassword;
    }
    if (this._asmServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmServer = this._asmServer;
    }
    if (this._asmUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmUser = this._asmUser;
    }
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._charLengthSemantics !== undefined) {
      hasAnyValues = true;
      internalValueResult.charLengthSemantics = this._charLengthSemantics;
    }
    if (this._convertTimestampWithZoneToUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertTimestampWithZoneToUtc = this._convertTimestampWithZoneToUtc;
    }
    if (this._directPathNoLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.directPathNoLog = this._directPathNoLog;
    }
    if (this._directPathParallelLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.directPathParallelLoad = this._directPathParallelLoad;
    }
    if (this._enableHomogenousTablespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHomogenousTablespace = this._enableHomogenousTablespace;
    }
    if (this._extraArchivedLogDestIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArchivedLogDestIds = this._extraArchivedLogDestIds;
    }
    if (this._failTaskOnLobTruncation !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTaskOnLobTruncation = this._failTaskOnLobTruncation;
    }
    if (this._numberDatatypeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberDatatypeScale = this._numberDatatypeScale;
    }
    if (this._openTransactionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTransactionWindow = this._openTransactionWindow;
    }
    if (this._oraclePathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.oraclePathPrefix = this._oraclePathPrefix;
    }
    if (this._parallelAsmReadThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelAsmReadThreads = this._parallelAsmReadThreads;
    }
    if (this._readAheadBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAheadBlocks = this._readAheadBlocks;
    }
    if (this._readTableSpaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTableSpaceName = this._readTableSpaceName;
    }
    if (this._replacePathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePathPrefix = this._replacePathPrefix;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._secretsManagerOracleAsmAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerOracleAsmAccessRoleArn = this._secretsManagerOracleAsmAccessRoleArn;
    }
    if (this._secretsManagerOracleAsmSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerOracleAsmSecretId = this._secretsManagerOracleAsmSecretId;
    }
    if (this._securityDbEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityDbEncryption = this._securityDbEncryption;
    }
    if (this._securityDbEncryptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityDbEncryptionName = this._securityDbEncryptionName;
    }
    if (this._spatialDataOptionToGeoJsonFunctionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spatialDataOptionToGeoJsonFunctionName = this._spatialDataOptionToGeoJsonFunctionName;
    }
    if (this._standbyDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyDelayTime = this._standbyDelayTime;
    }
    if (this._trimSpaceInChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpaceInChar = this._trimSpaceInChar;
    }
    if (this._useAlternateFolderForOnline !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAlternateFolderForOnline = this._useAlternateFolderForOnline;
    }
    if (this._useBfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBfile = this._useBfile;
    }
    if (this._useDirectPathFullLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDirectPathFullLoad = this._useDirectPathFullLoad;
    }
    if (this._useLogminerReader !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogminerReader = this._useLogminerReader;
    }
    if (this._usePathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePathPrefix = this._usePathPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointOracleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessAlternateDirectly = undefined;
      this._addSupplementalLogging = undefined;
      this._additionalArchivedLogDestId = undefined;
      this._allowSelectedNestedTables = undefined;
      this._archivedLogDestId = undefined;
      this._archivedLogsOnly = undefined;
      this._asmPassword = undefined;
      this._asmServer = undefined;
      this._asmUser = undefined;
      this._authenticationMethod = undefined;
      this._charLengthSemantics = undefined;
      this._convertTimestampWithZoneToUtc = undefined;
      this._directPathNoLog = undefined;
      this._directPathParallelLoad = undefined;
      this._enableHomogenousTablespace = undefined;
      this._extraArchivedLogDestIds = undefined;
      this._failTaskOnLobTruncation = undefined;
      this._numberDatatypeScale = undefined;
      this._openTransactionWindow = undefined;
      this._oraclePathPrefix = undefined;
      this._parallelAsmReadThreads = undefined;
      this._readAheadBlocks = undefined;
      this._readTableSpaceName = undefined;
      this._replacePathPrefix = undefined;
      this._retryInterval = undefined;
      this._secretsManagerOracleAsmAccessRoleArn = undefined;
      this._secretsManagerOracleAsmSecretId = undefined;
      this._securityDbEncryption = undefined;
      this._securityDbEncryptionName = undefined;
      this._spatialDataOptionToGeoJsonFunctionName = undefined;
      this._standbyDelayTime = undefined;
      this._trimSpaceInChar = undefined;
      this._useAlternateFolderForOnline = undefined;
      this._useBfile = undefined;
      this._useDirectPathFullLoad = undefined;
      this._useLogminerReader = undefined;
      this._usePathPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessAlternateDirectly = value.accessAlternateDirectly;
      this._addSupplementalLogging = value.addSupplementalLogging;
      this._additionalArchivedLogDestId = value.additionalArchivedLogDestId;
      this._allowSelectedNestedTables = value.allowSelectedNestedTables;
      this._archivedLogDestId = value.archivedLogDestId;
      this._archivedLogsOnly = value.archivedLogsOnly;
      this._asmPassword = value.asmPassword;
      this._asmServer = value.asmServer;
      this._asmUser = value.asmUser;
      this._authenticationMethod = value.authenticationMethod;
      this._charLengthSemantics = value.charLengthSemantics;
      this._convertTimestampWithZoneToUtc = value.convertTimestampWithZoneToUtc;
      this._directPathNoLog = value.directPathNoLog;
      this._directPathParallelLoad = value.directPathParallelLoad;
      this._enableHomogenousTablespace = value.enableHomogenousTablespace;
      this._extraArchivedLogDestIds = value.extraArchivedLogDestIds;
      this._failTaskOnLobTruncation = value.failTaskOnLobTruncation;
      this._numberDatatypeScale = value.numberDatatypeScale;
      this._openTransactionWindow = value.openTransactionWindow;
      this._oraclePathPrefix = value.oraclePathPrefix;
      this._parallelAsmReadThreads = value.parallelAsmReadThreads;
      this._readAheadBlocks = value.readAheadBlocks;
      this._readTableSpaceName = value.readTableSpaceName;
      this._replacePathPrefix = value.replacePathPrefix;
      this._retryInterval = value.retryInterval;
      this._secretsManagerOracleAsmAccessRoleArn = value.secretsManagerOracleAsmAccessRoleArn;
      this._secretsManagerOracleAsmSecretId = value.secretsManagerOracleAsmSecretId;
      this._securityDbEncryption = value.securityDbEncryption;
      this._securityDbEncryptionName = value.securityDbEncryptionName;
      this._spatialDataOptionToGeoJsonFunctionName = value.spatialDataOptionToGeoJsonFunctionName;
      this._standbyDelayTime = value.standbyDelayTime;
      this._trimSpaceInChar = value.trimSpaceInChar;
      this._useAlternateFolderForOnline = value.useAlternateFolderForOnline;
      this._useBfile = value.useBfile;
      this._useDirectPathFullLoad = value.useDirectPathFullLoad;
      this._useLogminerReader = value.useLogminerReader;
      this._usePathPrefix = value.usePathPrefix;
    }
  }

  // access_alternate_directly - computed: true, optional: true, required: false
  private _accessAlternateDirectly?: boolean | cdktn.IResolvable; 
  public get accessAlternateDirectly() {
    return this.getBooleanAttribute('access_alternate_directly');
  }
  public set accessAlternateDirectly(value: boolean | cdktn.IResolvable) {
    this._accessAlternateDirectly = value;
  }
  public resetAccessAlternateDirectly() {
    this._accessAlternateDirectly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAlternateDirectlyInput() {
    return this._accessAlternateDirectly;
  }

  // add_supplemental_logging - computed: true, optional: true, required: false
  private _addSupplementalLogging?: boolean | cdktn.IResolvable; 
  public get addSupplementalLogging() {
    return this.getBooleanAttribute('add_supplemental_logging');
  }
  public set addSupplementalLogging(value: boolean | cdktn.IResolvable) {
    this._addSupplementalLogging = value;
  }
  public resetAddSupplementalLogging() {
    this._addSupplementalLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSupplementalLoggingInput() {
    return this._addSupplementalLogging;
  }

  // additional_archived_log_dest_id - computed: true, optional: true, required: false
  private _additionalArchivedLogDestId?: number; 
  public get additionalArchivedLogDestId() {
    return this.getNumberAttribute('additional_archived_log_dest_id');
  }
  public set additionalArchivedLogDestId(value: number) {
    this._additionalArchivedLogDestId = value;
  }
  public resetAdditionalArchivedLogDestId() {
    this._additionalArchivedLogDestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalArchivedLogDestIdInput() {
    return this._additionalArchivedLogDestId;
  }

  // allow_selected_nested_tables - computed: true, optional: true, required: false
  private _allowSelectedNestedTables?: boolean | cdktn.IResolvable; 
  public get allowSelectedNestedTables() {
    return this.getBooleanAttribute('allow_selected_nested_tables');
  }
  public set allowSelectedNestedTables(value: boolean | cdktn.IResolvable) {
    this._allowSelectedNestedTables = value;
  }
  public resetAllowSelectedNestedTables() {
    this._allowSelectedNestedTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSelectedNestedTablesInput() {
    return this._allowSelectedNestedTables;
  }

  // archived_log_dest_id - computed: true, optional: true, required: false
  private _archivedLogDestId?: number; 
  public get archivedLogDestId() {
    return this.getNumberAttribute('archived_log_dest_id');
  }
  public set archivedLogDestId(value: number) {
    this._archivedLogDestId = value;
  }
  public resetArchivedLogDestId() {
    this._archivedLogDestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedLogDestIdInput() {
    return this._archivedLogDestId;
  }

  // archived_logs_only - computed: true, optional: true, required: false
  private _archivedLogsOnly?: boolean | cdktn.IResolvable; 
  public get archivedLogsOnly() {
    return this.getBooleanAttribute('archived_logs_only');
  }
  public set archivedLogsOnly(value: boolean | cdktn.IResolvable) {
    this._archivedLogsOnly = value;
  }
  public resetArchivedLogsOnly() {
    this._archivedLogsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedLogsOnlyInput() {
    return this._archivedLogsOnly;
  }

  // asm_password - computed: true, optional: true, required: false
  private _asmPassword?: string; 
  public get asmPassword() {
    return this.getStringAttribute('asm_password');
  }
  public set asmPassword(value: string) {
    this._asmPassword = value;
  }
  public resetAsmPassword() {
    this._asmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmPasswordInput() {
    return this._asmPassword;
  }

  // asm_server - computed: true, optional: true, required: false
  private _asmServer?: string; 
  public get asmServer() {
    return this.getStringAttribute('asm_server');
  }
  public set asmServer(value: string) {
    this._asmServer = value;
  }
  public resetAsmServer() {
    this._asmServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmServerInput() {
    return this._asmServer;
  }

  // asm_user - computed: true, optional: true, required: false
  private _asmUser?: string; 
  public get asmUser() {
    return this.getStringAttribute('asm_user');
  }
  public set asmUser(value: string) {
    this._asmUser = value;
  }
  public resetAsmUser() {
    this._asmUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmUserInput() {
    return this._asmUser;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // char_length_semantics - computed: true, optional: true, required: false
  private _charLengthSemantics?: string; 
  public get charLengthSemantics() {
    return this.getStringAttribute('char_length_semantics');
  }
  public set charLengthSemantics(value: string) {
    this._charLengthSemantics = value;
  }
  public resetCharLengthSemantics() {
    this._charLengthSemantics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charLengthSemanticsInput() {
    return this._charLengthSemantics;
  }

  // convert_timestamp_with_zone_to_utc - computed: true, optional: true, required: false
  private _convertTimestampWithZoneToUtc?: boolean | cdktn.IResolvable; 
  public get convertTimestampWithZoneToUtc() {
    return this.getBooleanAttribute('convert_timestamp_with_zone_to_utc');
  }
  public set convertTimestampWithZoneToUtc(value: boolean | cdktn.IResolvable) {
    this._convertTimestampWithZoneToUtc = value;
  }
  public resetConvertTimestampWithZoneToUtc() {
    this._convertTimestampWithZoneToUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertTimestampWithZoneToUtcInput() {
    return this._convertTimestampWithZoneToUtc;
  }

  // direct_path_no_log - computed: true, optional: true, required: false
  private _directPathNoLog?: boolean | cdktn.IResolvable; 
  public get directPathNoLog() {
    return this.getBooleanAttribute('direct_path_no_log');
  }
  public set directPathNoLog(value: boolean | cdktn.IResolvable) {
    this._directPathNoLog = value;
  }
  public resetDirectPathNoLog() {
    this._directPathNoLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directPathNoLogInput() {
    return this._directPathNoLog;
  }

  // direct_path_parallel_load - computed: true, optional: true, required: false
  private _directPathParallelLoad?: boolean | cdktn.IResolvable; 
  public get directPathParallelLoad() {
    return this.getBooleanAttribute('direct_path_parallel_load');
  }
  public set directPathParallelLoad(value: boolean | cdktn.IResolvable) {
    this._directPathParallelLoad = value;
  }
  public resetDirectPathParallelLoad() {
    this._directPathParallelLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directPathParallelLoadInput() {
    return this._directPathParallelLoad;
  }

  // enable_homogenous_tablespace - computed: true, optional: true, required: false
  private _enableHomogenousTablespace?: boolean | cdktn.IResolvable; 
  public get enableHomogenousTablespace() {
    return this.getBooleanAttribute('enable_homogenous_tablespace');
  }
  public set enableHomogenousTablespace(value: boolean | cdktn.IResolvable) {
    this._enableHomogenousTablespace = value;
  }
  public resetEnableHomogenousTablespace() {
    this._enableHomogenousTablespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHomogenousTablespaceInput() {
    return this._enableHomogenousTablespace;
  }

  // extra_archived_log_dest_ids - computed: true, optional: true, required: false
  private _extraArchivedLogDestIds?: number[]; 
  public get extraArchivedLogDestIds() {
    return this.getNumberListAttribute('extra_archived_log_dest_ids');
  }
  public set extraArchivedLogDestIds(value: number[]) {
    this._extraArchivedLogDestIds = value;
  }
  public resetExtraArchivedLogDestIds() {
    this._extraArchivedLogDestIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArchivedLogDestIdsInput() {
    return this._extraArchivedLogDestIds;
  }

  // fail_task_on_lob_truncation - computed: true, optional: true, required: false
  private _failTaskOnLobTruncation?: boolean | cdktn.IResolvable; 
  public get failTaskOnLobTruncation() {
    return this.getBooleanAttribute('fail_task_on_lob_truncation');
  }
  public set failTaskOnLobTruncation(value: boolean | cdktn.IResolvable) {
    this._failTaskOnLobTruncation = value;
  }
  public resetFailTaskOnLobTruncation() {
    this._failTaskOnLobTruncation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTaskOnLobTruncationInput() {
    return this._failTaskOnLobTruncation;
  }

  // number_datatype_scale - computed: true, optional: true, required: false
  private _numberDatatypeScale?: number; 
  public get numberDatatypeScale() {
    return this.getNumberAttribute('number_datatype_scale');
  }
  public set numberDatatypeScale(value: number) {
    this._numberDatatypeScale = value;
  }
  public resetNumberDatatypeScale() {
    this._numberDatatypeScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberDatatypeScaleInput() {
    return this._numberDatatypeScale;
  }

  // open_transaction_window - computed: true, optional: true, required: false
  private _openTransactionWindow?: number; 
  public get openTransactionWindow() {
    return this.getNumberAttribute('open_transaction_window');
  }
  public set openTransactionWindow(value: number) {
    this._openTransactionWindow = value;
  }
  public resetOpenTransactionWindow() {
    this._openTransactionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTransactionWindowInput() {
    return this._openTransactionWindow;
  }

  // oracle_path_prefix - computed: true, optional: true, required: false
  private _oraclePathPrefix?: string; 
  public get oraclePathPrefix() {
    return this.getStringAttribute('oracle_path_prefix');
  }
  public set oraclePathPrefix(value: string) {
    this._oraclePathPrefix = value;
  }
  public resetOraclePathPrefix() {
    this._oraclePathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oraclePathPrefixInput() {
    return this._oraclePathPrefix;
  }

  // parallel_asm_read_threads - computed: true, optional: true, required: false
  private _parallelAsmReadThreads?: number; 
  public get parallelAsmReadThreads() {
    return this.getNumberAttribute('parallel_asm_read_threads');
  }
  public set parallelAsmReadThreads(value: number) {
    this._parallelAsmReadThreads = value;
  }
  public resetParallelAsmReadThreads() {
    this._parallelAsmReadThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelAsmReadThreadsInput() {
    return this._parallelAsmReadThreads;
  }

  // read_ahead_blocks - computed: true, optional: true, required: false
  private _readAheadBlocks?: number; 
  public get readAheadBlocks() {
    return this.getNumberAttribute('read_ahead_blocks');
  }
  public set readAheadBlocks(value: number) {
    this._readAheadBlocks = value;
  }
  public resetReadAheadBlocks() {
    this._readAheadBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAheadBlocksInput() {
    return this._readAheadBlocks;
  }

  // read_table_space_name - computed: true, optional: true, required: false
  private _readTableSpaceName?: boolean | cdktn.IResolvable; 
  public get readTableSpaceName() {
    return this.getBooleanAttribute('read_table_space_name');
  }
  public set readTableSpaceName(value: boolean | cdktn.IResolvable) {
    this._readTableSpaceName = value;
  }
  public resetReadTableSpaceName() {
    this._readTableSpaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTableSpaceNameInput() {
    return this._readTableSpaceName;
  }

  // replace_path_prefix - computed: true, optional: true, required: false
  private _replacePathPrefix?: boolean | cdktn.IResolvable; 
  public get replacePathPrefix() {
    return this.getBooleanAttribute('replace_path_prefix');
  }
  public set replacePathPrefix(value: boolean | cdktn.IResolvable) {
    this._replacePathPrefix = value;
  }
  public resetReplacePathPrefix() {
    this._replacePathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePathPrefixInput() {
    return this._replacePathPrefix;
  }

  // retry_interval - computed: true, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // secrets_manager_oracle_asm_access_role_arn - computed: true, optional: true, required: false
  private _secretsManagerOracleAsmAccessRoleArn?: string; 
  public get secretsManagerOracleAsmAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_oracle_asm_access_role_arn');
  }
  public set secretsManagerOracleAsmAccessRoleArn(value: string) {
    this._secretsManagerOracleAsmAccessRoleArn = value;
  }
  public resetSecretsManagerOracleAsmAccessRoleArn() {
    this._secretsManagerOracleAsmAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerOracleAsmAccessRoleArnInput() {
    return this._secretsManagerOracleAsmAccessRoleArn;
  }

  // secrets_manager_oracle_asm_secret_id - computed: true, optional: true, required: false
  private _secretsManagerOracleAsmSecretId?: string; 
  public get secretsManagerOracleAsmSecretId() {
    return this.getStringAttribute('secrets_manager_oracle_asm_secret_id');
  }
  public set secretsManagerOracleAsmSecretId(value: string) {
    this._secretsManagerOracleAsmSecretId = value;
  }
  public resetSecretsManagerOracleAsmSecretId() {
    this._secretsManagerOracleAsmSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerOracleAsmSecretIdInput() {
    return this._secretsManagerOracleAsmSecretId;
  }

  // security_db_encryption - computed: true, optional: true, required: false
  private _securityDbEncryption?: string; 
  public get securityDbEncryption() {
    return this.getStringAttribute('security_db_encryption');
  }
  public set securityDbEncryption(value: string) {
    this._securityDbEncryption = value;
  }
  public resetSecurityDbEncryption() {
    this._securityDbEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDbEncryptionInput() {
    return this._securityDbEncryption;
  }

  // security_db_encryption_name - computed: true, optional: true, required: false
  private _securityDbEncryptionName?: string; 
  public get securityDbEncryptionName() {
    return this.getStringAttribute('security_db_encryption_name');
  }
  public set securityDbEncryptionName(value: string) {
    this._securityDbEncryptionName = value;
  }
  public resetSecurityDbEncryptionName() {
    this._securityDbEncryptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDbEncryptionNameInput() {
    return this._securityDbEncryptionName;
  }

  // spatial_data_option_to_geo_json_function_name - computed: true, optional: true, required: false
  private _spatialDataOptionToGeoJsonFunctionName?: string; 
  public get spatialDataOptionToGeoJsonFunctionName() {
    return this.getStringAttribute('spatial_data_option_to_geo_json_function_name');
  }
  public set spatialDataOptionToGeoJsonFunctionName(value: string) {
    this._spatialDataOptionToGeoJsonFunctionName = value;
  }
  public resetSpatialDataOptionToGeoJsonFunctionName() {
    this._spatialDataOptionToGeoJsonFunctionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spatialDataOptionToGeoJsonFunctionNameInput() {
    return this._spatialDataOptionToGeoJsonFunctionName;
  }

  // standby_delay_time - computed: true, optional: true, required: false
  private _standbyDelayTime?: number; 
  public get standbyDelayTime() {
    return this.getNumberAttribute('standby_delay_time');
  }
  public set standbyDelayTime(value: number) {
    this._standbyDelayTime = value;
  }
  public resetStandbyDelayTime() {
    this._standbyDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyDelayTimeInput() {
    return this._standbyDelayTime;
  }

  // trim_space_in_char - computed: true, optional: true, required: false
  private _trimSpaceInChar?: boolean | cdktn.IResolvable; 
  public get trimSpaceInChar() {
    return this.getBooleanAttribute('trim_space_in_char');
  }
  public set trimSpaceInChar(value: boolean | cdktn.IResolvable) {
    this._trimSpaceInChar = value;
  }
  public resetTrimSpaceInChar() {
    this._trimSpaceInChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInCharInput() {
    return this._trimSpaceInChar;
  }

  // use_alternate_folder_for_online - computed: true, optional: true, required: false
  private _useAlternateFolderForOnline?: boolean | cdktn.IResolvable; 
  public get useAlternateFolderForOnline() {
    return this.getBooleanAttribute('use_alternate_folder_for_online');
  }
  public set useAlternateFolderForOnline(value: boolean | cdktn.IResolvable) {
    this._useAlternateFolderForOnline = value;
  }
  public resetUseAlternateFolderForOnline() {
    this._useAlternateFolderForOnline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAlternateFolderForOnlineInput() {
    return this._useAlternateFolderForOnline;
  }

  // use_bfile - computed: true, optional: true, required: false
  private _useBfile?: boolean | cdktn.IResolvable; 
  public get useBfile() {
    return this.getBooleanAttribute('use_bfile');
  }
  public set useBfile(value: boolean | cdktn.IResolvable) {
    this._useBfile = value;
  }
  public resetUseBfile() {
    this._useBfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBfileInput() {
    return this._useBfile;
  }

  // use_direct_path_full_load - computed: true, optional: true, required: false
  private _useDirectPathFullLoad?: boolean | cdktn.IResolvable; 
  public get useDirectPathFullLoad() {
    return this.getBooleanAttribute('use_direct_path_full_load');
  }
  public set useDirectPathFullLoad(value: boolean | cdktn.IResolvable) {
    this._useDirectPathFullLoad = value;
  }
  public resetUseDirectPathFullLoad() {
    this._useDirectPathFullLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDirectPathFullLoadInput() {
    return this._useDirectPathFullLoad;
  }

  // use_logminer_reader - computed: true, optional: true, required: false
  private _useLogminerReader?: boolean | cdktn.IResolvable; 
  public get useLogminerReader() {
    return this.getBooleanAttribute('use_logminer_reader');
  }
  public set useLogminerReader(value: boolean | cdktn.IResolvable) {
    this._useLogminerReader = value;
  }
  public resetUseLogminerReader() {
    this._useLogminerReader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogminerReaderInput() {
    return this._useLogminerReader;
  }

  // use_path_prefix - computed: true, optional: true, required: false
  private _usePathPrefix?: string; 
  public get usePathPrefix() {
    return this.getStringAttribute('use_path_prefix');
  }
  public set usePathPrefix(value: string) {
    this._usePathPrefix = value;
  }
  public resetUsePathPrefix() {
    this._usePathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePathPrefixInput() {
    return this._usePathPrefix;
  }
}
export interface DmsEndpointPostgresSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}
  */
  readonly afterConnectScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}
  */
  readonly babelfishDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}
  */
  readonly captureDdls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}
  */
  readonly databaseMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}
  */
  readonly ddlArtifactsSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}
  */
  readonly executeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}
  */
  readonly failTasksOnLobTruncation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}
  */
  readonly heartbeatEnable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}
  */
  readonly heartbeatFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}
  */
  readonly heartbeatSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}
  */
  readonly mapBooleanAsBoolean?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}
  */
  readonly mapJsonbAsClob?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}
  */
  readonly mapLongVarcharAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}
  */
  readonly slotName?: string;
}

export function dmsEndpointPostgresSettingsToTerraform(struct?: DmsEndpointPostgresSettingsOutputReference | DmsEndpointPostgresSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_connect_script: cdktn.stringToTerraform(struct!.afterConnectScript),
    authentication_method: cdktn.stringToTerraform(struct!.authenticationMethod),
    babelfish_database_name: cdktn.stringToTerraform(struct!.babelfishDatabaseName),
    capture_ddls: cdktn.booleanToTerraform(struct!.captureDdls),
    database_mode: cdktn.stringToTerraform(struct!.databaseMode),
    ddl_artifacts_schema: cdktn.stringToTerraform(struct!.ddlArtifactsSchema),
    execute_timeout: cdktn.numberToTerraform(struct!.executeTimeout),
    fail_tasks_on_lob_truncation: cdktn.booleanToTerraform(struct!.failTasksOnLobTruncation),
    heartbeat_enable: cdktn.booleanToTerraform(struct!.heartbeatEnable),
    heartbeat_frequency: cdktn.numberToTerraform(struct!.heartbeatFrequency),
    heartbeat_schema: cdktn.stringToTerraform(struct!.heartbeatSchema),
    map_boolean_as_boolean: cdktn.booleanToTerraform(struct!.mapBooleanAsBoolean),
    map_jsonb_as_clob: cdktn.booleanToTerraform(struct!.mapJsonbAsClob),
    map_long_varchar_as: cdktn.stringToTerraform(struct!.mapLongVarcharAs),
    max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
    plugin_name: cdktn.stringToTerraform(struct!.pluginName),
    service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
    slot_name: cdktn.stringToTerraform(struct!.slotName),
  }
}


export function dmsEndpointPostgresSettingsToHclTerraform(struct?: DmsEndpointPostgresSettingsOutputReference | DmsEndpointPostgresSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_connect_script: {
      value: cdktn.stringToHclTerraform(struct!.afterConnectScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_method: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    babelfish_database_name: {
      value: cdktn.stringToHclTerraform(struct!.babelfishDatabaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_ddls: {
      value: cdktn.booleanToHclTerraform(struct!.captureDdls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_mode: {
      value: cdktn.stringToHclTerraform(struct!.databaseMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddl_artifacts_schema: {
      value: cdktn.stringToHclTerraform(struct!.ddlArtifactsSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execute_timeout: {
      value: cdktn.numberToHclTerraform(struct!.executeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_tasks_on_lob_truncation: {
      value: cdktn.booleanToHclTerraform(struct!.failTasksOnLobTruncation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    heartbeat_enable: {
      value: cdktn.booleanToHclTerraform(struct!.heartbeatEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    heartbeat_frequency: {
      value: cdktn.numberToHclTerraform(struct!.heartbeatFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heartbeat_schema: {
      value: cdktn.stringToHclTerraform(struct!.heartbeatSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_boolean_as_boolean: {
      value: cdktn.booleanToHclTerraform(struct!.mapBooleanAsBoolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    map_jsonb_as_clob: {
      value: cdktn.booleanToHclTerraform(struct!.mapJsonbAsClob),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    map_long_varchar_as: {
      value: cdktn.stringToHclTerraform(struct!.mapLongVarcharAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_file_size: {
      value: cdktn.numberToHclTerraform(struct!.maxFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plugin_name: {
      value: cdktn.stringToHclTerraform(struct!.pluginName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_name: {
      value: cdktn.stringToHclTerraform(struct!.slotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointPostgresSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointPostgresSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterConnectScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterConnectScript = this._afterConnectScript;
    }
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._babelfishDatabaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.babelfishDatabaseName = this._babelfishDatabaseName;
    }
    if (this._captureDdls !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureDdls = this._captureDdls;
    }
    if (this._databaseMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseMode = this._databaseMode;
    }
    if (this._ddlArtifactsSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddlArtifactsSchema = this._ddlArtifactsSchema;
    }
    if (this._executeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTimeout = this._executeTimeout;
    }
    if (this._failTasksOnLobTruncation !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTasksOnLobTruncation = this._failTasksOnLobTruncation;
    }
    if (this._heartbeatEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatEnable = this._heartbeatEnable;
    }
    if (this._heartbeatFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatFrequency = this._heartbeatFrequency;
    }
    if (this._heartbeatSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatSchema = this._heartbeatSchema;
    }
    if (this._mapBooleanAsBoolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBooleanAsBoolean = this._mapBooleanAsBoolean;
    }
    if (this._mapJsonbAsClob !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapJsonbAsClob = this._mapJsonbAsClob;
    }
    if (this._mapLongVarcharAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapLongVarcharAs = this._mapLongVarcharAs;
    }
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    if (this._slotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotName = this._slotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointPostgresSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterConnectScript = undefined;
      this._authenticationMethod = undefined;
      this._babelfishDatabaseName = undefined;
      this._captureDdls = undefined;
      this._databaseMode = undefined;
      this._ddlArtifactsSchema = undefined;
      this._executeTimeout = undefined;
      this._failTasksOnLobTruncation = undefined;
      this._heartbeatEnable = undefined;
      this._heartbeatFrequency = undefined;
      this._heartbeatSchema = undefined;
      this._mapBooleanAsBoolean = undefined;
      this._mapJsonbAsClob = undefined;
      this._mapLongVarcharAs = undefined;
      this._maxFileSize = undefined;
      this._pluginName = undefined;
      this._serviceAccessRoleArn = undefined;
      this._slotName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterConnectScript = value.afterConnectScript;
      this._authenticationMethod = value.authenticationMethod;
      this._babelfishDatabaseName = value.babelfishDatabaseName;
      this._captureDdls = value.captureDdls;
      this._databaseMode = value.databaseMode;
      this._ddlArtifactsSchema = value.ddlArtifactsSchema;
      this._executeTimeout = value.executeTimeout;
      this._failTasksOnLobTruncation = value.failTasksOnLobTruncation;
      this._heartbeatEnable = value.heartbeatEnable;
      this._heartbeatFrequency = value.heartbeatFrequency;
      this._heartbeatSchema = value.heartbeatSchema;
      this._mapBooleanAsBoolean = value.mapBooleanAsBoolean;
      this._mapJsonbAsClob = value.mapJsonbAsClob;
      this._mapLongVarcharAs = value.mapLongVarcharAs;
      this._maxFileSize = value.maxFileSize;
      this._pluginName = value.pluginName;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
      this._slotName = value.slotName;
    }
  }

  // after_connect_script - computed: false, optional: true, required: false
  private _afterConnectScript?: string; 
  public get afterConnectScript() {
    return this.getStringAttribute('after_connect_script');
  }
  public set afterConnectScript(value: string) {
    this._afterConnectScript = value;
  }
  public resetAfterConnectScript() {
    this._afterConnectScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterConnectScriptInput() {
    return this._afterConnectScript;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // babelfish_database_name - computed: false, optional: true, required: false
  private _babelfishDatabaseName?: string; 
  public get babelfishDatabaseName() {
    return this.getStringAttribute('babelfish_database_name');
  }
  public set babelfishDatabaseName(value: string) {
    this._babelfishDatabaseName = value;
  }
  public resetBabelfishDatabaseName() {
    this._babelfishDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get babelfishDatabaseNameInput() {
    return this._babelfishDatabaseName;
  }

  // capture_ddls - computed: false, optional: true, required: false
  private _captureDdls?: boolean | cdktn.IResolvable; 
  public get captureDdls() {
    return this.getBooleanAttribute('capture_ddls');
  }
  public set captureDdls(value: boolean | cdktn.IResolvable) {
    this._captureDdls = value;
  }
  public resetCaptureDdls() {
    this._captureDdls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureDdlsInput() {
    return this._captureDdls;
  }

  // database_mode - computed: false, optional: true, required: false
  private _databaseMode?: string; 
  public get databaseMode() {
    return this.getStringAttribute('database_mode');
  }
  public set databaseMode(value: string) {
    this._databaseMode = value;
  }
  public resetDatabaseMode() {
    this._databaseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseModeInput() {
    return this._databaseMode;
  }

  // ddl_artifacts_schema - computed: false, optional: true, required: false
  private _ddlArtifactsSchema?: string; 
  public get ddlArtifactsSchema() {
    return this.getStringAttribute('ddl_artifacts_schema');
  }
  public set ddlArtifactsSchema(value: string) {
    this._ddlArtifactsSchema = value;
  }
  public resetDdlArtifactsSchema() {
    this._ddlArtifactsSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlArtifactsSchemaInput() {
    return this._ddlArtifactsSchema;
  }

  // execute_timeout - computed: false, optional: true, required: false
  private _executeTimeout?: number; 
  public get executeTimeout() {
    return this.getNumberAttribute('execute_timeout');
  }
  public set executeTimeout(value: number) {
    this._executeTimeout = value;
  }
  public resetExecuteTimeout() {
    this._executeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeoutInput() {
    return this._executeTimeout;
  }

  // fail_tasks_on_lob_truncation - computed: false, optional: true, required: false
  private _failTasksOnLobTruncation?: boolean | cdktn.IResolvable; 
  public get failTasksOnLobTruncation() {
    return this.getBooleanAttribute('fail_tasks_on_lob_truncation');
  }
  public set failTasksOnLobTruncation(value: boolean | cdktn.IResolvable) {
    this._failTasksOnLobTruncation = value;
  }
  public resetFailTasksOnLobTruncation() {
    this._failTasksOnLobTruncation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTasksOnLobTruncationInput() {
    return this._failTasksOnLobTruncation;
  }

  // heartbeat_enable - computed: false, optional: true, required: false
  private _heartbeatEnable?: boolean | cdktn.IResolvable; 
  public get heartbeatEnable() {
    return this.getBooleanAttribute('heartbeat_enable');
  }
  public set heartbeatEnable(value: boolean | cdktn.IResolvable) {
    this._heartbeatEnable = value;
  }
  public resetHeartbeatEnable() {
    this._heartbeatEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatEnableInput() {
    return this._heartbeatEnable;
  }

  // heartbeat_frequency - computed: false, optional: true, required: false
  private _heartbeatFrequency?: number; 
  public get heartbeatFrequency() {
    return this.getNumberAttribute('heartbeat_frequency');
  }
  public set heartbeatFrequency(value: number) {
    this._heartbeatFrequency = value;
  }
  public resetHeartbeatFrequency() {
    this._heartbeatFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatFrequencyInput() {
    return this._heartbeatFrequency;
  }

  // heartbeat_schema - computed: false, optional: true, required: false
  private _heartbeatSchema?: string; 
  public get heartbeatSchema() {
    return this.getStringAttribute('heartbeat_schema');
  }
  public set heartbeatSchema(value: string) {
    this._heartbeatSchema = value;
  }
  public resetHeartbeatSchema() {
    this._heartbeatSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatSchemaInput() {
    return this._heartbeatSchema;
  }

  // map_boolean_as_boolean - computed: false, optional: true, required: false
  private _mapBooleanAsBoolean?: boolean | cdktn.IResolvable; 
  public get mapBooleanAsBoolean() {
    return this.getBooleanAttribute('map_boolean_as_boolean');
  }
  public set mapBooleanAsBoolean(value: boolean | cdktn.IResolvable) {
    this._mapBooleanAsBoolean = value;
  }
  public resetMapBooleanAsBoolean() {
    this._mapBooleanAsBoolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBooleanAsBooleanInput() {
    return this._mapBooleanAsBoolean;
  }

  // map_jsonb_as_clob - computed: false, optional: true, required: false
  private _mapJsonbAsClob?: boolean | cdktn.IResolvable; 
  public get mapJsonbAsClob() {
    return this.getBooleanAttribute('map_jsonb_as_clob');
  }
  public set mapJsonbAsClob(value: boolean | cdktn.IResolvable) {
    this._mapJsonbAsClob = value;
  }
  public resetMapJsonbAsClob() {
    this._mapJsonbAsClob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapJsonbAsClobInput() {
    return this._mapJsonbAsClob;
  }

  // map_long_varchar_as - computed: false, optional: true, required: false
  private _mapLongVarcharAs?: string; 
  public get mapLongVarcharAs() {
    return this.getStringAttribute('map_long_varchar_as');
  }
  public set mapLongVarcharAs(value: string) {
    this._mapLongVarcharAs = value;
  }
  public resetMapLongVarcharAs() {
    this._mapLongVarcharAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapLongVarcharAsInput() {
    return this._mapLongVarcharAs;
  }

  // max_file_size - computed: false, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // plugin_name - computed: false, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // service_access_role_arn - computed: false, optional: true, required: false
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  public resetServiceAccessRoleArn() {
    this._serviceAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }

  // slot_name - computed: false, optional: true, required: false
  private _slotName?: string; 
  public get slotName() {
    return this.getStringAttribute('slot_name');
  }
  public set slotName(value: string) {
    this._slotName = value;
  }
  public resetSlotName() {
    this._slotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNameInput() {
    return this._slotName;
  }
}
export interface DmsEndpointRedisSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}
  */
  readonly authUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#port DmsEndpoint#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
  */
  readonly sslCaCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}
  */
  readonly sslSecurityProtocol?: string;
}

export function dmsEndpointRedisSettingsToTerraform(struct?: DmsEndpointRedisSettingsOutputReference | DmsEndpointRedisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktn.stringToTerraform(struct!.authPassword),
    auth_type: cdktn.stringToTerraform(struct!.authType),
    auth_user_name: cdktn.stringToTerraform(struct!.authUserName),
    port: cdktn.numberToTerraform(struct!.port),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_ca_certificate_arn: cdktn.stringToTerraform(struct!.sslCaCertificateArn),
    ssl_security_protocol: cdktn.stringToTerraform(struct!.sslSecurityProtocol),
  }
}


export function dmsEndpointRedisSettingsToHclTerraform(struct?: DmsEndpointRedisSettingsOutputReference | DmsEndpointRedisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktn.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_user_name: {
      value: cdktn.stringToHclTerraform(struct!.authUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.sslCaCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_security_protocol: {
      value: cdktn.stringToHclTerraform(struct!.sslSecurityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointRedisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointRedisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._authUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUserName = this._authUserName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslCaCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
    }
    if (this._sslSecurityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecurityProtocol = this._sslSecurityProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointRedisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassword = undefined;
      this._authType = undefined;
      this._authUserName = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._sslCaCertificateArn = undefined;
      this._sslSecurityProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassword = value.authPassword;
      this._authType = value.authType;
      this._authUserName = value.authUserName;
      this._port = value.port;
      this._serverName = value.serverName;
      this._sslCaCertificateArn = value.sslCaCertificateArn;
      this._sslSecurityProtocol = value.sslSecurityProtocol;
    }
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auth_user_name - computed: false, optional: true, required: false
  private _authUserName?: string; 
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }
  public set authUserName(value: string) {
    this._authUserName = value;
  }
  public resetAuthUserName() {
    this._authUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserNameInput() {
    return this._authUserName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_ca_certificate_arn - computed: false, optional: true, required: false
  private _sslCaCertificateArn?: string; 
  public get sslCaCertificateArn() {
    return this.getStringAttribute('ssl_ca_certificate_arn');
  }
  public set sslCaCertificateArn(value: string) {
    this._sslCaCertificateArn = value;
  }
  public resetSslCaCertificateArn() {
    this._sslCaCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateArnInput() {
    return this._sslCaCertificateArn;
  }

  // ssl_security_protocol - computed: false, optional: true, required: false
  private _sslSecurityProtocol?: string; 
  public get sslSecurityProtocol() {
    return this.getStringAttribute('ssl_security_protocol');
  }
  public set sslSecurityProtocol(value: string) {
    this._sslSecurityProtocol = value;
  }
  public resetSslSecurityProtocol() {
    this._sslSecurityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecurityProtocolInput() {
    return this._sslSecurityProtocol;
  }
}
export interface DmsEndpointRedshiftSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}
  */
  readonly bucketFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
  */
  readonly serverSideEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
  */
  readonly serviceAccessRoleArn?: string;
}

export function dmsEndpointRedshiftSettingsToTerraform(struct?: DmsEndpointRedshiftSettingsOutputReference | DmsEndpointRedshiftSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_folder: cdktn.stringToTerraform(struct!.bucketFolder),
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    encryption_mode: cdktn.stringToTerraform(struct!.encryptionMode),
    server_side_encryption_kms_key_id: cdktn.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
    service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
  }
}


export function dmsEndpointRedshiftSettingsToHclTerraform(struct?: DmsEndpointRedshiftSettingsOutputReference | DmsEndpointRedshiftSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_folder: {
      value: cdktn.stringToHclTerraform(struct!.bucketFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.encryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_encryption_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.serverSideEncryptionKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointRedshiftSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DmsEndpointRedshiftSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketFolder = this._bucketFolder;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._encryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMode = this._encryptionMode;
    }
    if (this._serverSideEncryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
    }
    if (this._serviceAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointRedshiftSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketFolder = undefined;
      this._bucketName = undefined;
      this._encryptionMode = undefined;
      this._serverSideEncryptionKmsKeyId = undefined;
      this._serviceAccessRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketFolder = value.bucketFolder;
      this._bucketName = value.bucketName;
      this._encryptionMode = value.encryptionMode;
      this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
      this._serviceAccessRoleArn = value.serviceAccessRoleArn;
    }
  }

  // bucket_folder - computed: false, optional: true, required: false
  private _bucketFolder?: string; 
  public get bucketFolder() {
    return this.getStringAttribute('bucket_folder');
  }
  public set bucketFolder(value: string) {
    this._bucketFolder = value;
  }
  public resetBucketFolder() {
    this._bucketFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketFolderInput() {
    return this._bucketFolder;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string; 
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // server_side_encryption_kms_key_id - computed: false, optional: true, required: false
  private _serverSideEncryptionKmsKeyId?: string; 
  public get serverSideEncryptionKmsKeyId() {
    return this.getStringAttribute('server_side_encryption_kms_key_id');
  }
  public set serverSideEncryptionKmsKeyId(value: string) {
    this._serverSideEncryptionKmsKeyId = value;
  }
  public resetServerSideEncryptionKmsKeyId() {
    this._serverSideEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionKmsKeyIdInput() {
    return this._serverSideEncryptionKmsKeyId;
  }

  // service_access_role_arn - computed: false, optional: true, required: false
  private _serviceAccessRoleArn?: string; 
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
  public set serviceAccessRoleArn(value: string) {
    this._serviceAccessRoleArn = value;
  }
  public resetServiceAccessRoleArn() {
    this._serviceAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleArnInput() {
    return this._serviceAccessRoleArn;
  }
}
export interface DmsEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#create DmsEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}
  */
  readonly delete?: string;
}

export function dmsEndpointTimeoutsToTerraform(struct?: DmsEndpointTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function dmsEndpointTimeoutsToHclTerraform(struct?: DmsEndpointTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsEndpointTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsEndpointTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint aws_dms_endpoint}
*/
export class DmsEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsEndpoint to import
  * @param importFromId The id of the existing DmsEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.38.0/docs/resources/dms_endpoint aws_dms_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DmsEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.38.0',
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
    this._certificateArn = config.certificateArn;
    this._databaseName = config.databaseName;
    this._endpointId = config.endpointId;
    this._endpointType = config.endpointType;
    this._engineName = config.engineName;
    this._extraConnectionAttributes = config.extraConnectionAttributes;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._password = config.password;
    this._pauseReplicationTasks = config.pauseReplicationTasks;
    this._port = config.port;
    this._region = config.region;
    this._secretsManagerAccessRoleArn = config.secretsManagerAccessRoleArn;
    this._secretsManagerArn = config.secretsManagerArn;
    this._serverName = config.serverName;
    this._serviceAccessRole = config.serviceAccessRole;
    this._sslMode = config.sslMode;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._username = config.username;
    this._elasticsearchSettings.internalValue = config.elasticsearchSettings;
    this._kafkaSettings.internalValue = config.kafkaSettings;
    this._kinesisSettings.internalValue = config.kinesisSettings;
    this._mongodbSettings.internalValue = config.mongodbSettings;
    this._mysqlSettings.internalValue = config.mysqlSettings;
    this._oracleSettings.internalValue = config.oracleSettings;
    this._postgresSettings.internalValue = config.postgresSettings;
    this._redisSettings.internalValue = config.redisSettings;
    this._redshiftSettings.internalValue = config.redshiftSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // endpoint_arn - computed: true, optional: false, required: false
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // engine_name - computed: false, optional: false, required: true
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // extra_connection_attributes - computed: true, optional: true, required: false
  private _extraConnectionAttributes?: string; 
  public get extraConnectionAttributes() {
    return this.getStringAttribute('extra_connection_attributes');
  }
  public set extraConnectionAttributes(value: string) {
    this._extraConnectionAttributes = value;
  }
  public resetExtraConnectionAttributes() {
    this._extraConnectionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConnectionAttributesInput() {
    return this._extraConnectionAttributes;
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

  // kms_key_arn - computed: true, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pause_replication_tasks - computed: false, optional: true, required: false
  private _pauseReplicationTasks?: boolean | cdktn.IResolvable; 
  public get pauseReplicationTasks() {
    return this.getBooleanAttribute('pause_replication_tasks');
  }
  public set pauseReplicationTasks(value: boolean | cdktn.IResolvable) {
    this._pauseReplicationTasks = value;
  }
  public resetPauseReplicationTasks() {
    this._pauseReplicationTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseReplicationTasksInput() {
    return this._pauseReplicationTasks;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // secrets_manager_access_role_arn - computed: false, optional: true, required: false
  private _secretsManagerAccessRoleArn?: string; 
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }
  public set secretsManagerAccessRoleArn(value: string) {
    this._secretsManagerAccessRoleArn = value;
  }
  public resetSecretsManagerAccessRoleArn() {
    this._secretsManagerAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerAccessRoleArnInput() {
    return this._secretsManagerAccessRoleArn;
  }

  // secrets_manager_arn - computed: false, optional: true, required: false
  private _secretsManagerArn?: string; 
  public get secretsManagerArn() {
    return this.getStringAttribute('secrets_manager_arn');
  }
  public set secretsManagerArn(value: string) {
    this._secretsManagerArn = value;
  }
  public resetSecretsManagerArn() {
    this._secretsManagerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerArnInput() {
    return this._secretsManagerArn;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // service_access_role - computed: false, optional: true, required: false
  private _serviceAccessRole?: string; 
  public get serviceAccessRole() {
    return this.getStringAttribute('service_access_role');
  }
  public set serviceAccessRole(value: string) {
    this._serviceAccessRole = value;
  }
  public resetServiceAccessRole() {
    this._serviceAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessRoleInput() {
    return this._serviceAccessRole;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // elasticsearch_settings - computed: false, optional: true, required: false
  private _elasticsearchSettings = new DmsEndpointElasticsearchSettingsOutputReference(this, "elasticsearch_settings");
  public get elasticsearchSettings() {
    return this._elasticsearchSettings;
  }
  public putElasticsearchSettings(value: DmsEndpointElasticsearchSettings) {
    this._elasticsearchSettings.internalValue = value;
  }
  public resetElasticsearchSettings() {
    this._elasticsearchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchSettingsInput() {
    return this._elasticsearchSettings.internalValue;
  }

  // kafka_settings - computed: false, optional: true, required: false
  private _kafkaSettings = new DmsEndpointKafkaSettingsOutputReference(this, "kafka_settings");
  public get kafkaSettings() {
    return this._kafkaSettings;
  }
  public putKafkaSettings(value: DmsEndpointKafkaSettings) {
    this._kafkaSettings.internalValue = value;
  }
  public resetKafkaSettings() {
    this._kafkaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSettingsInput() {
    return this._kafkaSettings.internalValue;
  }

  // kinesis_settings - computed: false, optional: true, required: false
  private _kinesisSettings = new DmsEndpointKinesisSettingsOutputReference(this, "kinesis_settings");
  public get kinesisSettings() {
    return this._kinesisSettings;
  }
  public putKinesisSettings(value: DmsEndpointKinesisSettings) {
    this._kinesisSettings.internalValue = value;
  }
  public resetKinesisSettings() {
    this._kinesisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisSettingsInput() {
    return this._kinesisSettings.internalValue;
  }

  // mongodb_settings - computed: false, optional: true, required: false
  private _mongodbSettings = new DmsEndpointMongodbSettingsOutputReference(this, "mongodb_settings");
  public get mongodbSettings() {
    return this._mongodbSettings;
  }
  public putMongodbSettings(value: DmsEndpointMongodbSettings) {
    this._mongodbSettings.internalValue = value;
  }
  public resetMongodbSettings() {
    this._mongodbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbSettingsInput() {
    return this._mongodbSettings.internalValue;
  }

  // mysql_settings - computed: false, optional: true, required: false
  private _mysqlSettings = new DmsEndpointMysqlSettingsOutputReference(this, "mysql_settings");
  public get mysqlSettings() {
    return this._mysqlSettings;
  }
  public putMysqlSettings(value: DmsEndpointMysqlSettings) {
    this._mysqlSettings.internalValue = value;
  }
  public resetMysqlSettings() {
    this._mysqlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSettingsInput() {
    return this._mysqlSettings.internalValue;
  }

  // oracle_settings - computed: false, optional: true, required: false
  private _oracleSettings = new DmsEndpointOracleSettingsOutputReference(this, "oracle_settings");
  public get oracleSettings() {
    return this._oracleSettings;
  }
  public putOracleSettings(value: DmsEndpointOracleSettings) {
    this._oracleSettings.internalValue = value;
  }
  public resetOracleSettings() {
    this._oracleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSettingsInput() {
    return this._oracleSettings.internalValue;
  }

  // postgres_settings - computed: false, optional: true, required: false
  private _postgresSettings = new DmsEndpointPostgresSettingsOutputReference(this, "postgres_settings");
  public get postgresSettings() {
    return this._postgresSettings;
  }
  public putPostgresSettings(value: DmsEndpointPostgresSettings) {
    this._postgresSettings.internalValue = value;
  }
  public resetPostgresSettings() {
    this._postgresSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSettingsInput() {
    return this._postgresSettings.internalValue;
  }

  // redis_settings - computed: false, optional: true, required: false
  private _redisSettings = new DmsEndpointRedisSettingsOutputReference(this, "redis_settings");
  public get redisSettings() {
    return this._redisSettings;
  }
  public putRedisSettings(value: DmsEndpointRedisSettings) {
    this._redisSettings.internalValue = value;
  }
  public resetRedisSettings() {
    this._redisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisSettingsInput() {
    return this._redisSettings.internalValue;
  }

  // redshift_settings - computed: false, optional: true, required: false
  private _redshiftSettings = new DmsEndpointRedshiftSettingsOutputReference(this, "redshift_settings");
  public get redshiftSettings() {
    return this._redshiftSettings;
  }
  public putRedshiftSettings(value: DmsEndpointRedshiftSettings) {
    this._redshiftSettings.internalValue = value;
  }
  public resetRedshiftSettings() {
    this._redshiftSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftSettingsInput() {
    return this._redshiftSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsEndpointTimeouts) {
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
      certificate_arn: cdktn.stringToTerraform(this._certificateArn),
      database_name: cdktn.stringToTerraform(this._databaseName),
      endpoint_id: cdktn.stringToTerraform(this._endpointId),
      endpoint_type: cdktn.stringToTerraform(this._endpointType),
      engine_name: cdktn.stringToTerraform(this._engineName),
      extra_connection_attributes: cdktn.stringToTerraform(this._extraConnectionAttributes),
      id: cdktn.stringToTerraform(this._id),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      password: cdktn.stringToTerraform(this._password),
      pause_replication_tasks: cdktn.booleanToTerraform(this._pauseReplicationTasks),
      port: cdktn.numberToTerraform(this._port),
      region: cdktn.stringToTerraform(this._region),
      secrets_manager_access_role_arn: cdktn.stringToTerraform(this._secretsManagerAccessRoleArn),
      secrets_manager_arn: cdktn.stringToTerraform(this._secretsManagerArn),
      server_name: cdktn.stringToTerraform(this._serverName),
      service_access_role: cdktn.stringToTerraform(this._serviceAccessRole),
      ssl_mode: cdktn.stringToTerraform(this._sslMode),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      username: cdktn.stringToTerraform(this._username),
      elasticsearch_settings: dmsEndpointElasticsearchSettingsToTerraform(this._elasticsearchSettings.internalValue),
      kafka_settings: dmsEndpointKafkaSettingsToTerraform(this._kafkaSettings.internalValue),
      kinesis_settings: dmsEndpointKinesisSettingsToTerraform(this._kinesisSettings.internalValue),
      mongodb_settings: dmsEndpointMongodbSettingsToTerraform(this._mongodbSettings.internalValue),
      mysql_settings: dmsEndpointMysqlSettingsToTerraform(this._mysqlSettings.internalValue),
      oracle_settings: dmsEndpointOracleSettingsToTerraform(this._oracleSettings.internalValue),
      postgres_settings: dmsEndpointPostgresSettingsToTerraform(this._postgresSettings.internalValue),
      redis_settings: dmsEndpointRedisSettingsToTerraform(this._redisSettings.internalValue),
      redshift_settings: dmsEndpointRedshiftSettingsToTerraform(this._redshiftSettings.internalValue),
      timeouts: dmsEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_arn: {
        value: cdktn.stringToHclTerraform(this._certificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_id: {
        value: cdktn.stringToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktn.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_name: {
        value: cdktn.stringToHclTerraform(this._engineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_connection_attributes: {
        value: cdktn.stringToHclTerraform(this._extraConnectionAttributes),
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
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_replication_tasks: {
        value: cdktn.booleanToHclTerraform(this._pauseReplicationTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktn.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secrets_manager_access_role_arn: {
        value: cdktn.stringToHclTerraform(this._secretsManagerAccessRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secrets_manager_arn: {
        value: cdktn.stringToHclTerraform(this._secretsManagerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktn.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_access_role: {
        value: cdktn.stringToHclTerraform(this._serviceAccessRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mode: {
        value: cdktn.stringToHclTerraform(this._sslMode),
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
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_settings: {
        value: dmsEndpointElasticsearchSettingsToHclTerraform(this._elasticsearchSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointElasticsearchSettingsList",
      },
      kafka_settings: {
        value: dmsEndpointKafkaSettingsToHclTerraform(this._kafkaSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointKafkaSettingsList",
      },
      kinesis_settings: {
        value: dmsEndpointKinesisSettingsToHclTerraform(this._kinesisSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointKinesisSettingsList",
      },
      mongodb_settings: {
        value: dmsEndpointMongodbSettingsToHclTerraform(this._mongodbSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointMongodbSettingsList",
      },
      mysql_settings: {
        value: dmsEndpointMysqlSettingsToHclTerraform(this._mysqlSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointMysqlSettingsList",
      },
      oracle_settings: {
        value: dmsEndpointOracleSettingsToHclTerraform(this._oracleSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointOracleSettingsList",
      },
      postgres_settings: {
        value: dmsEndpointPostgresSettingsToHclTerraform(this._postgresSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointPostgresSettingsList",
      },
      redis_settings: {
        value: dmsEndpointRedisSettingsToHclTerraform(this._redisSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointRedisSettingsList",
      },
      redshift_settings: {
        value: dmsEndpointRedshiftSettingsToHclTerraform(this._redshiftSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsEndpointRedshiftSettingsList",
      },
      timeouts: {
        value: dmsEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DmsEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
