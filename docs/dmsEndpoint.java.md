# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktn/provider-aws.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .endpointType(java.lang.String)
    .engineName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .elasticsearchSettings(DmsEndpointElasticsearchSettings)
//  .extraConnectionAttributes(java.lang.String)
//  .id(java.lang.String)
//  .kafkaSettings(DmsEndpointKafkaSettings)
//  .kinesisSettings(DmsEndpointKinesisSettings)
//  .kmsKeyArn(java.lang.String)
//  .mongodbSettings(DmsEndpointMongodbSettings)
//  .mysqlSettings(DmsEndpointMysqlSettings)
//  .oracleSettings(DmsEndpointOracleSettings)
//  .password(java.lang.String)
//  .pauseReplicationTasks(java.lang.Boolean|IResolvable)
//  .port(java.lang.Number)
//  .postgresSettings(DmsEndpointPostgresSettings)
//  .redisSettings(DmsEndpointRedisSettings)
//  .redshiftSettings(DmsEndpointRedshiftSettings)
//  .region(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerArn(java.lang.String)
//  .serverName(java.lang.String)
//  .serviceAccessRole(java.lang.String)
//  .sslMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsEndpointTimeouts)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName">engineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mysqlSettings">mysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a></code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.pauseReplicationTasks">pauseReplicationTasks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.postgresSettings">postgresSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | postgres_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serviceAccessRole">serviceAccessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#username DmsEndpoint#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodbSettings`<sup>Optional</sup> <a name="mongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongodbSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `mysqlSettings`<sup>Optional</sup> <a name="mysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mysqlSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#mysql_settings DmsEndpoint#mysql_settings}

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.oracleSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#password DmsEndpoint#password}.

---

##### `pauseReplicationTasks`<sup>Optional</sup> <a name="pauseReplicationTasks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.pauseReplicationTasks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `postgresSettings`<sup>Optional</sup> <a name="postgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.postgresSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

