# `timestreaminfluxdbDbInstance` Submodule <a name="`timestreaminfluxdbDbInstance` Submodule" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreaminfluxdbDbInstance <a name="TimestreaminfluxdbDbInstance" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance aws_timestreaminfluxdb_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstance;

TimestreaminfluxdbDbInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allocatedStorage(java.lang.Number)
    .bucket(java.lang.String)
    .dbInstanceType(java.lang.String)
    .name(java.lang.String)
    .organization(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
    .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .vpcSubnetIds(java.util.List<java.lang.String>)
//  .dbParameterGroupIdentifier(java.lang.String)
//  .dbStorageType(java.lang.String)
//  .deploymentType(java.lang.String)
//  .logDeliveryConfiguration(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfiguration>)
//  .maintenanceSchedule(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceMaintenanceSchedule>)
//  .networkType(java.lang.String)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TimestreaminfluxdbDbInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC security group IDs to associate with the DB instance. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC subnet IDs to associate with the DB instance. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | The id of the DB parameter group assigned to your DB instance. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.maintenanceSchedule">maintenanceSchedule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>></code> | maintenance_schedule block. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Specifies whether the networkType of the Timestream for InfluxDB instance is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Configures the DB instance with a public IP to facilitate access. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.Number

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#allocated_storage TimestreaminfluxdbDbInstance#allocated_storage}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#bucket TimestreaminfluxdbDbInstance#bucket}

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbInstanceType"></a>

- *Type:* java.lang.String

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#db_instance_type TimestreaminfluxdbDbInstance#db_instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB instance names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#name TimestreaminfluxdbDbInstance#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#organization TimestreaminfluxdbDbInstance#organization}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#password TimestreaminfluxdbDbInstance#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#username TimestreaminfluxdbDbInstance#username}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of VPC security group IDs to associate with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#vpc_security_group_ids TimestreaminfluxdbDbInstance#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of VPC subnet IDs to associate with the DB instance.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#vpc_subnet_ids TimestreaminfluxdbDbInstance#vpc_subnet_ids}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbParameterGroupIdentifier"></a>

- *Type:* java.lang.String

The id of the DB parameter group assigned to your DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#db_parameter_group_identifier TimestreaminfluxdbDbInstance#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbStorageType"></a>

- *Type:* java.lang.String

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#db_storage_type TimestreaminfluxdbDbInstance#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#deployment_type TimestreaminfluxdbDbInstance#deployment_type}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#log_delivery_configuration TimestreaminfluxdbDbInstance#log_delivery_configuration}

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.maintenanceSchedule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>>

maintenance_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#maintenance_schedule TimestreaminfluxdbDbInstance#maintenance_schedule}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Specifies whether the networkType of the Timestream for InfluxDB instance is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#network_type TimestreaminfluxdbDbInstance#network_type}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#port TimestreaminfluxdbDbInstance#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Configures the DB instance with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#publicly_accessible TimestreaminfluxdbDbInstance#publicly_accessible}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#region TimestreaminfluxdbDbInstance#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#timeouts TimestreaminfluxdbDbInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putMaintenanceSchedule">putMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbParameterGroupIdentifier">resetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbStorageType">resetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetMaintenanceSchedule">resetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration"></a>

```java
public void putLogDeliveryConfiguration(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>>

---

##### `putMaintenanceSchedule` <a name="putMaintenanceSchedule" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putMaintenanceSchedule"></a>

```java
public void putMaintenanceSchedule(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceMaintenanceSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putMaintenanceSchedule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts"></a>

```java
public void putTimeouts(TimestreaminfluxdbDbInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

---

##### `resetDbParameterGroupIdentifier` <a name="resetDbParameterGroupIdentifier" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbParameterGroupIdentifier"></a>

```java
public void resetDbParameterGroupIdentifier()
```

##### `resetDbStorageType` <a name="resetDbStorageType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbStorageType"></a>

```java
public void resetDbStorageType()
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetLogDeliveryConfiguration"></a>

```java
public void resetLogDeliveryConfiguration()
```

##### `resetMaintenanceSchedule` <a name="resetMaintenanceSchedule" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetMaintenanceSchedule"></a>

```java
public void resetMaintenanceSchedule()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPort"></a>

```java
public void resetPort()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstance;

TimestreaminfluxdbDbInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstance;

TimestreaminfluxdbDbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstance;

TimestreaminfluxdbDbInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstance;

TimestreaminfluxdbDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TimestreaminfluxdbDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TimestreaminfluxdbDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TimestreaminfluxdbDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TimestreaminfluxdbDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList">TimestreaminfluxdbDbInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.secondaryAvailabilityZone">secondaryAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference">TimestreaminfluxdbDbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceTypeInput">dbInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifierInput">dbParameterGroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageTypeInput">dbStorageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.maintenanceScheduleInput">maintenanceScheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.influxAuthParametersSecretArn"></a>

```java
public java.lang.String getInfluxAuthParametersSecretArn();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfiguration"></a>

```java
public TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList getLogDeliveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.maintenanceSchedule"></a>

```java
public TimestreaminfluxdbDbInstanceMaintenanceScheduleList getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList">TimestreaminfluxdbDbInstanceMaintenanceScheduleList</a>

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="secondaryAvailabilityZone" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.secondaryAvailabilityZone"></a>

```java
public java.lang.String getSecondaryAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeouts"></a>

```java
public TimestreaminfluxdbDbInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference">TimestreaminfluxdbDbInstanceTimeoutsOutputReference</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorageInput"></a>

```java
public java.lang.Number getAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceTypeInput`<sup>Optional</sup> <a name="dbInstanceTypeInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceTypeInput"></a>

```java
public java.lang.String getDbInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="dbParameterGroupIdentifierInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifierInput"></a>

```java
public java.lang.String getDbParameterGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbStorageTypeInput`<sup>Optional</sup> <a name="dbStorageTypeInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageTypeInput"></a>

```java
public java.lang.String getDbStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfigurationInput"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfiguration> getLogDeliveryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>>

---

##### `maintenanceScheduleInput`<sup>Optional</sup> <a name="maintenanceScheduleInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.maintenanceScheduleInput"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceMaintenanceSchedule> getMaintenanceScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeoutsInput"></a>

```java
public IResolvable|TimestreaminfluxdbDbInstanceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceType"></a>

```java
public java.lang.String getDbInstanceType();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifier"></a>

```java
public java.lang.String getDbParameterGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageType"></a>

```java
public java.lang.String getDbStorageType();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreaminfluxdbDbInstanceConfig <a name="TimestreaminfluxdbDbInstanceConfig" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceConfig;

TimestreaminfluxdbDbInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allocatedStorage(java.lang.Number)
    .bucket(java.lang.String)
    .dbInstanceType(java.lang.String)
    .name(java.lang.String)
    .organization(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
    .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .vpcSubnetIds(java.util.List<java.lang.String>)
//  .dbParameterGroupIdentifier(java.lang.String)
//  .dbStorageType(java.lang.String)
//  .deploymentType(java.lang.String)
//  .logDeliveryConfiguration(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfiguration>)
//  .maintenanceSchedule(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceMaintenanceSchedule>)
//  .networkType(java.lang.String)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TimestreaminfluxdbDbInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC security group IDs to associate with the DB instance. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC subnet IDs to associate with the DB instance. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | The id of the DB parameter group assigned to your DB instance. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>></code> | maintenance_schedule block. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Specifies whether the networkType of the Timestream for InfluxDB instance is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Configures the DB instance with a public IP to facilitate access. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#allocated_storage TimestreaminfluxdbDbInstance#allocated_storage}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#bucket TimestreaminfluxdbDbInstance#bucket}

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbInstanceType"></a>

```java
public java.lang.String getDbInstanceType();
```

- *Type:* java.lang.String

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#db_instance_type TimestreaminfluxdbDbInstance#db_instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB instance names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#name TimestreaminfluxdbDbInstance#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#organization TimestreaminfluxdbDbInstance#organization}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#password TimestreaminfluxdbDbInstance#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#username TimestreaminfluxdbDbInstance#username}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of VPC security group IDs to associate with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#vpc_security_group_ids TimestreaminfluxdbDbInstance#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of VPC subnet IDs to associate with the DB instance.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#vpc_subnet_ids TimestreaminfluxdbDbInstance#vpc_subnet_ids}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbParameterGroupIdentifier"></a>

```java
public java.lang.String getDbParameterGroupIdentifier();
```

- *Type:* java.lang.String

The id of the DB parameter group assigned to your DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#db_parameter_group_identifier TimestreaminfluxdbDbInstance#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbStorageType"></a>

```java
public java.lang.String getDbStorageType();
```

- *Type:* java.lang.String

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#db_storage_type TimestreaminfluxdbDbInstance#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#deployment_type TimestreaminfluxdbDbInstance#deployment_type}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.logDeliveryConfiguration"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfiguration> getLogDeliveryConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#log_delivery_configuration TimestreaminfluxdbDbInstance#log_delivery_configuration}

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.maintenanceSchedule"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceMaintenanceSchedule> getMaintenanceSchedule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>>

maintenance_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#maintenance_schedule TimestreaminfluxdbDbInstance#maintenance_schedule}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Specifies whether the networkType of the Timestream for InfluxDB instance is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#network_type TimestreaminfluxdbDbInstance#network_type}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#port TimestreaminfluxdbDbInstance#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Configures the DB instance with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#publicly_accessible TimestreaminfluxdbDbInstance#publicly_accessible}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#region TimestreaminfluxdbDbInstance#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.timeouts"></a>

```java
public TimestreaminfluxdbDbInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#timeouts TimestreaminfluxdbDbInstance#timeouts}

---

### TimestreaminfluxdbDbInstanceLogDeliveryConfiguration <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfiguration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration;

TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.builder()
//  .s3Configuration(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.property.s3Configuration">s3Configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>></code> | s3_configuration block. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.property.s3Configuration"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration> getS3Configuration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>>

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#s3_configuration TimestreaminfluxdbDbInstance#s3_configuration}

---

### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration;

TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.builder()
    .bucketName(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the S3 bucket to deliver logs to. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether log delivery to the S3 bucket is enabled. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the S3 bucket to deliver logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#bucket_name TimestreaminfluxdbDbInstance#bucket_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether log delivery to the S3 bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#enabled TimestreaminfluxdbDbInstance#enabled}

---

### TimestreaminfluxdbDbInstanceMaintenanceSchedule <a name="TimestreaminfluxdbDbInstanceMaintenanceSchedule" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceMaintenanceSchedule;

TimestreaminfluxdbDbInstanceMaintenanceSchedule.builder()
    .preferredMaintenanceWindow(java.lang.String)
    .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#preferred_maintenance_window TimestreaminfluxdbDbInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#timezone TimestreaminfluxdbDbInstance#timezone}. |

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#preferred_maintenance_window TimestreaminfluxdbDbInstance#preferred_maintenance_window}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#timezone TimestreaminfluxdbDbInstance#timezone}.

---

### TimestreaminfluxdbDbInstanceTimeouts <a name="TimestreaminfluxdbDbInstanceTimeouts" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceTimeouts;

TimestreaminfluxdbDbInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#create TimestreaminfluxdbDbInstance#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#delete TimestreaminfluxdbDbInstance#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/timestreaminfluxdb_db_instance#update TimestreaminfluxdbDbInstance#update}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList;

new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get"></a>

```java
public TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>>

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference;

new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```java
public void putS3Configuration(IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```java
public void resetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```java
public TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration> getS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreaminfluxdbDbInstanceLogDeliveryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList;

new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get"></a>

```java
public TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>>

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference;

new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>

---


### TimestreaminfluxdbDbInstanceMaintenanceScheduleList <a name="TimestreaminfluxdbDbInstanceMaintenanceScheduleList" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList;

new TimestreaminfluxdbDbInstanceMaintenanceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.get"></a>

```java
public TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TimestreaminfluxdbDbInstanceMaintenanceSchedule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>>

---


### TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference <a name="TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference;

new TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreaminfluxdbDbInstanceMaintenanceSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceMaintenanceSchedule">TimestreaminfluxdbDbInstanceMaintenanceSchedule</a>

---


### TimestreaminfluxdbDbInstanceTimeoutsOutputReference <a name="TimestreaminfluxdbDbInstanceTimeoutsOutputReference" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.timestreaminfluxdb_db_instance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference;

new TimestreaminfluxdbDbInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|TimestreaminfluxdbDbInstanceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

---



