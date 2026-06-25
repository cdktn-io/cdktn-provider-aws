# `dmsS3Endpoint` Submodule <a name="`dmsS3Endpoint` Submodule" id="@cdktn/provider-aws.dmsS3Endpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsS3Endpoint <a name="DmsS3Endpoint" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint aws_dms_s3_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3Endpoint;

DmsS3Endpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .endpointId(java.lang.String)
    .endpointType(java.lang.String)
    .serviceAccessRoleArn(java.lang.String)
//  .addColumnName(java.lang.Boolean|IResolvable)
//  .addTrailingPaddingCharacter(java.lang.Boolean|IResolvable)
//  .bucketFolder(java.lang.String)
//  .cannedAclForObjects(java.lang.String)
//  .cdcInsertsAndUpdates(java.lang.Boolean|IResolvable)
//  .cdcInsertsOnly(java.lang.Boolean|IResolvable)
//  .cdcMaxBatchInterval(java.lang.Number)
//  .cdcMinFileSize(java.lang.Number)
//  .cdcPath(java.lang.String)
//  .certificateArn(java.lang.String)
//  .compressionType(java.lang.String)
//  .csvDelimiter(java.lang.String)
//  .csvNoSupValue(java.lang.String)
//  .csvNullValue(java.lang.String)
//  .csvRowDelimiter(java.lang.String)
//  .dataFormat(java.lang.String)
//  .dataPageSize(java.lang.Number)
//  .datePartitionDelimiter(java.lang.String)
//  .datePartitionEnabled(java.lang.Boolean|IResolvable)
//  .datePartitionSequence(java.lang.String)
//  .datePartitionTimezone(java.lang.String)
//  .detachTargetOnLobLookupFailureParquet(java.lang.Boolean|IResolvable)
//  .dictPageSizeLimit(java.lang.Number)
//  .enableStatistics(java.lang.Boolean|IResolvable)
//  .encodingType(java.lang.String)
//  .encryptionMode(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .externalTableDefinition(java.lang.String)
//  .glueCatalogGeneration(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ignoreHeaderRows(java.lang.Number)
//  .includeOpForFullLoad(java.lang.Boolean|IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .parquetTimestampInMillisecond(java.lang.Boolean|IResolvable)
//  .parquetVersion(java.lang.String)
//  .preserveTransactions(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .rfc4180(java.lang.Boolean|IResolvable)
//  .rowGroupLength(java.lang.Number)
//  .serverSideEncryptionKmsKeyId(java.lang.String)
//  .sslMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsS3EndpointTimeouts)
//  .timestampColumnName(java.lang.String)
//  .useCsvNoSupValue(java.lang.Boolean|IResolvable)
//  .useTaskStartTimeForFullLoadTimestamp(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addColumnName">addColumnName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cannedAclForObjects">cannedAclForObjects</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMinFileSize">cdcMinFileSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcPath">cdcPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.compressionType">compressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvDelimiter">csvDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNoSupValue">csvNoSupValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNullValue">csvNullValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvRowDelimiter">csvRowDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataPageSize">dataPageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionEnabled">datePartitionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionSequence">datePartitionSequence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionTimezone">datePartitionTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.detachTargetOnLobLookupFailureParquet">detachTargetOnLobLookupFailureParquet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#detach_target_on_lob_lookup_failure_parquet DmsS3Endpoint#detach_target_on_lob_lookup_failure_parquet}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.enableStatistics">enableStatistics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encodingType">encodingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.externalTableDefinition">externalTableDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#glue_catalog_generation DmsS3Endpoint#glue_catalog_generation}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#id DmsS3Endpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetVersion">parquetVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.preserveTransactions">preserveTransactions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rfc4180">rfc4180</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rowGroupLength">rowGroupLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags DmsS3Endpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timestampColumnName">timestampColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}.

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serviceAccessRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}.

---

##### `addColumnName`<sup>Optional</sup> <a name="addColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addColumnName"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}.

---

##### `addTrailingPaddingCharacter`<sup>Optional</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.addTrailingPaddingCharacter"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}.

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.bucketFolder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}.

---

##### `cannedAclForObjects`<sup>Optional</sup> <a name="cannedAclForObjects" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cannedAclForObjects"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}.

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsAndUpdates"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}.

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcInsertsOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}.