postgres_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#postgres_settings DmsEndpoint#postgres_settings}

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#region DmsEndpoint#region}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerAccessRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `serviceAccessRole`<sup>Optional</sup> <a name="serviceAccessRole" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serviceAccessRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#username DmsEndpoint#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">putElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings">putKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings">putMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMysqlSettings">putMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putOracleSettings">putOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings">putPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings">putRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings">putRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">resetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">resetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings">resetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings">resetMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMysqlSettings">resetMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOracleSettings">resetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPauseReplicationTasks">resetPauseReplicationTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPostgresSettings">resetPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings">resetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">resetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole">resetServiceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticsearchSettings` <a name="putElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```java
public void putElasticsearchSettings(DmsEndpointElasticsearchSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```java
public void putKafkaSettings(DmsEndpointKafkaSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `putKinesisSettings` <a name="putKinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```java
public void putKinesisSettings(DmsEndpointKinesisSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `putMongodbSettings` <a name="putMongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings"></a>

```java
public void putMongodbSettings(DmsEndpointMongodbSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `putMysqlSettings` <a name="putMysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMysqlSettings"></a>

```java
public void putMysqlSettings(DmsEndpointMysqlSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMysqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

---

##### `putOracleSettings` <a name="putOracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putOracleSettings"></a>

```java
public void putOracleSettings(DmsEndpointOracleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putOracleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `putPostgresSettings` <a name="putPostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings"></a>

```java
public void putPostgresSettings(DmsEndpointPostgresSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---

##### `putRedisSettings` <a name="putRedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```java
public void putRedisSettings(DmsEndpointRedisSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `putRedshiftSettings` <a name="putRedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```java
public void putRedshiftSettings(DmsEndpointRedshiftSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DmsEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetElasticsearchSettings` <a name="resetElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```java
public void resetElasticsearchSettings()
```

##### `resetExtraConnectionAttributes` <a name="resetExtraConnectionAttributes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```java
public void resetExtraConnectionAttributes()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```java
public void resetKafkaSettings()
```

##### `resetKinesisSettings` <a name="resetKinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```java
public void resetKinesisSettings()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetMongodbSettings` <a name="resetMongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings"></a>

```java
public void resetMongodbSettings()
```

##### `resetMysqlSettings` <a name="resetMysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMysqlSettings"></a>

```java
public void resetMysqlSettings()
```

##### `resetOracleSettings` <a name="resetOracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOracleSettings"></a>

```java
public void resetOracleSettings()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPauseReplicationTasks` <a name="resetPauseReplicationTasks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPauseReplicationTasks"></a>

```java
public void resetPauseReplicationTasks()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPort"></a>

```java
public void resetPort()
```

##### `resetPostgresSettings` <a name="resetPostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPostgresSettings"></a>

```java
public void resetPostgresSettings()
```

##### `resetRedisSettings` <a name="resetRedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```java
public void resetRedisSettings()
```

##### `resetRedshiftSettings` <a name="resetRedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```java
public void resetRedshiftSettings()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn"></a>

```java
public void resetSecretsManagerArn()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetServiceAccessRole` <a name="resetServiceAccessRole" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole"></a>

```java
public void resetServiceAccessRole()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```java
public void resetSslMode()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn">endpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettings">mysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference">DmsEndpointMysqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettings">postgresSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference">DmsEndpointPostgresSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">elasticsearchSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput">engineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">extraConnectionAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">kinesisSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput">mongodbSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettingsInput">mysqlSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput">oracleSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasksInput">pauseReplicationTasksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettingsInput">postgresSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">redisSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">redshiftSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput">serviceAccessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName">engineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasks">pauseReplicationTasks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole">serviceAccessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="elasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```java
public DmsEndpointElasticsearchSettingsOutputReference getElasticsearchSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```java
public java.lang.String getEndpointArn();
```

- *Type:* java.lang.String

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```java
public DmsEndpointKafkaSettingsOutputReference getKafkaSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesisSettings`<sup>Required</sup> <a name="kinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```java
public DmsEndpointKinesisSettingsOutputReference getKinesisSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `mongodbSettings`<sup>Required</sup> <a name="mongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings"></a>

```java
public DmsEndpointMongodbSettingsOutputReference getMongodbSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a>

---

##### `mysqlSettings`<sup>Required</sup> <a name="mysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettings"></a>

```java
public DmsEndpointMysqlSettingsOutputReference getMysqlSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference">DmsEndpointMysqlSettingsOutputReference</a>

---

##### `oracleSettings`<sup>Required</sup> <a name="oracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettings"></a>

```java
public DmsEndpointOracleSettingsOutputReference getOracleSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a>

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettings"></a>

```java
public DmsEndpointPostgresSettingsOutputReference getPostgresSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference">DmsEndpointPostgresSettingsOutputReference</a>

---

##### `redisSettings`<sup>Required</sup> <a name="redisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```java
public DmsEndpointRedisSettingsOutputReference getRedisSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```java
public DmsEndpointRedshiftSettingsOutputReference getRedshiftSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts"></a>

```java
public DmsEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `elasticsearchSettingsInput`<sup>Optional</sup> <a name="elasticsearchSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```java
public DmsEndpointElasticsearchSettings getElasticsearchSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput"></a>

```java
public java.lang.String getEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```java
public java.lang.String getEngineNameInput();
```

- *Type:* java.lang.String

---

##### `extraConnectionAttributesInput`<sup>Optional</sup> <a name="extraConnectionAttributesInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```java
public java.lang.String getExtraConnectionAttributesInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```java
public DmsEndpointKafkaSettings getKafkaSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `kinesisSettingsInput`<sup>Optional</sup> <a name="kinesisSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```java
public DmsEndpointKinesisSettings getKinesisSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `mongodbSettingsInput`<sup>Optional</sup> <a name="mongodbSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput"></a>

```java
public DmsEndpointMongodbSettings getMongodbSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `mysqlSettingsInput`<sup>Optional</sup> <a name="mysqlSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettingsInput"></a>

```java
public DmsEndpointMysqlSettings getMysqlSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

---

##### `oracleSettingsInput`<sup>Optional</sup> <a name="oracleSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput"></a>

```java
public DmsEndpointOracleSettings getOracleSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pauseReplicationTasksInput`<sup>Optional</sup> <a name="pauseReplicationTasksInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasksInput"></a>

```java
public java.lang.Boolean|IResolvable getPauseReplicationTasksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `postgresSettingsInput`<sup>Optional</sup> <a name="postgresSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettingsInput"></a>

```java
public DmsEndpointPostgresSettings getPostgresSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---

##### `redisSettingsInput`<sup>Optional</sup> <a name="redisSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```java
public DmsEndpointRedisSettings getRedisSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `redshiftSettingsInput`<sup>Optional</sup> <a name="redshiftSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```java
public DmsEndpointRedshiftSettings getRedshiftSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput"></a>

```java
public java.lang.String getSecretsManagerArnInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleInput`<sup>Optional</sup> <a name="serviceAccessRoleInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput"></a>

```java
public java.lang.String getServiceAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|DmsEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```java
public java.lang.String getExtraConnectionAttributes();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `pauseReplicationTasks`<sup>Required</sup> <a name="pauseReplicationTasks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasks"></a>

```java
public java.lang.Boolean|IResolvable getPauseReplicationTasks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `serviceAccessRole`<sup>Required</sup> <a name="serviceAccessRole" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole"></a>

```java
public java.lang.String getServiceAccessRole();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointConfig;

DmsEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .endpointType(java.lang.String)
    .engineName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .elasticsearchSettings(DmsEndpointElasticsearchSettings)
//  .extraConnectionAttributes(java.lang.String)
//  .id(java.lang.String)
//  .kafkaSettings(DmsEndpointKafkaSettings)
//  .kinesisSettings(DmsEndpointKinesisSettings)
//  .kmsKeyArn(java.lang.String)
//  .mongodbSettings(DmsEndpointMongodbSettings)
//  .mysqlSettings(DmsEndpointMysqlSettings)
//  .oracleSettings(DmsEndpointOracleSettings)
//  .password(java.lang.String)
//  .pauseReplicationTasks(java.lang.Boolean|IResolvable)
//  .port(java.lang.Number)
//  .postgresSettings(DmsEndpointPostgresSettings)
//  .redisSettings(DmsEndpointRedisSettings)
//  .redshiftSettings(DmsEndpointRedshiftSettings)
//  .region(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerArn(java.lang.String)
//  .serverName(java.lang.String)
//  .serviceAccessRole(java.lang.String)
//  .sslMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsEndpointTimeouts)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName">engineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mysqlSettings">mysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a></code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.pauseReplicationTasks">pauseReplicationTasks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.postgresSettings">postgresSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | postgres_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole">serviceAccessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#username DmsEndpoint#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```java
public DmsEndpointElasticsearchSettings getElasticsearchSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```java
public java.lang.String getExtraConnectionAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```java
public DmsEndpointKafkaSettings getKafkaSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```java
public DmsEndpointKinesisSettings getKinesisSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodbSettings`<sup>Optional</sup> <a name="mongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings"></a>

```java
public DmsEndpointMongodbSettings getMongodbSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `mysqlSettings`<sup>Optional</sup> <a name="mysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mysqlSettings"></a>

```java
public DmsEndpointMysqlSettings getMysqlSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#mysql_settings DmsEndpoint#mysql_settings}

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.oracleSettings"></a>

```java
public DmsEndpointOracleSettings getOracleSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#password DmsEndpoint#password}.

---

##### `pauseReplicationTasks`<sup>Optional</sup> <a name="pauseReplicationTasks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.pauseReplicationTasks"></a>

```java
public java.lang.Boolean|IResolvable getPauseReplicationTasks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `postgresSettings`<sup>Optional</sup> <a name="postgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.postgresSettings"></a>

```java
public DmsEndpointPostgresSettings getPostgresSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

postgres_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#postgres_settings DmsEndpoint#postgres_settings}

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```java
public DmsEndpointRedisSettings getRedisSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```java
public DmsEndpointRedshiftSettings getRedshiftSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#region DmsEndpoint#region}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `serviceAccessRole`<sup>Optional</sup> <a name="serviceAccessRole" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole"></a>

```java
public java.lang.String getServiceAccessRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts"></a>

```java
public DmsEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#username DmsEndpoint#username}.

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointElasticsearchSettings;

DmsEndpointElasticsearchSettings.builder()
    .endpointUri(java.lang.String)
    .serviceAccessRoleArn(java.lang.String)
//  .errorRetryDuration(java.lang.Number)
//  .fullLoadErrorPercentage(java.lang.Number)
//  .useNewMappingType(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.useNewMappingType">useNewMappingType</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}. |

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

##### `fullLoadErrorPercentage`<sup>Optional</sup> <a name="fullLoadErrorPercentage" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```java
public java.lang.Number getFullLoadErrorPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

##### `useNewMappingType`<sup>Optional</sup> <a name="useNewMappingType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.useNewMappingType"></a>

```java
public java.lang.Boolean|IResolvable getUseNewMappingType();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}.

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointKafkaSettings;

DmsEndpointKafkaSettings.builder()
    .broker(java.lang.String)
//  .includeControlDetails(java.lang.Boolean|IResolvable)
//  .includeNullAndEmpty(java.lang.Boolean|IResolvable)
//  .includePartitionValue(java.lang.Boolean|IResolvable)
//  .includeTableAlterOperations(java.lang.Boolean|IResolvable)
//  .includeTransactionDetails(java.lang.Boolean|IResolvable)
//  .messageFormat(java.lang.String)
//  .messageMaxBytes(java.lang.Number)
//  .noHexPrefix(java.lang.Boolean|IResolvable)
//  .partitionIncludeSchemaTable(java.lang.Boolean|IResolvable)
//  .saslMechanism(java.lang.String)
//  .saslPassword(java.lang.String)
//  .saslUsername(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .sslCaCertificateArn(java.lang.String)
//  .sslClientCertificateArn(java.lang.String)
//  .sslClientKeyArn(java.lang.String)
//  .sslClientKeyPassword(java.lang.String)
//  .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">broker</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslMechanism">saslMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">saslPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername">saslUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">topic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}. |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```java
public java.lang.String getBroker();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}.

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `saslMechanism`<sup>Optional</sup> <a name="saslMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslMechanism"></a>

```java
public java.lang.String getSaslMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}.

---

##### `saslPassword`<sup>Optional</sup> <a name="saslPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```java
public java.lang.String getSaslPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

##### `saslUsername`<sup>Optional</sup> <a name="saslUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername"></a>

```java
public java.lang.String getSaslUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `sslClientCertificateArn`<sup>Optional</sup> <a name="sslClientCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```java
public java.lang.String getSslClientCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

##### `sslClientKeyArn`<sup>Optional</sup> <a name="sslClientKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```java
public java.lang.String getSslClientKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

##### `sslClientKeyPassword`<sup>Optional</sup> <a name="sslClientKeyPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```java
public java.lang.String getSslClientKeyPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}.

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointKinesisSettings;

DmsEndpointKinesisSettings.builder()
//  .includeControlDetails(java.lang.Boolean|IResolvable)
//  .includeNullAndEmpty(java.lang.Boolean|IResolvable)
//  .includePartitionValue(java.lang.Boolean|IResolvable)
//  .includeTableAlterOperations(java.lang.Boolean|IResolvable)
//  .includeTransactionDetails(java.lang.Boolean|IResolvable)
//  .messageFormat(java.lang.String)
//  .partitionIncludeSchemaTable(java.lang.Boolean|IResolvable)
//  .serviceAccessRoleArn(java.lang.String)
//  .streamArn(java.lang.String)
//  .useLargeIntegerValue(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.useLargeIntegerValue">useLargeIntegerValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_large_integer_value DmsEndpoint#use_large_integer_value}. |

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

##### `useLargeIntegerValue`<sup>Optional</sup> <a name="useLargeIntegerValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.useLargeIntegerValue"></a>

```java
public java.lang.Boolean|IResolvable getUseLargeIntegerValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_large_integer_value DmsEndpoint#use_large_integer_value}.

---

### DmsEndpointMongodbSettings <a name="DmsEndpointMongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointMongodbSettings;

DmsEndpointMongodbSettings.builder()
//  .authMechanism(java.lang.String)
//  .authSource(java.lang.String)
//  .authType(java.lang.String)
//  .docsToInvestigate(java.lang.String)
//  .extractDocId(java.lang.String)
//  .nestingLevel(java.lang.String)
//  .useUpdateLookup(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource">authSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId">extractDocId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.useUpdateLookup">useUpdateLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_update_lookup DmsEndpoint#use_update_lookup}. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate"></a>

```java
public java.lang.String getDocsToInvestigate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId"></a>

```java
public java.lang.String getExtractDocId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

##### `useUpdateLookup`<sup>Optional</sup> <a name="useUpdateLookup" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.useUpdateLookup"></a>

```java
public java.lang.Boolean|IResolvable getUseUpdateLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_update_lookup DmsEndpoint#use_update_lookup}.

---

### DmsEndpointMysqlSettings <a name="DmsEndpointMysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointMysqlSettings;

DmsEndpointMysqlSettings.builder()
//  .afterConnectScript(java.lang.String)
//  .authenticationMethod(java.lang.String)
//  .cleanSourceMetadataOnMismatch(java.lang.Boolean|IResolvable)
//  .eventsPollInterval(java.lang.Number)
//  .executeTimeout(java.lang.Number)
//  .maxFileSize(java.lang.Number)
//  .parallelLoadThreads(java.lang.Number)
//  .serverTimezone(java.lang.String)
//  .serviceAccessRoleArn(java.lang.String)
//  .targetDbType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.targetDbType">targetDbType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}.

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}.

---

##### `cleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}.

---

##### `eventsPollInterval`<sup>Optional</sup> <a name="eventsPollInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}.

---

##### `executeTimeout`<sup>Optional</sup> <a name="executeTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}.

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `parallelLoadThreads`<sup>Optional</sup> <a name="parallelLoadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}.

---

##### `serverTimezone`<sup>Optional</sup> <a name="serverTimezone" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `targetDbType`<sup>Optional</sup> <a name="targetDbType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.targetDbType"></a>

```java
public java.lang.String getTargetDbType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}.

---

### DmsEndpointOracleSettings <a name="DmsEndpointOracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointOracleSettings;

DmsEndpointOracleSettings.builder()
//  .accessAlternateDirectly(java.lang.Boolean|IResolvable)
//  .additionalArchivedLogDestId(java.lang.Number)
//  .addSupplementalLogging(java.lang.Boolean|IResolvable)
//  .allowSelectedNestedTables(java.lang.Boolean|IResolvable)
//  .archivedLogDestId(java.lang.Number)
//  .archivedLogsOnly(java.lang.Boolean|IResolvable)
//  .asmPassword(java.lang.String)
//  .asmServer(java.lang.String)
//  .asmUser(java.lang.String)
//  .authenticationMethod(java.lang.String)
//  .charLengthSemantics(java.lang.String)
//  .convertTimestampWithZoneToUtc(java.lang.Boolean|IResolvable)
//  .directPathNoLog(java.lang.Boolean|IResolvable)
//  .directPathParallelLoad(java.lang.Boolean|IResolvable)
//  .enableHomogenousTablespace(java.lang.Boolean|IResolvable)
//  .extraArchivedLogDestIds(java.util.List<java.lang.Number>)
//  .failTaskOnLobTruncation(java.lang.Boolean|IResolvable)
//  .numberDatatypeScale(java.lang.Number)
//  .openTransactionWindow(java.lang.Number)
//  .oraclePathPrefix(java.lang.String)
//  .parallelAsmReadThreads(java.lang.Number)
//  .readAheadBlocks(java.lang.Number)
//  .readTableSpaceName(java.lang.Boolean|IResolvable)
//  .replacePathPrefix(java.lang.Boolean|IResolvable)
//  .retryInterval(java.lang.Number)
//  .secretsManagerOracleAsmAccessRoleArn(java.lang.String)
//  .secretsManagerOracleAsmSecretId(java.lang.String)
//  .securityDbEncryption(java.lang.String)
//  .securityDbEncryptionName(java.lang.String)
//  .spatialDataOptionToGeoJsonFunctionName(java.lang.String)
//  .standbyDelayTime(java.lang.Number)
//  .trimSpaceInChar(java.lang.Boolean|IResolvable)
//  .useAlternateFolderForOnline(java.lang.Boolean|IResolvable)
//  .useBfile(java.lang.Boolean|IResolvable)
//  .useDirectPathFullLoad(java.lang.Boolean|IResolvable)
//  .useLogminerReader(java.lang.Boolean|IResolvable)
//  .usePathPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly">accessAlternateDirectly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId">additionalArchivedLogDestId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging">addSupplementalLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectedNestedTables">allowSelectedNestedTables</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#allow_selected_nested_tables DmsEndpoint#allow_selected_nested_tables}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId">archivedLogDestId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly">archivedLogsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword">asmPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer">asmServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser">asmUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics">charLengthSemantics</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.convertTimestampWithZoneToUtc">convertTimestampWithZoneToUtc</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#convert_timestamp_with_zone_to_utc DmsEndpoint#convert_timestamp_with_zone_to_utc}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog">directPathNoLog</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad">directPathParallelLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace">enableHomogenousTablespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds">extraArchivedLogDestIds</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.failTaskOnLobTruncation">failTaskOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#fail_task_on_lob_truncation DmsEndpoint#fail_task_on_lob_truncation}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale">numberDatatypeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.openTransactionWindow">openTransactionWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#open_transaction_window DmsEndpoint#open_transaction_window}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix">oraclePathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads">parallelAsmReadThreads</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks">readAheadBlocks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName">readTableSpaceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix">replacePathPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption">securityDbEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName">securityDbEncryptionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName">spatialDataOptionToGeoJsonFunctionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime">standbyDelayTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.trimSpaceInChar">trimSpaceInChar</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline">useAlternateFolderForOnline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useBfile">useBfile</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_bfile DmsEndpoint#use_bfile}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad">useDirectPathFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader">useLogminerReader</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix">usePathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}. |

---

##### `accessAlternateDirectly`<sup>Optional</sup> <a name="accessAlternateDirectly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly"></a>

```java
public java.lang.Boolean|IResolvable getAccessAlternateDirectly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}.

---

##### `additionalArchivedLogDestId`<sup>Optional</sup> <a name="additionalArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

```java
public java.lang.Number getAdditionalArchivedLogDestId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}.

---

##### `addSupplementalLogging`<sup>Optional</sup> <a name="addSupplementalLogging" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging"></a>

```java
public java.lang.Boolean|IResolvable getAddSupplementalLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}.

---

##### `allowSelectedNestedTables`<sup>Optional</sup> <a name="allowSelectedNestedTables" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectedNestedTables"></a>

```java
public java.lang.Boolean|IResolvable getAllowSelectedNestedTables();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#allow_selected_nested_tables DmsEndpoint#allow_selected_nested_tables}.

---

##### `archivedLogDestId`<sup>Optional</sup> <a name="archivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId"></a>

```java
public java.lang.Number getArchivedLogDestId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}.

