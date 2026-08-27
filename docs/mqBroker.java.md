# `mqBroker` Submodule <a name="`mqBroker` Submodule" id="@cdktn/provider-aws.mqBroker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MqBroker <a name="MqBroker" id="@cdktn/provider-aws.mqBroker.MqBroker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker aws_mq_broker}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBroker;

MqBroker.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .brokerName(java.lang.String)
    .engineType(java.lang.String)
    .engineVersion(java.lang.String)
    .hostInstanceType(java.lang.String)
//  .applyImmediately(java.lang.Boolean|IResolvable)
//  .authenticationStrategy(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .configuration(MqBrokerConfiguration)
//  .dataReplicationMode(java.lang.String)
//  .dataReplicationPrimaryBrokerArn(java.lang.String)
//  .deploymentMode(java.lang.String)
//  .encryptionOptions(MqBrokerEncryptionOptions)
//  .id(java.lang.String)
//  .ldapServerMetadata(MqBrokerLdapServerMetadata)
//  .logs(MqBrokerLogs)
//  .maintenanceWindowStartTime(MqBrokerMaintenanceWindowStartTime)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .resourceShareArns(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .storageType(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MqBrokerTimeouts)
//  .user(IResolvable|java.util.List<MqBrokerUser>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.brokerName">brokerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.hostInstanceType">hostInstanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.authenticationStrategy">authenticationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.dataReplicationMode">dataReplicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_mode MqBroker#data_replication_mode}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.dataReplicationPrimaryBrokerArn">dataReplicationPrimaryBrokerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_primary_broker_arn MqBroker#data_replication_primary_broker_arn}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.logs">logs</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.resourceShareArns">resourceShareArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#resource_share_arns MqBroker#resource_share_arns}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags_all MqBroker#tags_all}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.user">user</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | user block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.brokerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#broker_name MqBroker#broker_name}.

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_type MqBroker#engine_type}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_version MqBroker#engine_version}.

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.hostInstanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.authenticationStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#configuration MqBroker#configuration}

---

##### `dataReplicationMode`<sup>Optional</sup> <a name="dataReplicationMode" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.dataReplicationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_mode MqBroker#data_replication_mode}.

---

##### `dataReplicationPrimaryBrokerArn`<sup>Optional</sup> <a name="dataReplicationPrimaryBrokerArn" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.dataReplicationPrimaryBrokerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_primary_broker_arn MqBroker#data_replication_primary_broker_arn}.

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.deploymentMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `encryptionOptions`<sup>Optional</sup> <a name="encryptionOptions" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.encryptionOptions"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="ldapServerMetadata" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.ldapServerMetadata"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.logs"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#logs MqBroker#logs}

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.maintenanceWindowStartTime"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#region MqBroker#region}

---

##### `resourceShareArns`<sup>Optional</sup> <a name="resourceShareArns" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.resourceShareArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#resource_share_arns MqBroker#resource_share_arns}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#security_groups MqBroker#security_groups}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#storage_type MqBroker#storage_type}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags MqBroker#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags_all MqBroker#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#timeouts MqBroker#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-aws.mqBroker.MqBroker.Initializer.parameter.user"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user MqBroker#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.putEncryptionOptions">putEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.putLdapServerMetadata">putLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime">putMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy">resetAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetDataReplicationMode">resetDataReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetDataReplicationPrimaryBrokerArn">resetDataReplicationPrimaryBrokerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetDeploymentMode">resetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetEncryptionOptions">resetEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata">resetLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime">resetMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetResourceShareArns">resetResourceShareArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBroker.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mqBroker.MqBroker.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mqBroker.MqBroker.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.mqBroker.MqBroker.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mqBroker.MqBroker.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.mqBroker.MqBroker.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mqBroker.MqBroker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.mqBroker.MqBroker.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.mqBroker.MqBroker.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.mqBroker.MqBroker.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.mqBroker.MqBroker.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mqBroker.MqBroker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.mqBroker.MqBroker.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.mqBroker.MqBroker.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBroker.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mqBroker.MqBroker.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBroker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.mqBroker.MqBroker.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBroker.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.mqBroker.MqBroker.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mqBroker.MqBroker.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mqBroker.MqBroker.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.mqBroker.MqBroker.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBroker.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-aws.mqBroker.MqBroker.putConfiguration"></a>