---

##### `cdcMaxBatchInterval`<sup>Optional</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMaxBatchInterval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}.

---

##### `cdcMinFileSize`<sup>Optional</sup> <a name="cdcMinFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcMinFileSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}.

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.cdcPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}.

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.compressionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}.

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvDelimiter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}.

---

##### `csvNoSupValue`<sup>Optional</sup> <a name="csvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNoSupValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}.

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvNullValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}.

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.csvRowDelimiter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}.

---

##### `dataPageSize`<sup>Optional</sup> <a name="dataPageSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dataPageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}.

---

##### `datePartitionDelimiter`<sup>Optional</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionDelimiter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}.

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="datePartitionEnabled" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}.

---

##### `datePartitionSequence`<sup>Optional</sup> <a name="datePartitionSequence" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionSequence"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}.

---

##### `datePartitionTimezone`<sup>Optional</sup> <a name="datePartitionTimezone" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.datePartitionTimezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}.

---

##### `detachTargetOnLobLookupFailureParquet`<sup>Optional</sup> <a name="detachTargetOnLobLookupFailureParquet" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.detachTargetOnLobLookupFailureParquet"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#detach_target_on_lob_lookup_failure_parquet DmsS3Endpoint#detach_target_on_lob_lookup_failure_parquet}.

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.dictPageSizeLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}.

---

##### `enableStatistics`<sup>Optional</sup> <a name="enableStatistics" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.enableStatistics"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encodingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.encryptionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}.

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="externalTableDefinition" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.externalTableDefinition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}.

---

##### `glueCatalogGeneration`<sup>Optional</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.glueCatalogGeneration"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#glue_catalog_generation DmsS3Endpoint#glue_catalog_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#id DmsS3Endpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreHeaderRows`<sup>Optional</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.ignoreHeaderRows"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}.

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.includeOpForFullLoad"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}.

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.maxFileSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}.

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetTimestampInMillisecond"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}.

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.parquetVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}.

---

##### `preserveTransactions`<sup>Optional</sup> <a name="preserveTransactions" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.preserveTransactions"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#region DmsS3Endpoint#region}

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rfc4180"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}.

---

##### `rowGroupLength`<sup>Optional</sup> <a name="rowGroupLength" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.rowGroupLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.serverSideEncryptionKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.sslMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags DmsS3Endpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}

---

##### `timestampColumnName`<sup>Optional</sup> <a name="timestampColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.timestampColumnName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}.

---

##### `useCsvNoSupValue`<sup>Optional</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useCsvNoSupValue"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}.

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.useTaskStartTimeForFullLoadTimestamp"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName">resetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter">resetAddTrailingPaddingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects">resetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates">resetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly">resetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval">resetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize">resetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath">resetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter">resetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue">resetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue">resetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter">resetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize">resetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter">resetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled">resetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence">resetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone">resetDatePartitionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDetachTargetOnLobLookupFailureParquet">resetDetachTargetOnLobLookupFailureParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit">resetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics">resetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition">resetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetGlueCatalogGeneration">resetGlueCatalogGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows">resetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad">resetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond">resetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion">resetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions">resetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180">resetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength">resetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName">resetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue">resetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp">resetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts"></a>

```java
public void putTimeouts(DmsS3EndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

---

##### `resetAddColumnName` <a name="resetAddColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName"></a>

```java
public void resetAddColumnName()
```

##### `resetAddTrailingPaddingCharacter` <a name="resetAddTrailingPaddingCharacter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter"></a>

```java
public void resetAddTrailingPaddingCharacter()
```

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder"></a>

```java
public void resetBucketFolder()
```

##### `resetCannedAclForObjects` <a name="resetCannedAclForObjects" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects"></a>

```java
public void resetCannedAclForObjects()
```

##### `resetCdcInsertsAndUpdates` <a name="resetCdcInsertsAndUpdates" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates"></a>

```java
public void resetCdcInsertsAndUpdates()
```

##### `resetCdcInsertsOnly` <a name="resetCdcInsertsOnly" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly"></a>

```java
public void resetCdcInsertsOnly()
```

##### `resetCdcMaxBatchInterval` <a name="resetCdcMaxBatchInterval" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval"></a>

```java
public void resetCdcMaxBatchInterval()
```

##### `resetCdcMinFileSize` <a name="resetCdcMinFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize"></a>

```java
public void resetCdcMinFileSize()
```

##### `resetCdcPath` <a name="resetCdcPath" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath"></a>

```java
public void resetCdcPath()
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType"></a>