---

##### `archivedLogsOnly`<sup>Optional</sup> <a name="archivedLogsOnly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly"></a>

```java
public java.lang.Boolean|IResolvable getArchivedLogsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}.

---

##### `asmPassword`<sup>Optional</sup> <a name="asmPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword"></a>

```java
public java.lang.String getAsmPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}.

---

##### `asmServer`<sup>Optional</sup> <a name="asmServer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer"></a>

```java
public java.lang.String getAsmServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}.

---

##### `asmUser`<sup>Optional</sup> <a name="asmUser" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser"></a>

```java
public java.lang.String getAsmUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}.

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}.

---

##### `charLengthSemantics`<sup>Optional</sup> <a name="charLengthSemantics" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics"></a>

```java
public java.lang.String getCharLengthSemantics();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}.

---

##### `convertTimestampWithZoneToUtc`<sup>Optional</sup> <a name="convertTimestampWithZoneToUtc" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.convertTimestampWithZoneToUtc"></a>

```java
public java.lang.Boolean|IResolvable getConvertTimestampWithZoneToUtc();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#convert_timestamp_with_zone_to_utc DmsEndpoint#convert_timestamp_with_zone_to_utc}.

---

##### `directPathNoLog`<sup>Optional</sup> <a name="directPathNoLog" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathNoLog();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}.

---

##### `directPathParallelLoad`<sup>Optional</sup> <a name="directPathParallelLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathParallelLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}.

---

##### `enableHomogenousTablespace`<sup>Optional</sup> <a name="enableHomogenousTablespace" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace"></a>

```java
public java.lang.Boolean|IResolvable getEnableHomogenousTablespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}.

---

##### `extraArchivedLogDestIds`<sup>Optional</sup> <a name="extraArchivedLogDestIds" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds"></a>

```java
public java.util.List<java.lang.Number> getExtraArchivedLogDestIds();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}.

---

##### `failTaskOnLobTruncation`<sup>Optional</sup> <a name="failTaskOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.failTaskOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTaskOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#fail_task_on_lob_truncation DmsEndpoint#fail_task_on_lob_truncation}.

---

##### `numberDatatypeScale`<sup>Optional</sup> <a name="numberDatatypeScale" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale"></a>

```java
public java.lang.Number getNumberDatatypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}.

---

##### `openTransactionWindow`<sup>Optional</sup> <a name="openTransactionWindow" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.openTransactionWindow"></a>

```java
public java.lang.Number getOpenTransactionWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#open_transaction_window DmsEndpoint#open_transaction_window}.

---

##### `oraclePathPrefix`<sup>Optional</sup> <a name="oraclePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix"></a>

```java
public java.lang.String getOraclePathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}.

---

##### `parallelAsmReadThreads`<sup>Optional</sup> <a name="parallelAsmReadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads"></a>

```java
public java.lang.Number getParallelAsmReadThreads();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}.

---

##### `readAheadBlocks`<sup>Optional</sup> <a name="readAheadBlocks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks"></a>

```java
public java.lang.Number getReadAheadBlocks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}.

---

##### `readTableSpaceName`<sup>Optional</sup> <a name="readTableSpaceName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName"></a>

```java
public java.lang.Boolean|IResolvable getReadTableSpaceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}.

---

##### `replacePathPrefix`<sup>Optional</sup> <a name="replacePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix"></a>

```java
public java.lang.Boolean|IResolvable getReplacePathPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}.

---

##### `retryInterval`<sup>Optional</sup> <a name="retryInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval"></a>

```java
public java.lang.Number getRetryInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}.

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}.

---

##### `secretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}.

---

##### `securityDbEncryption`<sup>Optional</sup> <a name="securityDbEncryption" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption"></a>

```java
public java.lang.String getSecurityDbEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}.

---

##### `securityDbEncryptionName`<sup>Optional</sup> <a name="securityDbEncryptionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName"></a>

```java
public java.lang.String getSecurityDbEncryptionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}.

---

##### `spatialDataOptionToGeoJsonFunctionName`<sup>Optional</sup> <a name="spatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName"></a>

```java
public java.lang.String getSpatialDataOptionToGeoJsonFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}.

---

##### `standbyDelayTime`<sup>Optional</sup> <a name="standbyDelayTime" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime"></a>

```java
public java.lang.Number getStandbyDelayTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}.

---

##### `trimSpaceInChar`<sup>Optional</sup> <a name="trimSpaceInChar" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.trimSpaceInChar"></a>

```java
public java.lang.Boolean|IResolvable getTrimSpaceInChar();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}.

---

##### `useAlternateFolderForOnline`<sup>Optional</sup> <a name="useAlternateFolderForOnline" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

```java
public java.lang.Boolean|IResolvable getUseAlternateFolderForOnline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}.