```java
public void putConfiguration(MqBrokerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `putEncryptionOptions` <a name="putEncryptionOptions" id="@cdktn/provider-aws.mqBroker.MqBroker.putEncryptionOptions"></a>

```java
public void putEncryptionOptions(MqBrokerEncryptionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.putEncryptionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `putLdapServerMetadata` <a name="putLdapServerMetadata" id="@cdktn/provider-aws.mqBroker.MqBroker.putLdapServerMetadata"></a>

```java
public void putLdapServerMetadata(MqBrokerLdapServerMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `putLogs` <a name="putLogs" id="@cdktn/provider-aws.mqBroker.MqBroker.putLogs"></a>

```java
public void putLogs(MqBrokerLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `putMaintenanceWindowStartTime` <a name="putMaintenanceWindowStartTime" id="@cdktn/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime"></a>

```java
public void putMaintenanceWindowStartTime(MqBrokerMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.mqBroker.MqBroker.putTimeouts"></a>

```java
public void putTimeouts(MqBrokerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

---

##### `putUser` <a name="putUser" id="@cdktn/provider-aws.mqBroker.MqBroker.putUser"></a>

```java
public void putUser(IResolvable|java.util.List<MqBrokerUser> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mqBroker.MqBroker.putUser.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktn/provider-aws.mqBroker.MqBroker.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAuthenticationStrategy` <a name="resetAuthenticationStrategy" id="@cdktn/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy"></a>

```java
public void resetAuthenticationStrategy()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-aws.mqBroker.MqBroker.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDataReplicationMode` <a name="resetDataReplicationMode" id="@cdktn/provider-aws.mqBroker.MqBroker.resetDataReplicationMode"></a>

```java
public void resetDataReplicationMode()
```

##### `resetDataReplicationPrimaryBrokerArn` <a name="resetDataReplicationPrimaryBrokerArn" id="@cdktn/provider-aws.mqBroker.MqBroker.resetDataReplicationPrimaryBrokerArn"></a>

```java
public void resetDataReplicationPrimaryBrokerArn()
```

##### `resetDeploymentMode` <a name="resetDeploymentMode" id="@cdktn/provider-aws.mqBroker.MqBroker.resetDeploymentMode"></a>

```java
public void resetDeploymentMode()
```

##### `resetEncryptionOptions` <a name="resetEncryptionOptions" id="@cdktn/provider-aws.mqBroker.MqBroker.resetEncryptionOptions"></a>

```java
public void resetEncryptionOptions()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.mqBroker.MqBroker.resetId"></a>

```java
public void resetId()
```

##### `resetLdapServerMetadata` <a name="resetLdapServerMetadata" id="@cdktn/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata"></a>

```java
public void resetLdapServerMetadata()
```

##### `resetLogs` <a name="resetLogs" id="@cdktn/provider-aws.mqBroker.MqBroker.resetLogs"></a>

```java
public void resetLogs()
```

##### `resetMaintenanceWindowStartTime` <a name="resetMaintenanceWindowStartTime" id="@cdktn/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime"></a>

```java
public void resetMaintenanceWindowStartTime()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.mqBroker.MqBroker.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceShareArns` <a name="resetResourceShareArns" id="@cdktn/provider-aws.mqBroker.MqBroker.resetResourceShareArns"></a>

```java
public void resetResourceShareArns()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-aws.mqBroker.MqBroker.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-aws.mqBroker.MqBroker.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-aws.mqBroker.MqBroker.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.mqBroker.MqBroker.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.mqBroker.MqBroker.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.mqBroker.MqBroker.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-aws.mqBroker.MqBroker.resetUser"></a>

```java
public void resetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MqBroker resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.mqBroker.MqBroker.isConstruct"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBroker;

MqBroker.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mqBroker.MqBroker.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.mqBroker.MqBroker.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBroker;

MqBroker.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mqBroker.MqBroker.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.mqBroker.MqBroker.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBroker;

MqBroker.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mqBroker.MqBroker.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.mqBroker.MqBroker.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBroker;

MqBroker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MqBroker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MqBroker resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mqBroker.MqBroker.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mqBroker.MqBroker.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MqBroker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mqBroker.MqBroker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MqBroker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mqBroker.MqBroker.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MqBroker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.instances">instances</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.logs">logs</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.pendingDataReplicationMode">pendingDataReplicationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.sharedResources">sharedResources</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList">MqBrokerSharedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.user">user</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput">authenticationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.brokerNameInput">brokerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationModeInput">dataReplicationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationPrimaryBrokerArnInput">dataReplicationPrimaryBrokerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.deploymentModeInput">deploymentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput">encryptionOptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.engineTypeInput">engineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput">hostInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput">ldapServerMetadataInput</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.logsInput">logsInput</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput">maintenanceWindowStartTimeInput</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.resourceShareArnsInput">resourceShareArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.userInput">userInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.authenticationStrategy">authenticationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.brokerName">brokerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationMode">dataReplicationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationPrimaryBrokerArn">dataReplicationPrimaryBrokerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.hostInstanceType">hostInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.resourceShareArns">resourceShareArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mqBroker.MqBroker.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.mqBroker.MqBroker.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBroker.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.mqBroker.MqBroker.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mqBroker.MqBroker.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mqBroker.MqBroker.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mqBroker.MqBroker.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mqBroker.MqBroker.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mqBroker.MqBroker.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mqBroker.MqBroker.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mqBroker.MqBroker.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mqBroker.MqBroker.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.mqBroker.MqBroker.property.configuration"></a>

```java
public MqBrokerConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a>

---

##### `encryptionOptions`<sup>Required</sup> <a name="encryptionOptions" id="@cdktn/provider-aws.mqBroker.MqBroker.property.encryptionOptions"></a>

```java
public MqBrokerEncryptionOptionsOutputReference getEncryptionOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.mqBroker.MqBroker.property.instances"></a>

```java
public MqBrokerInstancesList getInstances();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a>

---

##### `ldapServerMetadata`<sup>Required</sup> <a name="ldapServerMetadata" id="@cdktn/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata"></a>

```java
public MqBrokerLdapServerMetadataOutputReference getLdapServerMetadata();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktn/provider-aws.mqBroker.MqBroker.property.logs"></a>

```java
public MqBrokerLogsOutputReference getLogs();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a>

---

##### `maintenanceWindowStartTime`<sup>Required</sup> <a name="maintenanceWindowStartTime" id="@cdktn/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime"></a>

```java
public MqBrokerMaintenanceWindowStartTimeOutputReference getMaintenanceWindowStartTime();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a>

---

##### `pendingDataReplicationMode`<sup>Required</sup> <a name="pendingDataReplicationMode" id="@cdktn/provider-aws.mqBroker.MqBroker.property.pendingDataReplicationMode"></a>

```java
public java.lang.String getPendingDataReplicationMode();
```

- *Type:* java.lang.String

---

##### `sharedResources`<sup>Required</sup> <a name="sharedResources" id="@cdktn/provider-aws.mqBroker.MqBroker.property.sharedResources"></a>

```java
public MqBrokerSharedResourcesList getSharedResources();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList">MqBrokerSharedResourcesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.mqBroker.MqBroker.property.timeouts"></a>

```java
public MqBrokerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-aws.mqBroker.MqBroker.property.user"></a>

```java
public MqBrokerUserList getUser();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a>

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authenticationStrategyInput`<sup>Optional</sup> <a name="authenticationStrategyInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput"></a>

```java
public java.lang.String getAuthenticationStrategyInput();
```

- *Type:* java.lang.String

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `brokerNameInput`<sup>Optional</sup> <a name="brokerNameInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.brokerNameInput"></a>

```java
public java.lang.String getBrokerNameInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.configurationInput"></a>

```java
public MqBrokerConfiguration getConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `dataReplicationModeInput`<sup>Optional</sup> <a name="dataReplicationModeInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationModeInput"></a>

```java
public java.lang.String getDataReplicationModeInput();
```

- *Type:* java.lang.String

---

##### `dataReplicationPrimaryBrokerArnInput`<sup>Optional</sup> <a name="dataReplicationPrimaryBrokerArnInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationPrimaryBrokerArnInput"></a>

```java
public java.lang.String getDataReplicationPrimaryBrokerArnInput();
```

- *Type:* java.lang.String

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.deploymentModeInput"></a>

```java
public java.lang.String getDeploymentModeInput();
```

- *Type:* java.lang.String

---

##### `encryptionOptionsInput`<sup>Optional</sup> <a name="encryptionOptionsInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput"></a>

```java
public MqBrokerEncryptionOptions getEncryptionOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.engineTypeInput"></a>

```java
public java.lang.String getEngineTypeInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `hostInstanceTypeInput`<sup>Optional</sup> <a name="hostInstanceTypeInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput"></a>

```java
public java.lang.String getHostInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ldapServerMetadataInput`<sup>Optional</sup> <a name="ldapServerMetadataInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput"></a>

```java
public MqBrokerLdapServerMetadata getLdapServerMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.logsInput"></a>

```java
public MqBrokerLogs getLogsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `maintenanceWindowStartTimeInput`<sup>Optional</sup> <a name="maintenanceWindowStartTimeInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput"></a>

```java
public MqBrokerMaintenanceWindowStartTime getMaintenanceWindowStartTimeInput();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceShareArnsInput`<sup>Optional</sup> <a name="resourceShareArnsInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.resourceShareArnsInput"></a>

```java
public java.util.List<java.lang.String> getResourceShareArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.timeoutsInput"></a>

```java
public IResolvable|MqBrokerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-aws.mqBroker.MqBroker.property.userInput"></a>

```java
public IResolvable|java.util.List<MqBrokerUser> getUserInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktn/provider-aws.mqBroker.MqBroker.property.applyImmediately"></a>

```java
public java.lang.Boolean|IResolvable getApplyImmediately();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authenticationStrategy`<sup>Required</sup> <a name="authenticationStrategy" id="@cdktn/provider-aws.mqBroker.MqBroker.property.authenticationStrategy"></a>

```java
public java.lang.String getAuthenticationStrategy();
```

- *Type:* java.lang.String

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktn/provider-aws.mqBroker.MqBroker.property.brokerName"></a>

```java
public java.lang.String getBrokerName();
```

- *Type:* java.lang.String

---

##### `dataReplicationMode`<sup>Required</sup> <a name="dataReplicationMode" id="@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationMode"></a>

```java
public java.lang.String getDataReplicationMode();
```

- *Type:* java.lang.String

---

##### `dataReplicationPrimaryBrokerArn`<sup>Required</sup> <a name="dataReplicationPrimaryBrokerArn" id="@cdktn/provider-aws.mqBroker.MqBroker.property.dataReplicationPrimaryBrokerArn"></a>

```java
public java.lang.String getDataReplicationPrimaryBrokerArn();
```

- *Type:* java.lang.String

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktn/provider-aws.mqBroker.MqBroker.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.mqBroker.MqBroker.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.mqBroker.MqBroker.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktn/provider-aws.mqBroker.MqBroker.property.hostInstanceType"></a>

```java
public java.lang.String getHostInstanceType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBroker.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.mqBroker.MqBroker.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mqBroker.MqBroker.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceShareArns`<sup>Required</sup> <a name="resourceShareArns" id="@cdktn/provider-aws.mqBroker.MqBroker.property.resourceShareArns"></a>

```java
public java.util.List<java.lang.String> getResourceShareArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-aws.mqBroker.MqBroker.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-aws.mqBroker.MqBroker.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.mqBroker.MqBroker.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mqBroker.MqBroker.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.mqBroker.MqBroker.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBroker.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mqBroker.MqBroker.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MqBrokerConfig <a name="MqBrokerConfig" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerConfig;

MqBrokerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .brokerName(java.lang.String)
    .engineType(java.lang.String)
    .engineVersion(java.lang.String)
    .hostInstanceType(java.lang.String)
//  .applyImmediately(java.lang.Boolean|IResolvable)
//  .authenticationStrategy(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .configuration(MqBrokerConfiguration)
//  .dataReplicationMode(java.lang.String)
//  .dataReplicationPrimaryBrokerArn(java.lang.String)
//  .deploymentMode(java.lang.String)
//  .encryptionOptions(MqBrokerEncryptionOptions)
//  .id(java.lang.String)
//  .ldapServerMetadata(MqBrokerLdapServerMetadata)
//  .logs(MqBrokerLogs)
//  .maintenanceWindowStartTime(MqBrokerMaintenanceWindowStartTime)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .resourceShareArns(java.util.List<java.lang.String>)
//  .securityGroups(java.util.List<java.lang.String>)
//  .storageType(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MqBrokerTimeouts)
//  .user(IResolvable|java.util.List<MqBrokerUser>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.brokerName">brokerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType">hostInstanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy">authenticationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.dataReplicationMode">dataReplicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_mode MqBroker#data_replication_mode}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.dataReplicationPrimaryBrokerArn">dataReplicationPrimaryBrokerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_primary_broker_arn MqBroker#data_replication_primary_broker_arn}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.logs">logs</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.resourceShareArns">resourceShareArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#resource_share_arns MqBroker#resource_share_arns}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags_all MqBroker#tags_all}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.user">user</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.brokerName"></a>

```java
public java.lang.String getBrokerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#broker_name MqBroker#broker_name}.

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_type MqBroker#engine_type}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_version MqBroker#engine_version}.

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType"></a>

```java
public java.lang.String getHostInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately"></a>

```java
public java.lang.Boolean|IResolvable getApplyImmediately();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy"></a>

```java
public java.lang.String getAuthenticationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.configuration"></a>

```java
public MqBrokerConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#configuration MqBroker#configuration}

---

##### `dataReplicationMode`<sup>Optional</sup> <a name="dataReplicationMode" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.dataReplicationMode"></a>

```java
public java.lang.String getDataReplicationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_mode MqBroker#data_replication_mode}.

---

##### `dataReplicationPrimaryBrokerArn`<sup>Optional</sup> <a name="dataReplicationPrimaryBrokerArn" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.dataReplicationPrimaryBrokerArn"></a>

```java
public java.lang.String getDataReplicationPrimaryBrokerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_primary_broker_arn MqBroker#data_replication_primary_broker_arn}.

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `encryptionOptions`<sup>Optional</sup> <a name="encryptionOptions" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions"></a>

```java
public MqBrokerEncryptionOptions getEncryptionOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="ldapServerMetadata" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata"></a>

```java
public MqBrokerLdapServerMetadata getLdapServerMetadata();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.logs"></a>

```java
public MqBrokerLogs getLogs();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#logs MqBroker#logs}

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime"></a>

```java
public MqBrokerMaintenanceWindowStartTime getMaintenanceWindowStartTime();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#region MqBroker#region}

---

##### `resourceShareArns`<sup>Optional</sup> <a name="resourceShareArns" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.resourceShareArns"></a>

```java
public java.util.List<java.lang.String> getResourceShareArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#resource_share_arns MqBroker#resource_share_arns}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#security_groups MqBroker#security_groups}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#storage_type MqBroker#storage_type}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags MqBroker#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags_all MqBroker#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.timeouts"></a>

```java
public MqBrokerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#timeouts MqBroker#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-aws.mqBroker.MqBrokerConfig.property.user"></a>

```java
public IResolvable|java.util.List<MqBrokerUser> getUser();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user MqBroker#user}

---

### MqBrokerConfiguration <a name="MqBrokerConfiguration" id="@cdktn/provider-aws.mqBroker.MqBrokerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerConfiguration;

MqBrokerConfiguration.builder()
//  .id(java.lang.String)
//  .revision(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration.property.revision">revision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#revision MqBroker#revision}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBrokerConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-aws.mqBroker.MqBrokerConfiguration.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#revision MqBroker#revision}.

---

### MqBrokerEncryptionOptions <a name="MqBrokerEncryptionOptions" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerEncryptionOptions;

MqBrokerEncryptionOptions.builder()
//  .kmsKeyId(java.lang.String)
//  .useAwsOwnedKey(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#kms_key_id MqBroker#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey">useAwsOwnedKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#kms_key_id MqBroker#kms_key_id}.

---

##### `useAwsOwnedKey`<sup>Optional</sup> <a name="useAwsOwnedKey" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey"></a>

```java
public java.lang.Boolean|IResolvable getUseAwsOwnedKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}.

---

### MqBrokerInstances <a name="MqBrokerInstances" id="@cdktn/provider-aws.mqBroker.MqBrokerInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerInstances.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerInstances;

MqBrokerInstances.builder()
    .build();
```


### MqBrokerLdapServerMetadata <a name="MqBrokerLdapServerMetadata" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerLdapServerMetadata;

MqBrokerLdapServerMetadata.builder()
//  .hosts(java.util.List<java.lang.String>)
//  .roleBase(java.lang.String)
//  .roleName(java.lang.String)
//  .roleSearchMatching(java.lang.String)
//  .roleSearchSubtree(java.lang.Boolean|IResolvable)
//  .serviceAccountPassword(java.lang.String)
//  .serviceAccountUsername(java.lang.String)
//  .userBase(java.lang.String)
//  .userRoleName(java.lang.String)
//  .userSearchMatching(java.lang.String)
//  .userSearchSubtree(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#hosts MqBroker#hosts}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase">roleBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_base MqBroker#role_base}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_name MqBroker#role_name}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching">roleSearchMatching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_search_matching MqBroker#role_search_matching}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_search_subtree MqBroker#role_search_subtree}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#service_account_password MqBroker#service_account_password}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#service_account_username MqBroker#service_account_username}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase">userBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_base MqBroker#user_base}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName">userRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_role_name MqBroker#user_role_name}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching">userSearchMatching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_search_matching MqBroker#user_search_matching}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree">userSearchSubtree</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_search_subtree MqBroker#user_search_subtree}. |

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#hosts MqBroker#hosts}.

---

##### `roleBase`<sup>Optional</sup> <a name="roleBase" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase"></a>

```java
public java.lang.String getRoleBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_base MqBroker#role_base}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_name MqBroker#role_name}.

---

##### `roleSearchMatching`<sup>Optional</sup> <a name="roleSearchMatching" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching"></a>

```java
public java.lang.String getRoleSearchMatching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_search_matching MqBroker#role_search_matching}.

---

##### `roleSearchSubtree`<sup>Optional</sup> <a name="roleSearchSubtree" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree"></a>

```java
public java.lang.Boolean|IResolvable getRoleSearchSubtree();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_search_subtree MqBroker#role_search_subtree}.

---

##### `serviceAccountPassword`<sup>Optional</sup> <a name="serviceAccountPassword" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword"></a>

```java
public java.lang.String getServiceAccountPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#service_account_password MqBroker#service_account_password}.

---

##### `serviceAccountUsername`<sup>Optional</sup> <a name="serviceAccountUsername" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername"></a>

```java
public java.lang.String getServiceAccountUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#service_account_username MqBroker#service_account_username}.

---

##### `userBase`<sup>Optional</sup> <a name="userBase" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase"></a>

```java
public java.lang.String getUserBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_base MqBroker#user_base}.

---

##### `userRoleName`<sup>Optional</sup> <a name="userRoleName" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName"></a>

```java
public java.lang.String getUserRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_role_name MqBroker#user_role_name}.

---

##### `userSearchMatching`<sup>Optional</sup> <a name="userSearchMatching" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching"></a>

```java
public java.lang.String getUserSearchMatching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_search_matching MqBroker#user_search_matching}.

---

##### `userSearchSubtree`<sup>Optional</sup> <a name="userSearchSubtree" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree"></a>

```java
public java.lang.Boolean|IResolvable getUserSearchSubtree();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_search_subtree MqBroker#user_search_subtree}.

---

### MqBrokerLogs <a name="MqBrokerLogs" id="@cdktn/provider-aws.mqBroker.MqBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerLogs.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerLogs;

MqBrokerLogs.builder()
//  .audit(java.lang.String)
//  .general(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs.property.audit">audit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#audit MqBroker#audit}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs.property.general">general</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#general MqBroker#general}. |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="@cdktn/provider-aws.mqBroker.MqBrokerLogs.property.audit"></a>

```java
public java.lang.String getAudit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#audit MqBroker#audit}.

---

##### `general`<sup>Optional</sup> <a name="general" id="@cdktn/provider-aws.mqBroker.MqBrokerLogs.property.general"></a>

```java
public java.lang.Boolean|IResolvable getGeneral();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#general MqBroker#general}.

---

### MqBrokerMaintenanceWindowStartTime <a name="MqBrokerMaintenanceWindowStartTime" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerMaintenanceWindowStartTime;

MqBrokerMaintenanceWindowStartTime.builder()
    .dayOfWeek(java.lang.String)
    .timeOfDay(java.lang.String)
    .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#day_of_week MqBroker#day_of_week}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#time_of_day MqBroker#time_of_day}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#time_zone MqBroker#time_zone}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#day_of_week MqBroker#day_of_week}.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#time_of_day MqBroker#time_of_day}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#time_zone MqBroker#time_zone}.

---

### MqBrokerSharedResources <a name="MqBrokerSharedResources" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResources.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerSharedResources;

MqBrokerSharedResources.builder()
    .build();
```


### MqBrokerTimeouts <a name="MqBrokerTimeouts" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerTimeouts;

MqBrokerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#create MqBroker#create}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#delete MqBroker#delete}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#update MqBroker#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#create MqBroker#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#delete MqBroker#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#update MqBroker#update}.

---

### MqBrokerUser <a name="MqBrokerUser" id="@cdktn/provider-aws.mqBroker.MqBrokerUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mqBroker.MqBrokerUser.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerUser;

MqBrokerUser.builder()
    .password(java.lang.String)
    .username(java.lang.String)
//  .consoleAccess(java.lang.Boolean|IResolvable)
//  .groups(java.util.List<java.lang.String>)
//  .replicationUser(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#password MqBroker#password}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#username MqBroker#username}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess">consoleAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#console_access MqBroker#console_access}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#groups MqBroker#groups}. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser.property.replicationUser">replicationUser</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#replication_user MqBroker#replication_user}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.mqBroker.MqBrokerUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#password MqBroker#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.mqBroker.MqBrokerUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#username MqBroker#username}.

---

##### `consoleAccess`<sup>Optional</sup> <a name="consoleAccess" id="@cdktn/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess"></a>

```java
public java.lang.Boolean|IResolvable getConsoleAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#console_access MqBroker#console_access}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-aws.mqBroker.MqBrokerUser.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#groups MqBroker#groups}.

---

##### `replicationUser`<sup>Optional</sup> <a name="replicationUser" id="@cdktn/provider-aws.mqBroker.MqBrokerUser.property.replicationUser"></a>

```java
public java.lang.Boolean|IResolvable getReplicationUser();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#replication_user MqBroker#replication_user}.

---

## Classes <a name="Classes" id="Classes"></a>

### MqBrokerConfigurationOutputReference <a name="MqBrokerConfigurationOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerConfigurationOutputReference;

new MqBrokerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision"></a>

```java
public void resetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue"></a>

```java
public MqBrokerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---


### MqBrokerEncryptionOptionsOutputReference <a name="MqBrokerEncryptionOptionsOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerEncryptionOptionsOutputReference;

new MqBrokerEncryptionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey">resetUseAwsOwnedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetUseAwsOwnedKey` <a name="resetUseAwsOwnedKey" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey"></a>

```java
public void resetUseAwsOwnedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput">useAwsOwnedKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey">useAwsOwnedKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `useAwsOwnedKeyInput`<sup>Optional</sup> <a name="useAwsOwnedKeyInput" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getUseAwsOwnedKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `useAwsOwnedKey`<sup>Required</sup> <a name="useAwsOwnedKey" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey"></a>

```java
public java.lang.Boolean|IResolvable getUseAwsOwnedKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue"></a>

```java
public MqBrokerEncryptionOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---


### MqBrokerInstancesList <a name="MqBrokerInstancesList" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerInstancesList;

new MqBrokerInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.get"></a>

```java
public MqBrokerInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MqBrokerInstancesOutputReference <a name="MqBrokerInstancesOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerInstancesOutputReference;

new MqBrokerInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl">consoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints">endpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl"></a>

```java
public java.lang.String getConsoleUrl();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints"></a>

```java
public java.util.List<java.lang.String> getEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue"></a>

```java
public MqBrokerInstances getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a>

---


### MqBrokerLdapServerMetadataOutputReference <a name="MqBrokerLdapServerMetadataOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerLdapServerMetadataOutputReference;

new MqBrokerLdapServerMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase">resetRoleBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching">resetRoleSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree">resetRoleSearchSubtree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword">resetServiceAccountPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername">resetServiceAccountUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase">resetUserBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName">resetUserRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching">resetUserSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree">resetUserSearchSubtree</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHosts` <a name="resetHosts" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetRoleBase` <a name="resetRoleBase" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase"></a>

```java
public void resetRoleBase()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetRoleSearchMatching` <a name="resetRoleSearchMatching" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching"></a>

```java
public void resetRoleSearchMatching()
```

##### `resetRoleSearchSubtree` <a name="resetRoleSearchSubtree" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree"></a>

```java
public void resetRoleSearchSubtree()
```

##### `resetServiceAccountPassword` <a name="resetServiceAccountPassword" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword"></a>

```java
public void resetServiceAccountPassword()
```

##### `resetServiceAccountUsername` <a name="resetServiceAccountUsername" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername"></a>

```java
public void resetServiceAccountUsername()
```

##### `resetUserBase` <a name="resetUserBase" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase"></a>

```java
public void resetUserBase()
```

##### `resetUserRoleName` <a name="resetUserRoleName" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName"></a>

```java
public void resetUserRoleName()
```

##### `resetUserSearchMatching` <a name="resetUserSearchMatching" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching"></a>

```java
public void resetUserSearchMatching()
```

##### `resetUserSearchSubtree` <a name="resetUserSearchSubtree" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree"></a>

```java
public void resetUserSearchSubtree()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput">roleBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput">roleSearchMatchingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput">roleSearchSubtreeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput">serviceAccountPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput">serviceAccountUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput">userBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput">userRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput">userSearchMatchingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput">userSearchSubtreeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase">roleBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching">roleSearchMatching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase">userBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName">userRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching">userSearchMatching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree">userSearchSubtree</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleBaseInput`<sup>Optional</sup> <a name="roleBaseInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput"></a>

```java
public java.lang.String getRoleBaseInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `roleSearchMatchingInput`<sup>Optional</sup> <a name="roleSearchMatchingInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput"></a>

```java
public java.lang.String getRoleSearchMatchingInput();
```

- *Type:* java.lang.String

---

##### `roleSearchSubtreeInput`<sup>Optional</sup> <a name="roleSearchSubtreeInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput"></a>

```java
public java.lang.Boolean|IResolvable getRoleSearchSubtreeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountPasswordInput`<sup>Optional</sup> <a name="serviceAccountPasswordInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput"></a>

```java
public java.lang.String getServiceAccountPasswordInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountUsernameInput`<sup>Optional</sup> <a name="serviceAccountUsernameInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput"></a>

```java
public java.lang.String getServiceAccountUsernameInput();
```

- *Type:* java.lang.String

---

##### `userBaseInput`<sup>Optional</sup> <a name="userBaseInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput"></a>

```java
public java.lang.String getUserBaseInput();
```

- *Type:* java.lang.String

---

##### `userRoleNameInput`<sup>Optional</sup> <a name="userRoleNameInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput"></a>

```java
public java.lang.String getUserRoleNameInput();
```

- *Type:* java.lang.String

---

##### `userSearchMatchingInput`<sup>Optional</sup> <a name="userSearchMatchingInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput"></a>

```java
public java.lang.String getUserSearchMatchingInput();
```

- *Type:* java.lang.String

---

##### `userSearchSubtreeInput`<sup>Optional</sup> <a name="userSearchSubtreeInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput"></a>

```java
public java.lang.Boolean|IResolvable getUserSearchSubtreeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleBase`<sup>Required</sup> <a name="roleBase" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase"></a>

```java
public java.lang.String getRoleBase();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `roleSearchMatching`<sup>Required</sup> <a name="roleSearchMatching" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching"></a>

```java
public java.lang.String getRoleSearchMatching();
```

- *Type:* java.lang.String

---

##### `roleSearchSubtree`<sup>Required</sup> <a name="roleSearchSubtree" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree"></a>

```java
public java.lang.Boolean|IResolvable getRoleSearchSubtree();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountPassword`<sup>Required</sup> <a name="serviceAccountPassword" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword"></a>

```java
public java.lang.String getServiceAccountPassword();
```

- *Type:* java.lang.String

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="serviceAccountUsername" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername"></a>

```java
public java.lang.String getServiceAccountUsername();
```

- *Type:* java.lang.String

---

##### `userBase`<sup>Required</sup> <a name="userBase" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase"></a>

```java
public java.lang.String getUserBase();
```

- *Type:* java.lang.String

---

##### `userRoleName`<sup>Required</sup> <a name="userRoleName" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName"></a>

```java
public java.lang.String getUserRoleName();
```

- *Type:* java.lang.String

---

##### `userSearchMatching`<sup>Required</sup> <a name="userSearchMatching" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching"></a>

```java
public java.lang.String getUserSearchMatching();
```

- *Type:* java.lang.String

---

##### `userSearchSubtree`<sup>Required</sup> <a name="userSearchSubtree" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree"></a>

```java
public java.lang.Boolean|IResolvable getUserSearchSubtree();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue"></a>

```java
public MqBrokerLdapServerMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---


### MqBrokerLogsOutputReference <a name="MqBrokerLogsOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerLogsOutputReference;

new MqBrokerLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit">resetAudit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral">resetGeneral</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudit` <a name="resetAudit" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit"></a>

```java
public void resetAudit()
```

##### `resetGeneral` <a name="resetGeneral" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral"></a>

```java
public void resetGeneral()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput">auditInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput">generalInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit">audit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general">general</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditInput`<sup>Optional</sup> <a name="auditInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput"></a>

```java
public java.lang.String getAuditInput();
```

- *Type:* java.lang.String

---

##### `generalInput`<sup>Optional</sup> <a name="generalInput" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput"></a>

```java
public java.lang.Boolean|IResolvable getGeneralInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `audit`<sup>Required</sup> <a name="audit" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit"></a>

```java
public java.lang.String getAudit();
```

- *Type:* java.lang.String

---

##### `general`<sup>Required</sup> <a name="general" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general"></a>

```java
public java.lang.Boolean|IResolvable getGeneral();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue"></a>

```java
public MqBrokerLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---


### MqBrokerMaintenanceWindowStartTimeOutputReference <a name="MqBrokerMaintenanceWindowStartTimeOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerMaintenanceWindowStartTimeOutputReference;

new MqBrokerMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput"></a>

```java
public java.lang.String getTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public MqBrokerMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---


### MqBrokerSharedResourcesList <a name="MqBrokerSharedResourcesList" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerSharedResourcesList;

new MqBrokerSharedResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.get"></a>

```java
public MqBrokerSharedResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MqBrokerSharedResourcesOutputReference <a name="MqBrokerSharedResourcesOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerSharedResourcesOutputReference;

new MqBrokerSharedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResources">MqBrokerSharedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerSharedResourcesOutputReference.property.internalValue"></a>

```java
public MqBrokerSharedResources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.mqBroker.MqBrokerSharedResources">MqBrokerSharedResources</a>

---


### MqBrokerTimeoutsOutputReference <a name="MqBrokerTimeoutsOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerTimeoutsOutputReference;

new MqBrokerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MqBrokerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

---


### MqBrokerUserList <a name="MqBrokerUserList" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerUserList;

new MqBrokerUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.get"></a>

```java
public MqBrokerUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerUserList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MqBrokerUser> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

---


### MqBrokerUserOutputReference <a name="MqBrokerUserOutputReference" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mq_broker.MqBrokerUserOutputReference;

new MqBrokerUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess">resetConsoleAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resetReplicationUser">resetReplicationUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsoleAccess` <a name="resetConsoleAccess" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess"></a>

```java
public void resetConsoleAccess()
```

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetReplicationUser` <a name="resetReplicationUser" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.resetReplicationUser"></a>

```java
public void resetReplicationUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput">consoleAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.replicationUserInput">replicationUserInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess">consoleAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.replicationUser">replicationUser</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consoleAccessInput`<sup>Optional</sup> <a name="consoleAccessInput" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getConsoleAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `replicationUserInput`<sup>Optional</sup> <a name="replicationUserInput" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.replicationUserInput"></a>

```java
public java.lang.Boolean|IResolvable getReplicationUserInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `consoleAccess`<sup>Required</sup> <a name="consoleAccess" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess"></a>

```java
public java.lang.Boolean|IResolvable getConsoleAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `replicationUser`<sup>Required</sup> <a name="replicationUser" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.replicationUser"></a>

```java
public java.lang.Boolean|IResolvable getReplicationUser();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue"></a>

```java
public IResolvable|MqBrokerUser getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>

---