```java
public void resetCompressionType()
```

##### `resetCsvDelimiter` <a name="resetCsvDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter"></a>

```java
public void resetCsvDelimiter()
```

##### `resetCsvNoSupValue` <a name="resetCsvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue"></a>

```java
public void resetCsvNoSupValue()
```

##### `resetCsvNullValue` <a name="resetCsvNullValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue"></a>

```java
public void resetCsvNullValue()
```

##### `resetCsvRowDelimiter` <a name="resetCsvRowDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter"></a>

```java
public void resetCsvRowDelimiter()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetDataPageSize` <a name="resetDataPageSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize"></a>

```java
public void resetDataPageSize()
```

##### `resetDatePartitionDelimiter` <a name="resetDatePartitionDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter"></a>

```java
public void resetDatePartitionDelimiter()
```

##### `resetDatePartitionEnabled` <a name="resetDatePartitionEnabled" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled"></a>

```java
public void resetDatePartitionEnabled()
```

##### `resetDatePartitionSequence` <a name="resetDatePartitionSequence" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence"></a>

```java
public void resetDatePartitionSequence()
```

##### `resetDatePartitionTimezone` <a name="resetDatePartitionTimezone" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone"></a>

```java
public void resetDatePartitionTimezone()
```

##### `resetDetachTargetOnLobLookupFailureParquet` <a name="resetDetachTargetOnLobLookupFailureParquet" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDetachTargetOnLobLookupFailureParquet"></a>

```java
public void resetDetachTargetOnLobLookupFailureParquet()
```

##### `resetDictPageSizeLimit` <a name="resetDictPageSizeLimit" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit"></a>

```java
public void resetDictPageSizeLimit()
```

##### `resetEnableStatistics` <a name="resetEnableStatistics" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics"></a>

```java
public void resetEnableStatistics()
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType"></a>

```java
public void resetEncodingType()
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetExternalTableDefinition` <a name="resetExternalTableDefinition" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition"></a>

```java
public void resetExternalTableDefinition()
```

##### `resetGlueCatalogGeneration` <a name="resetGlueCatalogGeneration" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetGlueCatalogGeneration"></a>

```java
public void resetGlueCatalogGeneration()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreHeaderRows` <a name="resetIgnoreHeaderRows" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows"></a>

```java
public void resetIgnoreHeaderRows()
```

##### `resetIncludeOpForFullLoad` <a name="resetIncludeOpForFullLoad" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad"></a>

```java
public void resetIncludeOpForFullLoad()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetParquetTimestampInMillisecond` <a name="resetParquetTimestampInMillisecond" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond"></a>

```java
public void resetParquetTimestampInMillisecond()
```

##### `resetParquetVersion` <a name="resetParquetVersion" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion"></a>

```java
public void resetParquetVersion()
```

##### `resetPreserveTransactions` <a name="resetPreserveTransactions" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions"></a>

```java
public void resetPreserveTransactions()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRfc4180` <a name="resetRfc4180" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180"></a>

```java
public void resetRfc4180()
```

##### `resetRowGroupLength` <a name="resetRowGroupLength" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength"></a>

```java
public void resetRowGroupLength()
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId"></a>

```java
public void resetServerSideEncryptionKmsKeyId()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode"></a>

```java
public void resetSslMode()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimestampColumnName` <a name="resetTimestampColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName"></a>

```java
public void resetTimestampColumnName()
```

##### `resetUseCsvNoSupValue` <a name="resetUseCsvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue"></a>

```java
public void resetUseCsvNoSupValue()
```

##### `resetUseTaskStartTimeForFullLoadTimestamp` <a name="resetUseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```java
public void resetUseTaskStartTimeForFullLoadTimestamp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsS3Endpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3Endpoint;

DmsS3Endpoint.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3Endpoint;

DmsS3Endpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3Endpoint;