---

##### `useBfile`<sup>Optional</sup> <a name="useBfile" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useBfile"></a>

```java
public java.lang.Boolean|IResolvable getUseBfile();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_bfile DmsEndpoint#use_bfile}.

---

##### `useDirectPathFullLoad`<sup>Optional</sup> <a name="useDirectPathFullLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getUseDirectPathFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}.

---

##### `useLogminerReader`<sup>Optional</sup> <a name="useLogminerReader" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader"></a>

```java
public java.lang.Boolean|IResolvable getUseLogminerReader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}.

---

##### `usePathPrefix`<sup>Optional</sup> <a name="usePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix"></a>

```java
public java.lang.String getUsePathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}.

---

### DmsEndpointPostgresSettings <a name="DmsEndpointPostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointPostgresSettings;

DmsEndpointPostgresSettings.builder()
//  .afterConnectScript(java.lang.String)
//  .authenticationMethod(java.lang.String)
//  .babelfishDatabaseName(java.lang.String)
//  .captureDdls(java.lang.Boolean|IResolvable)
//  .databaseMode(java.lang.String)
//  .ddlArtifactsSchema(java.lang.String)
//  .executeTimeout(java.lang.Number)
//  .failTasksOnLobTruncation(java.lang.Boolean|IResolvable)
//  .heartbeatEnable(java.lang.Boolean|IResolvable)
//  .heartbeatFrequency(java.lang.Number)
//  .heartbeatSchema(java.lang.String)
//  .mapBooleanAsBoolean(java.lang.Boolean|IResolvable)
//  .mapJsonbAsClob(java.lang.Boolean|IResolvable)
//  .mapLongVarcharAs(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .pluginName(java.lang.String)
//  .serviceAccessRoleArn(java.lang.String)
//  .slotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.captureDdls">captureDdls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.databaseMode">databaseMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatEnable">heartbeatEnable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatSchema">heartbeatSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapJsonbAsClob">mapJsonbAsClob</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapLongVarcharAs">mapLongVarcharAs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.slotName">slotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}.

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}.

---

##### `babelfishDatabaseName`<sup>Optional</sup> <a name="babelfishDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.babelfishDatabaseName"></a>

```java
public java.lang.String getBabelfishDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}.

---

##### `captureDdls`<sup>Optional</sup> <a name="captureDdls" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.captureDdls"></a>

```java
public java.lang.Boolean|IResolvable getCaptureDdls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}.

---

##### `databaseMode`<sup>Optional</sup> <a name="databaseMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.databaseMode"></a>

```java
public java.lang.String getDatabaseMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}.

---

##### `ddlArtifactsSchema`<sup>Optional</sup> <a name="ddlArtifactsSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.ddlArtifactsSchema"></a>

```java
public java.lang.String getDdlArtifactsSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}.

---

##### `executeTimeout`<sup>Optional</sup> <a name="executeTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}.

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}.

---

##### `heartbeatEnable`<sup>Optional</sup> <a name="heartbeatEnable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatEnable"></a>

```java
public java.lang.Boolean|IResolvable getHeartbeatEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}.

---

##### `heartbeatFrequency`<sup>Optional</sup> <a name="heartbeatFrequency" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatFrequency"></a>

```java
public java.lang.Number getHeartbeatFrequency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}.

---

##### `heartbeatSchema`<sup>Optional</sup> <a name="heartbeatSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatSchema"></a>

```java
public java.lang.String getHeartbeatSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}.

---

##### `mapBooleanAsBoolean`<sup>Optional</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}.

---

##### `mapJsonbAsClob`<sup>Optional</sup> <a name="mapJsonbAsClob" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapJsonbAsClob"></a>

```java
public java.lang.Boolean|IResolvable getMapJsonbAsClob();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}.

---

##### `mapLongVarcharAs`<sup>Optional</sup> <a name="mapLongVarcharAs" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapLongVarcharAs"></a>

```java
public java.lang.String getMapLongVarcharAs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}.

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `slotName`<sup>Optional</sup> <a name="slotName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}.

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointRedisSettings;

DmsEndpointRedisSettings.builder()
    .authType(java.lang.String)
    .port(java.lang.Number)
    .serverName(java.lang.String)
//  .authPassword(java.lang.String)
//  .authUserName(java.lang.String)
//  .sslCaCertificateArn(java.lang.String)
//  .sslSecurityProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `authPassword`<sup>Optional</sup> <a name="authPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}.

---

##### `authUserName`<sup>Optional</sup> <a name="authUserName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}.

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `sslSecurityProtocol`<sup>Optional</sup> <a name="sslSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```java
public java.lang.String getSslSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}.

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointRedshiftSettings;

DmsEndpointRedshiftSettings.builder()
//  .bucketFolder(java.lang.String)
//  .bucketName(java.lang.String)
//  .encryptionMode(java.lang.String)
//  .serverSideEncryptionKmsKeyId(java.lang.String)
//  .serviceAccessRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

### DmsEndpointTimeouts <a name="DmsEndpointTimeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointTimeouts;

DmsEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#create DmsEndpoint#create}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#create DmsEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointElasticsearchSettingsOutputReference;

new DmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">resetFullLoadErrorPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetUseNewMappingType">resetUseNewMappingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```java
public void resetErrorRetryDuration()
```

##### `resetFullLoadErrorPercentage` <a name="resetFullLoadErrorPercentage" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```java
public void resetFullLoadErrorPercentage()
```

##### `resetUseNewMappingType` <a name="resetUseNewMappingType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetUseNewMappingType"></a>

```java
public void resetUseNewMappingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">endpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">fullLoadErrorPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingTypeInput">useNewMappingTypeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingType">useNewMappingType</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```java
public java.lang.String getEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```java
public java.lang.Number getErrorRetryDurationInput();
```

- *Type:* java.lang.Number

---

##### `fullLoadErrorPercentageInput`<sup>Optional</sup> <a name="fullLoadErrorPercentageInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```java
public java.lang.Number getFullLoadErrorPercentageInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `useNewMappingTypeInput`<sup>Optional</sup> <a name="useNewMappingTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingTypeInput"></a>

```java
public java.lang.Boolean|IResolvable getUseNewMappingTypeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="fullLoadErrorPercentage" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```java
public java.lang.Number getFullLoadErrorPercentage();
```

- *Type:* java.lang.Number

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `useNewMappingType`<sup>Required</sup> <a name="useNewMappingType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingType"></a>

```java
public java.lang.Boolean|IResolvable getUseNewMappingType();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointElasticsearchSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointKafkaSettingsOutputReference;

new DmsEndpointKafkaSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslMechanism">resetSaslMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">resetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername">resetSaslUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">resetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">resetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">resetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```java
public void resetIncludeControlDetails()
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```java
public void resetIncludeNullAndEmpty()
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```java
public void resetIncludePartitionValue()
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```java
public void resetIncludeTableAlterOperations()
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```java
public void resetIncludeTransactionDetails()
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```java
public void resetMessageFormat()
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```java
public void resetMessageMaxBytes()
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```java
public void resetNoHexPrefix()
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```java
public void resetPartitionIncludeSchemaTable()
```

##### `resetSaslMechanism` <a name="resetSaslMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslMechanism"></a>

```java
public void resetSaslMechanism()
```

##### `resetSaslPassword` <a name="resetSaslPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```java
public void resetSaslPassword()
```

##### `resetSaslUsername` <a name="resetSaslUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername"></a>

```java
public void resetSaslUsername()
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```java
public void resetSecurityProtocol()
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```java
public void resetSslCaCertificateArn()
```

##### `resetSslClientCertificateArn` <a name="resetSslClientCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```java
public void resetSslClientCertificateArn()
```

##### `resetSslClientKeyArn` <a name="resetSslClientKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```java
public void resetSslClientKeyArn()
```

##### `resetSslClientKeyPassword` <a name="resetSslClientKeyPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```java
public void resetSslClientKeyPassword()
```

##### `resetTopic` <a name="resetTopic" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```java
public void resetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">brokerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanismInput">saslMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">saslPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput">saslUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">sslClientCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">sslClientKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">sslClientKeyPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanism">saslMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">saslPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername">saslUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `brokerInput`<sup>Optional</sup> <a name="brokerInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```java
public java.lang.String getBrokerInput();
```

- *Type:* java.lang.String

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmptyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```java
public java.lang.Number getMessageMaxBytesInput();
```

- *Type:* java.lang.Number

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefixInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `saslMechanismInput`<sup>Optional</sup> <a name="saslMechanismInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanismInput"></a>

```java
public java.lang.String getSaslMechanismInput();
```

- *Type:* java.lang.String

---

##### `saslPasswordInput`<sup>Optional</sup> <a name="saslPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```java
public java.lang.String getSaslPasswordInput();
```

- *Type:* java.lang.String

---

##### `saslUsernameInput`<sup>Optional</sup> <a name="saslUsernameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput"></a>

```java
public java.lang.String getSaslUsernameInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```java
public java.lang.String getSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```java
public java.lang.String getSslCaCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientCertificateArnInput`<sup>Optional</sup> <a name="sslClientCertificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```java
public java.lang.String getSslClientCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeyArnInput`<sup>Optional</sup> <a name="sslClientKeyArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```java
public java.lang.String getSslClientKeyArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeyPasswordInput`<sup>Optional</sup> <a name="sslClientKeyPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```java
public java.lang.String getSslClientKeyPasswordInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```java
public java.lang.String getBroker();
```