DmsS3Endpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3Endpoint;

DmsS3Endpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsS3Endpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsS3Endpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsS3Endpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsS3Endpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsS3Endpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn">endpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName">engineDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput">addColumnNameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput">addTrailingPaddingCharacterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput">bucketFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput">cannedAclForObjectsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput">cdcInsertsAndUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput">cdcInsertsOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput">cdcMaxBatchIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput">cdcMinFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput">cdcPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput">csvDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput">csvNoSupValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput">csvNullValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput">csvRowDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput">dataPageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput">datePartitionDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput">datePartitionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput">datePartitionSequenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput">datePartitionTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.detachTargetOnLobLookupFailureParquetInput">detachTargetOnLobLookupFailureParquetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput">dictPageSizeLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput">enableStatisticsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput">encodingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput">externalTableDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.glueCatalogGenerationInput">glueCatalogGenerationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput">ignoreHeaderRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput">includeOpForFullLoadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput">parquetTimestampInMillisecondInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput">parquetVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput">preserveTransactionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input">rfc4180Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput">rowGroupLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput">timestampColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput">useCsvNoSupValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput">useTaskStartTimeForFullLoadTimestampInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName">addColumnName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath">cdcPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter">csvDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue">csvNoSupValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue">csvNullValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize">dataPageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence">datePartitionSequence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.detachTargetOnLobLookupFailureParquet">detachTargetOnLobLookupFailureParquet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics">enableStatistics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType">encodingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition">externalTableDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion">parquetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions">preserveTransactions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180">rfc4180</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength">rowGroupLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName">timestampColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn"></a>

```java
public java.lang.String getEndpointArn();
```

- *Type:* java.lang.String

---

##### `engineDisplayName`<sup>Required</sup> <a name="engineDisplayName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName"></a>

```java
public java.lang.String getEngineDisplayName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts"></a>

```java
public DmsS3EndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a>

---

##### `addColumnNameInput`<sup>Optional</sup> <a name="addColumnNameInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput"></a>

```java
public java.lang.Boolean|IResolvable getAddColumnNameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `addTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="addTrailingPaddingCharacterInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput"></a>

```java
public java.lang.Boolean|IResolvable getAddTrailingPaddingCharacterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput"></a>

```java
public java.lang.String getBucketFolderInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `cannedAclForObjectsInput`<sup>Optional</sup> <a name="cannedAclForObjectsInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput"></a>

```java
public java.lang.String getCannedAclForObjectsInput();
```

- *Type:* java.lang.String

---

##### `cdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="cdcInsertsAndUpdatesInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsAndUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcInsertsOnlyInput`<sup>Optional</sup> <a name="cdcInsertsOnlyInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="cdcMaxBatchIntervalInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput"></a>

```java
public java.lang.Number getCdcMaxBatchIntervalInput();
```

- *Type:* java.lang.Number

---

##### `cdcMinFileSizeInput`<sup>Optional</sup> <a name="cdcMinFileSizeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput"></a>

```java
public java.lang.Number getCdcMinFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `cdcPathInput`<sup>Optional</sup> <a name="cdcPathInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput"></a>

```java
public java.lang.String getCdcPathInput();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `csvDelimiterInput`<sup>Optional</sup> <a name="csvDelimiterInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput"></a>

```java
public java.lang.String getCsvDelimiterInput();
```

- *Type:* java.lang.String

---

##### `csvNoSupValueInput`<sup>Optional</sup> <a name="csvNoSupValueInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput"></a>

```java
public java.lang.String getCsvNoSupValueInput();
```

- *Type:* java.lang.String

---

##### `csvNullValueInput`<sup>Optional</sup> <a name="csvNullValueInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput"></a>

```java
public java.lang.String getCsvNullValueInput();
```

- *Type:* java.lang.String

---

##### `csvRowDelimiterInput`<sup>Optional</sup> <a name="csvRowDelimiterInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput"></a>

```java
public java.lang.String getCsvRowDelimiterInput();
```

- *Type:* java.lang.String

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `dataPageSizeInput`<sup>Optional</sup> <a name="dataPageSizeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput"></a>

```java
public java.lang.Number getDataPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `datePartitionDelimiterInput`<sup>Optional</sup> <a name="datePartitionDelimiterInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput"></a>

```java
public java.lang.String getDatePartitionDelimiterInput();
```

- *Type:* java.lang.String

---

##### `datePartitionEnabledInput`<sup>Optional</sup> <a name="datePartitionEnabledInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDatePartitionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `datePartitionSequenceInput`<sup>Optional</sup> <a name="datePartitionSequenceInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput"></a>

```java
public java.lang.String getDatePartitionSequenceInput();
```

- *Type:* java.lang.String

---

##### `datePartitionTimezoneInput`<sup>Optional</sup> <a name="datePartitionTimezoneInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput"></a>

```java
public java.lang.String getDatePartitionTimezoneInput();
```

- *Type:* java.lang.String

---

##### `detachTargetOnLobLookupFailureParquetInput`<sup>Optional</sup> <a name="detachTargetOnLobLookupFailureParquetInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.detachTargetOnLobLookupFailureParquetInput"></a>

```java
public java.lang.Boolean|IResolvable getDetachTargetOnLobLookupFailureParquetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dictPageSizeLimitInput`<sup>Optional</sup> <a name="dictPageSizeLimitInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput"></a>

```java
public java.lang.Number getDictPageSizeLimitInput();
```

- *Type:* java.lang.Number

---

##### `enableStatisticsInput`<sup>Optional</sup> <a name="enableStatisticsInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableStatisticsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput"></a>

```java
public java.lang.String getEncodingTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput"></a>

```java
public java.lang.String getEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `externalTableDefinitionInput`<sup>Optional</sup> <a name="externalTableDefinitionInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput"></a>

```java
public java.lang.String getExternalTableDefinitionInput();
```

- *Type:* java.lang.String

---

##### `glueCatalogGenerationInput`<sup>Optional</sup> <a name="glueCatalogGenerationInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.glueCatalogGenerationInput"></a>

```java
public java.lang.Boolean|IResolvable getGlueCatalogGenerationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreHeaderRowsInput`<sup>Optional</sup> <a name="ignoreHeaderRowsInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput"></a>

```java
public java.lang.Number getIgnoreHeaderRowsInput();
```

- *Type:* java.lang.Number

---

##### `includeOpForFullLoadInput`<sup>Optional</sup> <a name="includeOpForFullLoadInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOpForFullLoadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `parquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="parquetTimestampInMillisecondInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput"></a>

```java
public java.lang.Boolean|IResolvable getParquetTimestampInMillisecondInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parquetVersionInput`<sup>Optional</sup> <a name="parquetVersionInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput"></a>

```java
public java.lang.String getParquetVersionInput();
```

- *Type:* java.lang.String

---

##### `preserveTransactionsInput`<sup>Optional</sup> <a name="preserveTransactionsInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput"></a>

```java
public java.lang.Boolean|IResolvable getPreserveTransactionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `rfc4180Input`<sup>Optional</sup> <a name="rfc4180Input" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input"></a>

```java
public java.lang.Boolean|IResolvable getRfc4180Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rowGroupLengthInput`<sup>Optional</sup> <a name="rowGroupLengthInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput"></a>

```java
public java.lang.Number getRowGroupLengthInput();
```

- *Type:* java.lang.Number

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput"></a>

```java
public IResolvable|DmsS3EndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

---

##### `timestampColumnNameInput`<sup>Optional</sup> <a name="timestampColumnNameInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput"></a>

```java
public java.lang.String getTimestampColumnNameInput();
```

- *Type:* java.lang.String

---

##### `useCsvNoSupValueInput`<sup>Optional</sup> <a name="useCsvNoSupValueInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCsvNoSupValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestampInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTaskStartTimeForFullLoadTimestampInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `addColumnName`<sup>Required</sup> <a name="addColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName"></a>

```java
public java.lang.Boolean|IResolvable getAddColumnName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `addTrailingPaddingCharacter`<sup>Required</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter"></a>

```java
public java.lang.Boolean|IResolvable getAddTrailingPaddingCharacter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `cannedAclForObjects`<sup>Required</sup> <a name="cannedAclForObjects" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects"></a>

```java
public java.lang.String getCannedAclForObjects();
```