- *Type:* java.lang.String

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `saslMechanism`<sup>Required</sup> <a name="saslMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanism"></a>

```java
public java.lang.String getSaslMechanism();
```

- *Type:* java.lang.String

---

##### `saslPassword`<sup>Required</sup> <a name="saslPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```java
public java.lang.String getSaslPassword();
```

- *Type:* java.lang.String

---

##### `saslUsername`<sup>Required</sup> <a name="saslUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```java
public java.lang.String getSaslUsername();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientCertificateArn`<sup>Required</sup> <a name="sslClientCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```java
public java.lang.String getSslClientCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyArn`<sup>Required</sup> <a name="sslClientKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```java
public java.lang.String getSslClientKeyArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyPassword`<sup>Required</sup> <a name="sslClientKeyPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```java
public java.lang.String getSslClientKeyPassword();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointKafkaSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointKinesisSettingsOutputReference;

new DmsEndpointKinesisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetUseLargeIntegerValue">resetUseLargeIntegerValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```java
public void resetIncludeControlDetails()
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```java
public void resetIncludeNullAndEmpty()
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```java
public void resetIncludePartitionValue()
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```java
public void resetIncludeTableAlterOperations()
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```java
public void resetIncludeTransactionDetails()
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```java
public void resetMessageFormat()
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```java
public void resetPartitionIncludeSchemaTable()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```java
public void resetStreamArn()
```

##### `resetUseLargeIntegerValue` <a name="resetUseLargeIntegerValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetUseLargeIntegerValue"></a>

```java
public void resetUseLargeIntegerValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValueInput">useLargeIntegerValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValue">useLargeIntegerValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmptyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `useLargeIntegerValueInput`<sup>Optional</sup> <a name="useLargeIntegerValueInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValueInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLargeIntegerValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `useLargeIntegerValue`<sup>Required</sup> <a name="useLargeIntegerValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValue"></a>

```java
public java.lang.Boolean|IResolvable getUseLargeIntegerValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointKinesisSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMongodbSettingsOutputReference <a name="DmsEndpointMongodbSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointMongodbSettingsOutputReference;

new DmsEndpointMongodbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetUseUpdateLookup">resetUseUpdateLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism"></a>

```java
public void resetAuthMechanism()
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource"></a>

```java
public void resetAuthSource()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate"></a>

```java
public void resetDocsToInvestigate()
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId"></a>

```java
public void resetExtractDocId()
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel"></a>

```java
public void resetNestingLevel()
```

##### `resetUseUpdateLookup` <a name="resetUseUpdateLookup" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetUseUpdateLookup"></a>

```java
public void resetUseUpdateLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookupInput">useUpdateLookupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource">authSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookup">useUpdateLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput"></a>

```java
public java.lang.String getAuthMechanismInput();
```

- *Type:* java.lang.String

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput"></a>

```java
public java.lang.String getAuthSourceInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput"></a>

```java
public java.lang.String getDocsToInvestigateInput();
```

- *Type:* java.lang.String

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput"></a>

```java
public java.lang.String getExtractDocIdInput();
```

- *Type:* java.lang.String

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput"></a>

```java
public java.lang.String getNestingLevelInput();
```

- *Type:* java.lang.String

---

##### `useUpdateLookupInput`<sup>Optional</sup> <a name="useUpdateLookupInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookupInput"></a>

```java
public java.lang.Boolean|IResolvable getUseUpdateLookupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```java
public java.lang.String getDocsToInvestigate();
```

- *Type:* java.lang.String

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```java
public java.lang.String getExtractDocId();
```

- *Type:* java.lang.String

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

---

##### `useUpdateLookup`<sup>Required</sup> <a name="useUpdateLookup" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookup"></a>

```java
public java.lang.Boolean|IResolvable getUseUpdateLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointMongodbSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---


### DmsEndpointMysqlSettingsOutputReference <a name="DmsEndpointMysqlSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointMysqlSettingsOutputReference;

new DmsEndpointMysqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">resetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetEventsPollInterval">resetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetExecuteTimeout">resetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetParallelLoadThreads">resetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServerTimezone">resetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetTargetDbType">resetTargetDbType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAfterConnectScript"></a>

```java
public void resetAfterConnectScript()
```

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAuthenticationMethod"></a>

```java
public void resetAuthenticationMethod()
```

##### `resetCleanSourceMetadataOnMismatch` <a name="resetCleanSourceMetadataOnMismatch" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```java
public void resetCleanSourceMetadataOnMismatch()
```

##### `resetEventsPollInterval` <a name="resetEventsPollInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetEventsPollInterval"></a>

```java
public void resetEventsPollInterval()
```

##### `resetExecuteTimeout` <a name="resetExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetExecuteTimeout"></a>

```java
public void resetExecuteTimeout()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetParallelLoadThreads` <a name="resetParallelLoadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetParallelLoadThreads"></a>

```java
public void resetParallelLoadThreads()
```

##### `resetServerTimezone` <a name="resetServerTimezone" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServerTimezone"></a>

```java
public void resetServerTimezone()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```

##### `resetTargetDbType` <a name="resetTargetDbType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetTargetDbType"></a>

```java
public void resetTargetDbType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">cleanSourceMetadataOnMismatchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollIntervalInput">eventsPollIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeoutInput">executeTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreadsInput">parallelLoadThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezoneInput">serverTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbTypeInput">targetDbTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbType">targetDbType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```java
public java.lang.String getAfterConnectScriptInput();
```

- *Type:* java.lang.String

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethodInput"></a>

```java
public java.lang.String getAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatchInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventsPollIntervalInput`<sup>Optional</sup> <a name="eventsPollIntervalInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```java
public java.lang.Number getEventsPollIntervalInput();
```

- *Type:* java.lang.Number

---

##### `executeTimeoutInput`<sup>Optional</sup> <a name="executeTimeoutInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeoutInput"></a>

```java
public java.lang.Number getExecuteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreadsInput`<sup>Optional</sup> <a name="parallelLoadThreadsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```java
public java.lang.Number getParallelLoadThreadsInput();
```

- *Type:* java.lang.Number

---

##### `serverTimezoneInput`<sup>Optional</sup> <a name="serverTimezoneInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezoneInput"></a>

```java
public java.lang.String getServerTimezoneInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `targetDbTypeInput`<sup>Optional</sup> <a name="targetDbTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbTypeInput"></a>

```java
public java.lang.String getTargetDbTypeInput();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventsPollInterval`<sup>Required</sup> <a name="eventsPollInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

---

##### `executeTimeout`<sup>Required</sup> <a name="executeTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="parallelLoadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

---

##### `serverTimezone`<sup>Required</sup> <a name="serverTimezone" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `targetDbType`<sup>Required</sup> <a name="targetDbType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbType"></a>

```java
public java.lang.String getTargetDbType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointMysqlSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

---


### DmsEndpointOracleSettingsOutputReference <a name="DmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointOracleSettingsOutputReference;

new DmsEndpointOracleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly">resetAccessAlternateDirectly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId">resetAdditionalArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging">resetAddSupplementalLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectedNestedTables">resetAllowSelectedNestedTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId">resetArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly">resetArchivedLogsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword">resetAsmPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer">resetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser">resetAsmUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics">resetCharLengthSemantics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetConvertTimestampWithZoneToUtc">resetConvertTimestampWithZoneToUtc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog">resetDirectPathNoLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad">resetDirectPathParallelLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace">resetEnableHomogenousTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds">resetExtraArchivedLogDestIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTaskOnLobTruncation">resetFailTaskOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale">resetNumberDatatypeScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOpenTransactionWindow">resetOpenTransactionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix">resetOraclePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads">resetParallelAsmReadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks">resetReadAheadBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName">resetReadTableSpaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix">resetReplacePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval">resetRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">resetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">resetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption">resetSecurityDbEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName">resetSecurityDbEncryptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName">resetSpatialDataOptionToGeoJsonFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime">resetStandbyDelayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetTrimSpaceInChar">resetTrimSpaceInChar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline">resetUseAlternateFolderForOnline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBfile">resetUseBfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad">resetUseDirectPathFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader">resetUseLogminerReader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix">resetUsePathPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessAlternateDirectly` <a name="resetAccessAlternateDirectly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly"></a>

```java
public void resetAccessAlternateDirectly()
```

##### `resetAdditionalArchivedLogDestId` <a name="resetAdditionalArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId"></a>

```java
public void resetAdditionalArchivedLogDestId()
```

##### `resetAddSupplementalLogging` <a name="resetAddSupplementalLogging" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging"></a>

```java
public void resetAddSupplementalLogging()
```

##### `resetAllowSelectedNestedTables` <a name="resetAllowSelectedNestedTables" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectedNestedTables"></a>

```java
public void resetAllowSelectedNestedTables()
```

##### `resetArchivedLogDestId` <a name="resetArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId"></a>

```java
public void resetArchivedLogDestId()
```

##### `resetArchivedLogsOnly` <a name="resetArchivedLogsOnly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly"></a>