- *Type:* java.lang.String

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsAndUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcMaxBatchInterval`<sup>Required</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval"></a>

```java
public java.lang.Number getCdcMaxBatchInterval();
```

- *Type:* java.lang.Number

---

##### `cdcMinFileSize`<sup>Required</sup> <a name="cdcMinFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize"></a>

```java
public java.lang.Number getCdcMinFileSize();
```

- *Type:* java.lang.Number

---

##### `cdcPath`<sup>Required</sup> <a name="cdcPath" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath"></a>

```java
public java.lang.String getCdcPath();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `csvDelimiter`<sup>Required</sup> <a name="csvDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter"></a>

```java
public java.lang.String getCsvDelimiter();
```

- *Type:* java.lang.String

---

##### `csvNoSupValue`<sup>Required</sup> <a name="csvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue"></a>

```java
public java.lang.String getCsvNoSupValue();
```

- *Type:* java.lang.String

---

##### `csvNullValue`<sup>Required</sup> <a name="csvNullValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue"></a>

```java
public java.lang.String getCsvNullValue();
```

- *Type:* java.lang.String

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="csvRowDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter"></a>

```java
public java.lang.String getCsvRowDelimiter();
```

- *Type:* java.lang.String

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `dataPageSize`<sup>Required</sup> <a name="dataPageSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize"></a>

```java
public java.lang.Number getDataPageSize();
```

- *Type:* java.lang.Number

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter"></a>

```java
public java.lang.String getDatePartitionDelimiter();
```

- *Type:* java.lang.String

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="datePartitionEnabled" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDatePartitionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `datePartitionSequence`<sup>Required</sup> <a name="datePartitionSequence" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence"></a>

```java
public java.lang.String getDatePartitionSequence();
```

- *Type:* java.lang.String

---

##### `datePartitionTimezone`<sup>Required</sup> <a name="datePartitionTimezone" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone"></a>

```java
public java.lang.String getDatePartitionTimezone();
```

- *Type:* java.lang.String

---

##### `detachTargetOnLobLookupFailureParquet`<sup>Required</sup> <a name="detachTargetOnLobLookupFailureParquet" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.detachTargetOnLobLookupFailureParquet"></a>

```java
public java.lang.Boolean|IResolvable getDetachTargetOnLobLookupFailureParquet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit"></a>

```java
public java.lang.Number getDictPageSizeLimit();
```

- *Type:* java.lang.Number

---

##### `enableStatistics`<sup>Required</sup> <a name="enableStatistics" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics"></a>

```java
public java.lang.Boolean|IResolvable getEnableStatistics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType"></a>

```java
public java.lang.String getEncodingType();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `externalTableDefinition`<sup>Required</sup> <a name="externalTableDefinition" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition"></a>

```java
public java.lang.String getExternalTableDefinition();
```

- *Type:* java.lang.String

---

##### `glueCatalogGeneration`<sup>Required</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.glueCatalogGeneration"></a>

```java
public java.lang.Boolean|IResolvable getGlueCatalogGeneration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreHeaderRows`<sup>Required</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows"></a>

```java
public java.lang.Number getIgnoreHeaderRows();
```

- *Type:* java.lang.Number

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOpForFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond"></a>

```java
public java.lang.Boolean|IResolvable getParquetTimestampInMillisecond();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parquetVersion`<sup>Required</sup> <a name="parquetVersion" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion"></a>

```java
public java.lang.String getParquetVersion();
```

- *Type:* java.lang.String

---

##### `preserveTransactions`<sup>Required</sup> <a name="preserveTransactions" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions"></a>

```java
public java.lang.Boolean|IResolvable getPreserveTransactions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180"></a>

```java
public java.lang.Boolean|IResolvable getRfc4180();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rowGroupLength`<sup>Required</sup> <a name="rowGroupLength" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength"></a>

```java
public java.lang.Number getRowGroupLength();
```

- *Type:* java.lang.Number

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timestampColumnName`<sup>Required</sup> <a name="timestampColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName"></a>

```java
public java.lang.String getTimestampColumnName();
```

- *Type:* java.lang.String

---

##### `useCsvNoSupValue`<sup>Required</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue"></a>

```java
public java.lang.Boolean|IResolvable getUseCsvNoSupValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp"></a>

```java
public java.lang.Boolean|IResolvable getUseTaskStartTimeForFullLoadTimestamp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsS3EndpointConfig <a name="DmsS3EndpointConfig" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3EndpointConfig;

DmsS3EndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucketName(java.lang.String)
    .endpointId(java.lang.String)
    .endpointType(java.lang.String)
    .serviceAccessRoleArn(java.lang.String)
//  .addColumnName(java.lang.Boolean|IResolvable)
//  .addTrailingPaddingCharacter(java.lang.Boolean|IResolvable)
//  .bucketFolder(java.lang.String)
//  .cannedAclForObjects(java.lang.String)
//  .cdcInsertsAndUpdates(java.lang.Boolean|IResolvable)
//  .cdcInsertsOnly(java.lang.Boolean|IResolvable)
//  .cdcMaxBatchInterval(java.lang.Number)
//  .cdcMinFileSize(java.lang.Number)
//  .cdcPath(java.lang.String)
//  .certificateArn(java.lang.String)
//  .compressionType(java.lang.String)
//  .csvDelimiter(java.lang.String)
//  .csvNoSupValue(java.lang.String)
//  .csvNullValue(java.lang.String)
//  .csvRowDelimiter(java.lang.String)
//  .dataFormat(java.lang.String)
//  .dataPageSize(java.lang.Number)
//  .datePartitionDelimiter(java.lang.String)
//  .datePartitionEnabled(java.lang.Boolean|IResolvable)
//  .datePartitionSequence(java.lang.String)
//  .datePartitionTimezone(java.lang.String)
//  .detachTargetOnLobLookupFailureParquet(java.lang.Boolean|IResolvable)
//  .dictPageSizeLimit(java.lang.Number)
//  .enableStatistics(java.lang.Boolean|IResolvable)
//  .encodingType(java.lang.String)
//  .encryptionMode(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .externalTableDefinition(java.lang.String)
//  .glueCatalogGeneration(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .ignoreHeaderRows(java.lang.Number)
//  .includeOpForFullLoad(java.lang.Boolean|IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .parquetTimestampInMillisecond(java.lang.Boolean|IResolvable)
//  .parquetVersion(java.lang.String)
//  .preserveTransactions(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .rfc4180(java.lang.Boolean|IResolvable)
//  .rowGroupLength(java.lang.Number)
//  .serverSideEncryptionKmsKeyId(java.lang.String)
//  .sslMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsS3EndpointTimeouts)
//  .timestampColumnName(java.lang.String)
//  .useCsvNoSupValue(java.lang.Boolean|IResolvable)
//  .useTaskStartTimeForFullLoadTimestamp(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName">addColumnName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath">cdcPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter">csvDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue">csvNoSupValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue">csvNullValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize">dataPageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence">datePartitionSequence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.detachTargetOnLobLookupFailureParquet">detachTargetOnLobLookupFailureParquet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#detach_target_on_lob_lookup_failure_parquet DmsS3Endpoint#detach_target_on_lob_lookup_failure_parquet}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics">enableStatistics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType">encodingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition">externalTableDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#glue_catalog_generation DmsS3Endpoint#glue_catalog_generation}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#id DmsS3Endpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion">parquetVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions">preserveTransactions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180">rfc4180</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength">rowGroupLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags DmsS3Endpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName">timestampColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}.

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}.

---

##### `addColumnName`<sup>Optional</sup> <a name="addColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName"></a>

```java
public java.lang.Boolean|IResolvable getAddColumnName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}.

---

##### `addTrailingPaddingCharacter`<sup>Optional</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter"></a>

```java
public java.lang.Boolean|IResolvable getAddTrailingPaddingCharacter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}.

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}.

---

##### `cannedAclForObjects`<sup>Optional</sup> <a name="cannedAclForObjects" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects"></a>

```java
public java.lang.String getCannedAclForObjects();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}.

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsAndUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}.

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}.

---

##### `cdcMaxBatchInterval`<sup>Optional</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval"></a>

```java
public java.lang.Number getCdcMaxBatchInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}.

---

##### `cdcMinFileSize`<sup>Optional</sup> <a name="cdcMinFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize"></a>

```java
public java.lang.Number getCdcMinFileSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}.

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath"></a>