```java
public void resetArchivedLogsOnly()
```

##### `resetAsmPassword` <a name="resetAsmPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword"></a>

```java
public void resetAsmPassword()
```

##### `resetAsmServer` <a name="resetAsmServer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer"></a>

```java
public void resetAsmServer()
```

##### `resetAsmUser` <a name="resetAsmUser" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser"></a>

```java
public void resetAsmUser()
```

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAuthenticationMethod"></a>

```java
public void resetAuthenticationMethod()
```

##### `resetCharLengthSemantics` <a name="resetCharLengthSemantics" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics"></a>

```java
public void resetCharLengthSemantics()
```

##### `resetConvertTimestampWithZoneToUtc` <a name="resetConvertTimestampWithZoneToUtc" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetConvertTimestampWithZoneToUtc"></a>

```java
public void resetConvertTimestampWithZoneToUtc()
```

##### `resetDirectPathNoLog` <a name="resetDirectPathNoLog" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog"></a>

```java
public void resetDirectPathNoLog()
```

##### `resetDirectPathParallelLoad` <a name="resetDirectPathParallelLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad"></a>

```java
public void resetDirectPathParallelLoad()
```

##### `resetEnableHomogenousTablespace` <a name="resetEnableHomogenousTablespace" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace"></a>

```java
public void resetEnableHomogenousTablespace()
```

##### `resetExtraArchivedLogDestIds` <a name="resetExtraArchivedLogDestIds" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds"></a>

```java
public void resetExtraArchivedLogDestIds()
```

##### `resetFailTaskOnLobTruncation` <a name="resetFailTaskOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTaskOnLobTruncation"></a>

```java
public void resetFailTaskOnLobTruncation()
```

##### `resetNumberDatatypeScale` <a name="resetNumberDatatypeScale" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale"></a>

```java
public void resetNumberDatatypeScale()
```

##### `resetOpenTransactionWindow` <a name="resetOpenTransactionWindow" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOpenTransactionWindow"></a>

```java
public void resetOpenTransactionWindow()
```

##### `resetOraclePathPrefix` <a name="resetOraclePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix"></a>

```java
public void resetOraclePathPrefix()
```

##### `resetParallelAsmReadThreads` <a name="resetParallelAsmReadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads"></a>

```java
public void resetParallelAsmReadThreads()
```

##### `resetReadAheadBlocks` <a name="resetReadAheadBlocks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks"></a>

```java
public void resetReadAheadBlocks()
```

##### `resetReadTableSpaceName` <a name="resetReadTableSpaceName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName"></a>

```java
public void resetReadTableSpaceName()
```

##### `resetReplacePathPrefix` <a name="resetReplacePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix"></a>

```java
public void resetReplacePathPrefix()
```

##### `resetRetryInterval` <a name="resetRetryInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval"></a>

```java
public void resetRetryInterval()
```

##### `resetSecretsManagerOracleAsmAccessRoleArn` <a name="resetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```java
public void resetSecretsManagerOracleAsmAccessRoleArn()
```

##### `resetSecretsManagerOracleAsmSecretId` <a name="resetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```java
public void resetSecretsManagerOracleAsmSecretId()
```

##### `resetSecurityDbEncryption` <a name="resetSecurityDbEncryption" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption"></a>

```java
public void resetSecurityDbEncryption()
```

##### `resetSecurityDbEncryptionName` <a name="resetSecurityDbEncryptionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName"></a>

```java
public void resetSecurityDbEncryptionName()
```

##### `resetSpatialDataOptionToGeoJsonFunctionName` <a name="resetSpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName"></a>

```java
public void resetSpatialDataOptionToGeoJsonFunctionName()
```

##### `resetStandbyDelayTime` <a name="resetStandbyDelayTime" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime"></a>

```java
public void resetStandbyDelayTime()
```

##### `resetTrimSpaceInChar` <a name="resetTrimSpaceInChar" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetTrimSpaceInChar"></a>

```java
public void resetTrimSpaceInChar()
```

##### `resetUseAlternateFolderForOnline` <a name="resetUseAlternateFolderForOnline" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline"></a>

```java
public void resetUseAlternateFolderForOnline()
```

##### `resetUseBfile` <a name="resetUseBfile" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBfile"></a>

```java
public void resetUseBfile()
```

##### `resetUseDirectPathFullLoad` <a name="resetUseDirectPathFullLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad"></a>

```java
public void resetUseDirectPathFullLoad()
```

##### `resetUseLogminerReader` <a name="resetUseLogminerReader" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader"></a>

```java
public void resetUseLogminerReader()
```

##### `resetUsePathPrefix` <a name="resetUsePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix"></a>

```java
public void resetUsePathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput">accessAlternateDirectlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput">additionalArchivedLogDestIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput">addSupplementalLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTablesInput">allowSelectedNestedTablesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput">archivedLogDestIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput">archivedLogsOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput">asmPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput">asmServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput">asmUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput">charLengthSemanticsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtcInput">convertTimestampWithZoneToUtcInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput">directPathNoLogInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput">directPathParallelLoadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput">enableHomogenousTablespaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput">extraArchivedLogDestIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncationInput">failTaskOnLobTruncationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput">numberDatatypeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindowInput">openTransactionWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput">oraclePathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput">parallelAsmReadThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput">readAheadBlocksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput">readTableSpaceNameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput">replacePathPrefixInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput">retryIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">secretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">secretsManagerOracleAsmSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput">securityDbEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput">securityDbEncryptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput">spatialDataOptionToGeoJsonFunctionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput">standbyDelayTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInCharInput">trimSpaceInCharInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput">useAlternateFolderForOnlineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfileInput">useBfileInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput">useDirectPathFullLoadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput">useLogminerReaderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput">usePathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">accessAlternateDirectly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">additionalArchivedLogDestId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">addSupplementalLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTables">allowSelectedNestedTables</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">archivedLogDestId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">archivedLogsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword">asmPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer">asmServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser">asmUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">charLengthSemantics</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtc">convertTimestampWithZoneToUtc</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog">directPathNoLog</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">directPathParallelLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">enableHomogenousTablespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">extraArchivedLogDestIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncation">failTaskOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">numberDatatypeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindow">openTransactionWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">oraclePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">parallelAsmReadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">readAheadBlocks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">readTableSpaceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">replacePathPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">securityDbEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">securityDbEncryptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">spatialDataOptionToGeoJsonFunctionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">standbyDelayTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInChar">trimSpaceInChar</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">useAlternateFolderForOnline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfile">useBfile</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">useDirectPathFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader">useLogminerReader</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix">usePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessAlternateDirectlyInput`<sup>Optional</sup> <a name="accessAlternateDirectlyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput"></a>

```java
public java.lang.Boolean|IResolvable getAccessAlternateDirectlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `additionalArchivedLogDestIdInput`<sup>Optional</sup> <a name="additionalArchivedLogDestIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput"></a>

```java
public java.lang.Number getAdditionalArchivedLogDestIdInput();
```

- *Type:* java.lang.Number

---

##### `addSupplementalLoggingInput`<sup>Optional</sup> <a name="addSupplementalLoggingInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getAddSupplementalLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowSelectedNestedTablesInput`<sup>Optional</sup> <a name="allowSelectedNestedTablesInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTablesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowSelectedNestedTablesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `archivedLogDestIdInput`<sup>Optional</sup> <a name="archivedLogDestIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput"></a>

```java
public java.lang.Number getArchivedLogDestIdInput();
```

- *Type:* java.lang.Number

---

##### `archivedLogsOnlyInput`<sup>Optional</sup> <a name="archivedLogsOnlyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getArchivedLogsOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `asmPasswordInput`<sup>Optional</sup> <a name="asmPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput"></a>

```java
public java.lang.String getAsmPasswordInput();
```

- *Type:* java.lang.String

---

##### `asmServerInput`<sup>Optional</sup> <a name="asmServerInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput"></a>

```java
public java.lang.String getAsmServerInput();
```

- *Type:* java.lang.String

---

##### `asmUserInput`<sup>Optional</sup> <a name="asmUserInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput"></a>

```java
public java.lang.String getAsmUserInput();
```

- *Type:* java.lang.String

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethodInput"></a>

```java
public java.lang.String getAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `charLengthSemanticsInput`<sup>Optional</sup> <a name="charLengthSemanticsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput"></a>

```java
public java.lang.String getCharLengthSemanticsInput();
```

- *Type:* java.lang.String

---

##### `convertTimestampWithZoneToUtcInput`<sup>Optional</sup> <a name="convertTimestampWithZoneToUtcInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtcInput"></a>

```java
public java.lang.Boolean|IResolvable getConvertTimestampWithZoneToUtcInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directPathNoLogInput`<sup>Optional</sup> <a name="directPathNoLogInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathNoLogInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directPathParallelLoadInput`<sup>Optional</sup> <a name="directPathParallelLoadInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathParallelLoadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHomogenousTablespaceInput`<sup>Optional</sup> <a name="enableHomogenousTablespaceInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableHomogenousTablespaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extraArchivedLogDestIdsInput`<sup>Optional</sup> <a name="extraArchivedLogDestIdsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput"></a>

```java
public java.util.List<java.lang.Number> getExtraArchivedLogDestIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `failTaskOnLobTruncationInput`<sup>Optional</sup> <a name="failTaskOnLobTruncationInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncationInput"></a>