```java
public java.lang.String getCdcPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}.

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}.

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter"></a>

```java
public java.lang.String getCsvDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}.

---

##### `csvNoSupValue`<sup>Optional</sup> <a name="csvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue"></a>

```java
public java.lang.String getCsvNoSupValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}.

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue"></a>

```java
public java.lang.String getCsvNullValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}.

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter"></a>

```java
public java.lang.String getCsvRowDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}.

---

##### `dataPageSize`<sup>Optional</sup> <a name="dataPageSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize"></a>

```java
public java.lang.Number getDataPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}.

---

##### `datePartitionDelimiter`<sup>Optional</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter"></a>

```java
public java.lang.String getDatePartitionDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}.

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="datePartitionEnabled" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDatePartitionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}.

---

##### `datePartitionSequence`<sup>Optional</sup> <a name="datePartitionSequence" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence"></a>

```java
public java.lang.String getDatePartitionSequence();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}.

---

##### `datePartitionTimezone`<sup>Optional</sup> <a name="datePartitionTimezone" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone"></a>

```java
public java.lang.String getDatePartitionTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}.

---

##### `detachTargetOnLobLookupFailureParquet`<sup>Optional</sup> <a name="detachTargetOnLobLookupFailureParquet" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.detachTargetOnLobLookupFailureParquet"></a>

```java
public java.lang.Boolean|IResolvable getDetachTargetOnLobLookupFailureParquet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#detach_target_on_lob_lookup_failure_parquet DmsS3Endpoint#detach_target_on_lob_lookup_failure_parquet}.

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit"></a>

```java
public java.lang.Number getDictPageSizeLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}.

---

##### `enableStatistics`<sup>Optional</sup> <a name="enableStatistics" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics"></a>

```java
public java.lang.Boolean|IResolvable getEnableStatistics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType"></a>

```java
public java.lang.String getEncodingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}.

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="externalTableDefinition" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition"></a>

```java
public java.lang.String getExternalTableDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}.

---

##### `glueCatalogGeneration`<sup>Optional</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.glueCatalogGeneration"></a>

```java
public java.lang.Boolean|IResolvable getGlueCatalogGeneration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#glue_catalog_generation DmsS3Endpoint#glue_catalog_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#id DmsS3Endpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreHeaderRows`<sup>Optional</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows"></a>

```java
public java.lang.Number getIgnoreHeaderRows();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}.

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOpForFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}.

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}.

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond"></a>

```java
public java.lang.Boolean|IResolvable getParquetTimestampInMillisecond();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}.

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion"></a>

```java
public java.lang.String getParquetVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}.

---

##### `preserveTransactions`<sup>Optional</sup> <a name="preserveTransactions" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions"></a>

```java
public java.lang.Boolean|IResolvable getPreserveTransactions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#region DmsS3Endpoint#region}

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180"></a>

```java
public java.lang.Boolean|IResolvable getRfc4180();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}.

---

##### `rowGroupLength`<sup>Optional</sup> <a name="rowGroupLength" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength"></a>

```java
public java.lang.Number getRowGroupLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags DmsS3Endpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts"></a>

```java
public DmsS3EndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}

---

##### `timestampColumnName`<sup>Optional</sup> <a name="timestampColumnName" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName"></a>

```java
public java.lang.String getTimestampColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}.

---

##### `useCsvNoSupValue`<sup>Optional</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue"></a>

```java
public java.lang.Boolean|IResolvable getUseCsvNoSupValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}.

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp"></a>

```java
public java.lang.Boolean|IResolvable getUseTaskStartTimeForFullLoadTimestamp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsS3EndpointTimeouts <a name="DmsS3EndpointTimeouts" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3EndpointTimeouts;

DmsS3EndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#create DmsS3Endpoint#create}. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#delete DmsS3Endpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#create DmsS3Endpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/dms_s3_endpoint#delete DmsS3Endpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsS3EndpointTimeoutsOutputReference <a name="DmsS3EndpointTimeoutsOutputReference" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_s3_endpoint.DmsS3EndpointTimeoutsOutputReference;

new DmsS3EndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsS3EndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

---