```java
public java.lang.Boolean|IResolvable getFailTaskOnLobTruncationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberDatatypeScaleInput`<sup>Optional</sup> <a name="numberDatatypeScaleInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput"></a>

```java
public java.lang.Number getNumberDatatypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `openTransactionWindowInput`<sup>Optional</sup> <a name="openTransactionWindowInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindowInput"></a>

```java
public java.lang.Number getOpenTransactionWindowInput();
```

- *Type:* java.lang.Number

---

##### `oraclePathPrefixInput`<sup>Optional</sup> <a name="oraclePathPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput"></a>

```java
public java.lang.String getOraclePathPrefixInput();
```

- *Type:* java.lang.String

---

##### `parallelAsmReadThreadsInput`<sup>Optional</sup> <a name="parallelAsmReadThreadsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput"></a>

```java
public java.lang.Number getParallelAsmReadThreadsInput();
```

- *Type:* java.lang.Number

---

##### `readAheadBlocksInput`<sup>Optional</sup> <a name="readAheadBlocksInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput"></a>

```java
public java.lang.Number getReadAheadBlocksInput();
```

- *Type:* java.lang.Number

---

##### `readTableSpaceNameInput`<sup>Optional</sup> <a name="readTableSpaceNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput"></a>

```java
public java.lang.Boolean|IResolvable getReadTableSpaceNameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replacePathPrefixInput`<sup>Optional</sup> <a name="replacePathPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput"></a>

```java
public java.lang.Boolean|IResolvable getReplacePathPrefixInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retryIntervalInput`<sup>Optional</sup> <a name="retryIntervalInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput"></a>

```java
public java.lang.Number getRetryIntervalInput();
```

- *Type:* java.lang.Number

---

##### `secretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretIdInput();
```

- *Type:* java.lang.String

---

##### `securityDbEncryptionInput`<sup>Optional</sup> <a name="securityDbEncryptionInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput"></a>

```java
public java.lang.String getSecurityDbEncryptionInput();
```

- *Type:* java.lang.String

---

##### `securityDbEncryptionNameInput`<sup>Optional</sup> <a name="securityDbEncryptionNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput"></a>

```java
public java.lang.String getSecurityDbEncryptionNameInput();
```

- *Type:* java.lang.String

---

##### `spatialDataOptionToGeoJsonFunctionNameInput`<sup>Optional</sup> <a name="spatialDataOptionToGeoJsonFunctionNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput"></a>

```java
public java.lang.String getSpatialDataOptionToGeoJsonFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `standbyDelayTimeInput`<sup>Optional</sup> <a name="standbyDelayTimeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput"></a>

```java
public java.lang.Number getStandbyDelayTimeInput();
```

- *Type:* java.lang.Number

---

##### `trimSpaceInCharInput`<sup>Optional</sup> <a name="trimSpaceInCharInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInCharInput"></a>

```java
public java.lang.Boolean|IResolvable getTrimSpaceInCharInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useAlternateFolderForOnlineInput`<sup>Optional</sup> <a name="useAlternateFolderForOnlineInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput"></a>

```java
public java.lang.Boolean|IResolvable getUseAlternateFolderForOnlineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useBfileInput`<sup>Optional</sup> <a name="useBfileInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfileInput"></a>

```java
public java.lang.Boolean|IResolvable getUseBfileInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useDirectPathFullLoadInput`<sup>Optional</sup> <a name="useDirectPathFullLoadInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput"></a>

```java
public java.lang.Boolean|IResolvable getUseDirectPathFullLoadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLogminerReaderInput`<sup>Optional</sup> <a name="useLogminerReaderInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLogminerReaderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usePathPrefixInput`<sup>Optional</sup> <a name="usePathPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput"></a>

```java
public java.lang.String getUsePathPrefixInput();
```

- *Type:* java.lang.String

---

##### `accessAlternateDirectly`<sup>Required</sup> <a name="accessAlternateDirectly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```java
public java.lang.Boolean|IResolvable getAccessAlternateDirectly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `additionalArchivedLogDestId`<sup>Required</sup> <a name="additionalArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```java
public java.lang.Number getAdditionalArchivedLogDestId();
```

- *Type:* java.lang.Number

---

##### `addSupplementalLogging`<sup>Required</sup> <a name="addSupplementalLogging" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```java
public java.lang.Boolean|IResolvable getAddSupplementalLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowSelectedNestedTables`<sup>Required</sup> <a name="allowSelectedNestedTables" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTables"></a>

```java
public java.lang.Boolean|IResolvable getAllowSelectedNestedTables();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `archivedLogDestId`<sup>Required</sup> <a name="archivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```java
public java.lang.Number getArchivedLogDestId();
```

- *Type:* java.lang.Number

---

##### `archivedLogsOnly`<sup>Required</sup> <a name="archivedLogsOnly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```java
public java.lang.Boolean|IResolvable getArchivedLogsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `asmPassword`<sup>Required</sup> <a name="asmPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```java
public java.lang.String getAsmPassword();
```

- *Type:* java.lang.String

---

##### `asmServer`<sup>Required</sup> <a name="asmServer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```java
public java.lang.String getAsmServer();
```

- *Type:* java.lang.String

---

##### `asmUser`<sup>Required</sup> <a name="asmUser" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```java
public java.lang.String getAsmUser();
```

- *Type:* java.lang.String

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `charLengthSemantics`<sup>Required</sup> <a name="charLengthSemantics" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```java
public java.lang.String getCharLengthSemantics();
```

- *Type:* java.lang.String

---

##### `convertTimestampWithZoneToUtc`<sup>Required</sup> <a name="convertTimestampWithZoneToUtc" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtc"></a>

```java
public java.lang.Boolean|IResolvable getConvertTimestampWithZoneToUtc();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directPathNoLog`<sup>Required</sup> <a name="directPathNoLog" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathNoLog();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directPathParallelLoad`<sup>Required</sup> <a name="directPathParallelLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathParallelLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHomogenousTablespace`<sup>Required</sup> <a name="enableHomogenousTablespace" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```java
public java.lang.Boolean|IResolvable getEnableHomogenousTablespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extraArchivedLogDestIds`<sup>Required</sup> <a name="extraArchivedLogDestIds" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```java
public java.util.List<java.lang.Number> getExtraArchivedLogDestIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `failTaskOnLobTruncation`<sup>Required</sup> <a name="failTaskOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTaskOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberDatatypeScale`<sup>Required</sup> <a name="numberDatatypeScale" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```java
public java.lang.Number getNumberDatatypeScale();
```

- *Type:* java.lang.Number

---

##### `openTransactionWindow`<sup>Required</sup> <a name="openTransactionWindow" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindow"></a>

```java
public java.lang.Number getOpenTransactionWindow();
```

- *Type:* java.lang.Number

---

##### `oraclePathPrefix`<sup>Required</sup> <a name="oraclePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```java
public java.lang.String getOraclePathPrefix();
```

- *Type:* java.lang.String

---

##### `parallelAsmReadThreads`<sup>Required</sup> <a name="parallelAsmReadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```java
public java.lang.Number getParallelAsmReadThreads();
```

- *Type:* java.lang.Number

---

##### `readAheadBlocks`<sup>Required</sup> <a name="readAheadBlocks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```java
public java.lang.Number getReadAheadBlocks();
```

- *Type:* java.lang.Number

---

##### `readTableSpaceName`<sup>Required</sup> <a name="readTableSpaceName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```java
public java.lang.Boolean|IResolvable getReadTableSpaceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replacePathPrefix`<sup>Required</sup> <a name="replacePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```java
public java.lang.Boolean|IResolvable getReplacePathPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retryInterval`<sup>Required</sup> <a name="retryInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```java
public java.lang.Number getRetryInterval();
```

- *Type:* java.lang.Number

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretId();
```

- *Type:* java.lang.String

---

##### `securityDbEncryption`<sup>Required</sup> <a name="securityDbEncryption" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```java
public java.lang.String getSecurityDbEncryption();
```

- *Type:* java.lang.String

---

##### `securityDbEncryptionName`<sup>Required</sup> <a name="securityDbEncryptionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```java
public java.lang.String getSecurityDbEncryptionName();
```

- *Type:* java.lang.String

---

##### `spatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="spatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```java
public java.lang.String getSpatialDataOptionToGeoJsonFunctionName();
```

- *Type:* java.lang.String

---

##### `standbyDelayTime`<sup>Required</sup> <a name="standbyDelayTime" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```java
public java.lang.Number getStandbyDelayTime();
```

- *Type:* java.lang.Number

---

##### `trimSpaceInChar`<sup>Required</sup> <a name="trimSpaceInChar" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInChar"></a>

```java
public java.lang.Boolean|IResolvable getTrimSpaceInChar();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useAlternateFolderForOnline`<sup>Required</sup> <a name="useAlternateFolderForOnline" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```java
public java.lang.Boolean|IResolvable getUseAlternateFolderForOnline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useBfile`<sup>Required</sup> <a name="useBfile" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfile"></a>

```java
public java.lang.Boolean|IResolvable getUseBfile();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useDirectPathFullLoad`<sup>Required</sup> <a name="useDirectPathFullLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getUseDirectPathFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLogminerReader`<sup>Required</sup> <a name="useLogminerReader" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```java
public java.lang.Boolean|IResolvable getUseLogminerReader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usePathPrefix`<sup>Required</sup> <a name="usePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```java
public java.lang.String getUsePathPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointOracleSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---


### DmsEndpointPostgresSettingsOutputReference <a name="DmsEndpointPostgresSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointPostgresSettingsOutputReference;

new DmsEndpointPostgresSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetBabelfishDatabaseName">resetBabelfishDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetCaptureDdls">resetCaptureDdls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDatabaseMode">resetDatabaseMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDdlArtifactsSchema">resetDdlArtifactsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetExecuteTimeout">resetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetFailTasksOnLobTruncation">resetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatEnable">resetHeartbeatEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatFrequency">resetHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatSchema">resetHeartbeatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapBooleanAsBoolean">resetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapJsonbAsClob">resetMapJsonbAsClob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapLongVarcharAs">resetMapLongVarcharAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetSlotName">resetSlotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAfterConnectScript"></a>

```java
public void resetAfterConnectScript()
```

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAuthenticationMethod"></a>

```java
public void resetAuthenticationMethod()
```

##### `resetBabelfishDatabaseName` <a name="resetBabelfishDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetBabelfishDatabaseName"></a>

```java
public void resetBabelfishDatabaseName()
```

##### `resetCaptureDdls` <a name="resetCaptureDdls" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetCaptureDdls"></a>

```java
public void resetCaptureDdls()
```

##### `resetDatabaseMode` <a name="resetDatabaseMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDatabaseMode"></a>

```java
public void resetDatabaseMode()
```

##### `resetDdlArtifactsSchema` <a name="resetDdlArtifactsSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDdlArtifactsSchema"></a>

```java
public void resetDdlArtifactsSchema()
```

##### `resetExecuteTimeout` <a name="resetExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetExecuteTimeout"></a>

```java
public void resetExecuteTimeout()
```

##### `resetFailTasksOnLobTruncation` <a name="resetFailTasksOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```java
public void resetFailTasksOnLobTruncation()
```

##### `resetHeartbeatEnable` <a name="resetHeartbeatEnable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatEnable"></a>

```java
public void resetHeartbeatEnable()
```

##### `resetHeartbeatFrequency` <a name="resetHeartbeatFrequency" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatFrequency"></a>

```java
public void resetHeartbeatFrequency()
```

##### `resetHeartbeatSchema` <a name="resetHeartbeatSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatSchema"></a>

```java
public void resetHeartbeatSchema()
```

##### `resetMapBooleanAsBoolean` <a name="resetMapBooleanAsBoolean" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```java
public void resetMapBooleanAsBoolean()
```

##### `resetMapJsonbAsClob` <a name="resetMapJsonbAsClob" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapJsonbAsClob"></a>

```java
public void resetMapJsonbAsClob()
```

##### `resetMapLongVarcharAs` <a name="resetMapLongVarcharAs" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapLongVarcharAs"></a>

```java
public void resetMapLongVarcharAs()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetPluginName"></a>

```java
public void resetPluginName()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```

##### `resetSlotName` <a name="resetSlotName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetSlotName"></a>

```java
public void resetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseNameInput">babelfishDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdlsInput">captureDdlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseModeInput">databaseModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchemaInput">ddlArtifactsSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeoutInput">executeTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncationInput">failTasksOnLobTruncationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnableInput">heartbeatEnableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequencyInput">heartbeatFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchemaInput">heartbeatSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBooleanInput">mapBooleanAsBooleanInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClobInput">mapJsonbAsClobInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAsInput">mapLongVarcharAsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotNameInput">slotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdls">captureDdls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseMode">databaseMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable">heartbeatEnable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema">heartbeatSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob">mapJsonbAsClob</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs">mapLongVarcharAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotName">slotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScriptInput"></a>

```java
public java.lang.String getAfterConnectScriptInput();
```

- *Type:* java.lang.String

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethodInput"></a>

```java
public java.lang.String getAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `babelfishDatabaseNameInput`<sup>Optional</sup> <a name="babelfishDatabaseNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseNameInput"></a>

```java
public java.lang.String getBabelfishDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `captureDdlsInput`<sup>Optional</sup> <a name="captureDdlsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdlsInput"></a>

```java
public java.lang.Boolean|IResolvable getCaptureDdlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseModeInput`<sup>Optional</sup> <a name="databaseModeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseModeInput"></a>

```java
public java.lang.String getDatabaseModeInput();
```

- *Type:* java.lang.String

---

##### `ddlArtifactsSchemaInput`<sup>Optional</sup> <a name="ddlArtifactsSchemaInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchemaInput"></a>

```java
public java.lang.String getDdlArtifactsSchemaInput();
```

- *Type:* java.lang.String

---

##### `executeTimeoutInput`<sup>Optional</sup> <a name="executeTimeoutInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeoutInput"></a>

```java
public java.lang.Number getExecuteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `failTasksOnLobTruncationInput`<sup>Optional</sup> <a name="failTasksOnLobTruncationInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatEnableInput`<sup>Optional</sup> <a name="heartbeatEnableInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnableInput"></a>

```java
public java.lang.Boolean|IResolvable getHeartbeatEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatFrequencyInput`<sup>Optional</sup> <a name="heartbeatFrequencyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequencyInput"></a>

```java
public java.lang.Number getHeartbeatFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `heartbeatSchemaInput`<sup>Optional</sup> <a name="heartbeatSchemaInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchemaInput"></a>

```java
public java.lang.String getHeartbeatSchemaInput();
```

- *Type:* java.lang.String

---

##### `mapBooleanAsBooleanInput`<sup>Optional</sup> <a name="mapBooleanAsBooleanInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBooleanInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mapJsonbAsClobInput`<sup>Optional</sup> <a name="mapJsonbAsClobInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClobInput"></a>

```java
public java.lang.Boolean|IResolvable getMapJsonbAsClobInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mapLongVarcharAsInput`<sup>Optional</sup> <a name="mapLongVarcharAsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAsInput"></a>

```java
public java.lang.String getMapLongVarcharAsInput();
```

- *Type:* java.lang.String

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginNameInput"></a>

```java
public java.lang.String getPluginNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `slotNameInput`<sup>Optional</sup> <a name="slotNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotNameInput"></a>

```java
public java.lang.String getSlotNameInput();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `babelfishDatabaseName`<sup>Required</sup> <a name="babelfishDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName"></a>

```java
public java.lang.String getBabelfishDatabaseName();
```

- *Type:* java.lang.String

---

##### `captureDdls`<sup>Required</sup> <a name="captureDdls" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdls"></a>

```java
public java.lang.Boolean|IResolvable getCaptureDdls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseMode`<sup>Required</sup> <a name="databaseMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseMode"></a>

```java
public java.lang.String getDatabaseMode();
```

- *Type:* java.lang.String

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="ddlArtifactsSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema"></a>

```java
public java.lang.String getDdlArtifactsSchema();
```

- *Type:* java.lang.String

---

##### `executeTimeout`<sup>Required</sup> <a name="executeTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatEnable`<sup>Required</sup> <a name="heartbeatEnable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable"></a>

```java
public java.lang.Boolean|IResolvable getHeartbeatEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatFrequency`<sup>Required</sup> <a name="heartbeatFrequency" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency"></a>

```java
public java.lang.Number getHeartbeatFrequency();
```

- *Type:* java.lang.Number

---

##### `heartbeatSchema`<sup>Required</sup> <a name="heartbeatSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema"></a>

```java
public java.lang.String getHeartbeatSchema();
```

- *Type:* java.lang.String

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mapJsonbAsClob`<sup>Required</sup> <a name="mapJsonbAsClob" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob"></a>

```java
public java.lang.Boolean|IResolvable getMapJsonbAsClob();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mapLongVarcharAs`<sup>Required</sup> <a name="mapLongVarcharAs" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs"></a>

```java
public java.lang.String getMapLongVarcharAs();
```

- *Type:* java.lang.String

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointPostgresSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointRedisSettingsOutputReference;

new DmsEndpointRedisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">resetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">resetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">resetSslSecurityProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthPassword` <a name="resetAuthPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```java
public void resetAuthPassword()
```

##### `resetAuthUserName` <a name="resetAuthUserName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```java
public void resetAuthUserName()
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```java
public void resetSslCaCertificateArn()
```

##### `resetSslSecurityProtocol` <a name="resetSslSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```java
public void resetSslSecurityProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">authPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">authUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">sslSecurityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authPasswordInput`<sup>Optional</sup> <a name="authPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```java
public java.lang.String getAuthPasswordInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authUserNameInput`<sup>Optional</sup> <a name="authUserNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```java
public java.lang.String getAuthUserNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```java
public java.lang.String getSslCaCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslSecurityProtocolInput`<sup>Optional</sup> <a name="sslSecurityProtocolInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```java
public java.lang.String getSslSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslSecurityProtocol`<sup>Required</sup> <a name="sslSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```java
public java.lang.String getSslSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointRedisSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointRedshiftSettingsOutputReference;

new DmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```java
public void resetBucketFolder()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```java
public void resetServerSideEncryptionKmsKeyId()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```java
public java.lang.String getBucketFolderInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointRedshiftSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointTimeoutsOutputReference <a name="DmsEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_endpoint.DmsEndpointTimeoutsOutputReference;

new DmsEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---



