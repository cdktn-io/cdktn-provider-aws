# `odbAutonomousDatabase` Submodule <a name="`odbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.odbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbAutonomousDatabase <a name="OdbAutonomousDatabase" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabase;

OdbAutonomousDatabase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .adminPassword(java.lang.String)
//  .adminPasswordSource(IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSource>)
//  .adminPasswordWo(java.lang.String)
//  .adminPasswordWoVersion(java.lang.Number)
//  .allowlistedIps(java.util.List<java.lang.String>)
//  .autonomousMaintenanceScheduleType(java.lang.String)
//  .autoRefreshFrequencyInSeconds(java.lang.Number)
//  .autoRefreshPointLagInSeconds(java.lang.Number)
//  .backupRetentionPeriodInDays(java.lang.Number)
//  .byolComputeCountLimit(java.lang.Number)
//  .characterSet(java.lang.String)
//  .computeCount(java.lang.Number)
//  .cpuCoreCount(java.lang.Number)
//  .customerContactsToSendToOci(IResolvable|java.util.List<OdbAutonomousDatabaseCustomerContactsToSendToOci>)
//  .databaseEdition(java.lang.String)
//  .dataStorageSizeInGbs(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbName(java.lang.String)
//  .dbToolsDetails(IResolvable|java.util.List<OdbAutonomousDatabaseDbToolsDetails>)
//  .dbVersion(java.lang.String)
//  .dbWorkload(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionKeyProvider(java.lang.String)
//  .isAutoScalingEnabled(java.lang.Boolean|IResolvable)
//  .isAutoScalingForStorageEnabled(java.lang.Boolean|IResolvable)
//  .isBackupRetentionLocked(java.lang.Boolean|IResolvable)
//  .isLocalDataGuardEnabled(java.lang.Boolean|IResolvable)
//  .isMtlsConnectionRequired(java.lang.Boolean|IResolvable)
//  .isRefreshableClone(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .localAdgAutoFailoverMaxDataLossLimit(java.lang.Number)
//  .longTermBackupSchedule(IResolvable|java.util.List<OdbAutonomousDatabaseLongTermBackupSchedule>)
//  .ncharacterSet(java.lang.String)
//  .odbNetworkId(java.lang.String)
//  .openMode(java.lang.String)
//  .permissionLevel(java.lang.String)
//  .privateEndpointIp(java.lang.String)
//  .privateEndpointLabel(java.lang.String)
//  .refreshableMode(java.lang.String)
//  .region(java.lang.String)
//  .resourcePoolLeaderId(java.lang.String)
//  .resourcePoolSummary(IResolvable|java.util.List<OdbAutonomousDatabaseResourcePoolSummary>)
//  .scheduledOperations(IResolvable|java.util.List<OdbAutonomousDatabaseScheduledOperations>)
//  .source(java.lang.String)
//  .sourceConfiguration(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfiguration>)
//  .standbyAllowlistedIps(java.util.List<java.lang.String>)
//  .standbyAllowlistedIpsSource(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeOfAutoRefreshStart(java.lang.String)
//  .timeouts(OdbAutonomousDatabaseTimeouts)
//  .transportableTablespace(IResolvable|java.util.List<OdbAutonomousDatabaseTransportableTablespace>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Password for the ADMIN user. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordSource">adminPasswordSource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>></code> | admin_password_source block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWo">adminPasswordWo</a></code> | <code>java.lang.String</code> | Password for the ADMIN user. This write-only value is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWoVersion">adminPasswordWoVersion</a></code> | <code>java.lang.Number</code> | Arbitrary version used to trigger an ADMIN password update. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.allowlistedIps">allowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | IP addresses allowed to access the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>java.lang.String</code> | Maintenance schedule type for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Frequency at which a refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | Time lag between a refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Retention period for automatic backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>java.lang.Number</code> | Maximum compute capacity under the bring-your-own-license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Compute capacity in ECPUs or OCPUs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Number of CPU cores allocated to the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>></code> | customer_contacts_to_send_to_oci block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | Oracle Database edition. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Data volume size in GB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Data volume size in TB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Name of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbToolsDetails">dbToolsDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>></code> | db_tools_details block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Oracle Database software version. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Intended database workload. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly name for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.encryptionKeyProvider">encryptionKeyProvider</a></code> | <code>java.lang.String</code> | Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether automatic compute scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether automatic storage scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isBackupRetentionLocked">isBackupRetentionLocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the backup retention period is locked. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether local Oracle Data Guard is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether mutual TLS authentication is required. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the Autonomous Database is a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | ARN of the AWS KMS key used to encrypt the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Oracle license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | Maximum data-loss limit for automatic local Data Guard failover, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>></code> | long_term_backup_schedule block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | National character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | ID of the associated ODB network. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.openMode">openMode</a></code> | <code>java.lang.String</code> | Open mode of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | Permission level of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | Private endpoint IP address. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | Private endpoint label. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | Refresh mode of a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>java.lang.String</code> | ID of the resource-pool leader Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolSummary">resourcePoolSummary</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>></code> | resource_pool_summary block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scheduledOperations">scheduledOperations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>></code> | scheduled_operations block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Source from which to create the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.sourceConfiguration">sourceConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>></code> | source_configuration block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIps">standbyAllowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | IP addresses allowed to access the standby Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIpsSource">standbyAllowlistedIpsSource</a></code> | <code>java.lang.String</code> | Source of the standby allowlisted IP addresses. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | Date and time when automatic refresh begins. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.transportableTablespace">transportableTablespace</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>></code> | transportable_tablespace block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Password for the ADMIN user.

This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}

---

##### `adminPasswordSource`<sup>Optional</sup> <a name="adminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordSource"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>>

admin_password_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}

---

##### `adminPasswordWo`<sup>Optional</sup> <a name="adminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWo"></a>

- *Type:* java.lang.String

Password for the ADMIN user. This write-only value is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}

---

##### `adminPasswordWoVersion`<sup>Optional</sup> <a name="adminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWoVersion"></a>

- *Type:* java.lang.Number

Arbitrary version used to trigger an ADMIN password update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}

---

##### `allowlistedIps`<sup>Optional</sup> <a name="allowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.allowlistedIps"></a>

- *Type:* java.util.List<java.lang.String>

IP addresses allowed to access the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}

---

##### `autonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType"></a>

- *Type:* java.lang.String

Maintenance schedule type for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds"></a>

- *Type:* java.lang.Number

Frequency at which a refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds"></a>

- *Type:* java.lang.Number

Time lag between a refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `backupRetentionPeriodInDays`<sup>Optional</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays"></a>

- *Type:* java.lang.Number

Retention period for automatic backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}

---

##### `byolComputeCountLimit`<sup>Optional</sup> <a name="byolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.byolComputeCountLimit"></a>

- *Type:* java.lang.Number

Maximum compute capacity under the bring-your-own-license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.characterSet"></a>

- *Type:* java.lang.String

Character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

Compute capacity in ECPUs or OCPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Number of CPU cores allocated to the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}

---

##### `customerContactsToSendToOci`<sup>Optional</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.customerContactsToSendToOci"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>>

customer_contacts_to_send_to_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.databaseEdition"></a>

- *Type:* java.lang.String

Oracle Database edition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}

---

##### `dataStorageSizeInGbs`<sup>Optional</sup> <a name="dataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInGbs"></a>

- *Type:* java.lang.Number

Data volume size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* java.lang.Number

Data volume size in TB.

Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Name of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}

---

##### `dbToolsDetails`<sup>Optional</sup> <a name="dbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbToolsDetails"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>>

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbVersion"></a>

- *Type:* java.lang.String

Oracle Database software version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbWorkload"></a>

- *Type:* java.lang.String

Intended database workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-friendly name for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}

---

##### `encryptionKeyProvider`<sup>Optional</sup> <a name="encryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.encryptionKeyProvider"></a>

- *Type:* java.lang.String

Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether automatic compute scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}

---

##### `isAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether automatic storage scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}

---

##### `isBackupRetentionLocked`<sup>Optional</sup> <a name="isBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isBackupRetentionLocked"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the backup retention period is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}

---

##### `isLocalDataGuardEnabled`<sup>Optional</sup> <a name="isLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether local Oracle Data Guard is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}

---

##### `isMtlsConnectionRequired`<sup>Optional</sup> <a name="isMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether mutual TLS authentication is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}

---

##### `isRefreshableClone`<sup>Optional</sup> <a name="isRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isRefreshableClone"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the Autonomous Database is a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

ARN of the AWS KMS key used to encrypt the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Oracle license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit"></a>

- *Type:* java.lang.Number

Maximum data-loss limit for automatic local Data Guard failover, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}

---

##### `longTermBackupSchedule`<sup>Optional</sup> <a name="longTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.longTermBackupSchedule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>>

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.ncharacterSet"></a>

- *Type:* java.lang.String

National character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.odbNetworkId"></a>

- *Type:* java.lang.String

ID of the associated ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.openMode"></a>

- *Type:* java.lang.String

Open mode of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.permissionLevel"></a>

- *Type:* java.lang.String

Permission level of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointIp"></a>

- *Type:* java.lang.String

Private endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointLabel"></a>

- *Type:* java.lang.String

Private endpoint label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.refreshableMode"></a>

- *Type:* java.lang.String

Refresh mode of a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}

---

##### `resourcePoolLeaderId`<sup>Optional</sup> <a name="resourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId"></a>

- *Type:* java.lang.String

ID of the resource-pool leader Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}

---

##### `resourcePoolSummary`<sup>Optional</sup> <a name="resourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolSummary"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>>

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}

---

##### `scheduledOperations`<sup>Optional</sup> <a name="scheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scheduledOperations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>>

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Source from which to create the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.sourceConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>>

source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}

---

##### `standbyAllowlistedIps`<sup>Optional</sup> <a name="standbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIps"></a>

- *Type:* java.util.List<java.lang.String>

IP addresses allowed to access the standby Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}

---

##### `standbyAllowlistedIpsSource`<sup>Optional</sup> <a name="standbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIpsSource"></a>

- *Type:* java.lang.String

Source of the standby allowlisted IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}.

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart"></a>

- *Type:* java.lang.String

Date and time when automatic refresh begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}

---

##### `transportableTablespace`<sup>Optional</sup> <a name="transportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.transportableTablespace"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>>

transportable_tablespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource">putAdminPasswordSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci">putCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails">putDbToolsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule">putLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary">putResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations">putScheduledOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration">putSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace">putTransportableTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource">resetAdminPasswordSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo">resetAdminPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion">resetAdminPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps">resetAllowlistedIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType">resetAutonomousMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds">resetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds">resetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays">resetBackupRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit">resetByolComputeCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci">resetCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition">resetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs">resetDataStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails">resetDbToolsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload">resetDbWorkload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider">resetEncryptionKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled">resetIsAutoScalingForStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked">resetIsBackupRetentionLocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled">resetIsLocalDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired">resetIsMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone">resetIsRefreshableClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit">resetLocalAdgAutoFailoverMaxDataLossLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule">resetLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode">resetOpenMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel">resetPermissionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel">resetPrivateEndpointLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode">resetRefreshableMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId">resetResourcePoolLeaderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary">resetResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations">resetScheduledOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration">resetSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps">resetStandbyAllowlistedIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource">resetStandbyAllowlistedIpsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart">resetTimeOfAutoRefreshStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace">resetTransportableTablespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminPasswordSource` <a name="putAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource"></a>

```java
public void putAdminPasswordSource(IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>>

---

##### `putCustomerContactsToSendToOci` <a name="putCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci"></a>

```java
public void putCustomerContactsToSendToOci(IResolvable|java.util.List<OdbAutonomousDatabaseCustomerContactsToSendToOci> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>>

---

##### `putDbToolsDetails` <a name="putDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails"></a>

```java
public void putDbToolsDetails(IResolvable|java.util.List<OdbAutonomousDatabaseDbToolsDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>>

---

##### `putLongTermBackupSchedule` <a name="putLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule"></a>

```java
public void putLongTermBackupSchedule(IResolvable|java.util.List<OdbAutonomousDatabaseLongTermBackupSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>>

---

##### `putResourcePoolSummary` <a name="putResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary"></a>

```java
public void putResourcePoolSummary(IResolvable|java.util.List<OdbAutonomousDatabaseResourcePoolSummary> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>>

---

##### `putScheduledOperations` <a name="putScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations"></a>

```java
public void putScheduledOperations(IResolvable|java.util.List<OdbAutonomousDatabaseScheduledOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>>

---

##### `putSourceConfiguration` <a name="putSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration"></a>

```java
public void putSourceConfiguration(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts"></a>

```java
public void putTimeouts(OdbAutonomousDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `putTransportableTablespace` <a name="putTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace"></a>

```java
public void putTransportableTablespace(IResolvable|java.util.List<OdbAutonomousDatabaseTransportableTablespace> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminPasswordSource` <a name="resetAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource"></a>

```java
public void resetAdminPasswordSource()
```

##### `resetAdminPasswordWo` <a name="resetAdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo"></a>

```java
public void resetAdminPasswordWo()
```

##### `resetAdminPasswordWoVersion` <a name="resetAdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion"></a>

```java
public void resetAdminPasswordWoVersion()
```

##### `resetAllowlistedIps` <a name="resetAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps"></a>

```java
public void resetAllowlistedIps()
```

##### `resetAutonomousMaintenanceScheduleType` <a name="resetAutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```java
public void resetAutonomousMaintenanceScheduleType()
```

##### `resetAutoRefreshFrequencyInSeconds` <a name="resetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```java
public void resetAutoRefreshFrequencyInSeconds()
```

##### `resetAutoRefreshPointLagInSeconds` <a name="resetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```java
public void resetAutoRefreshPointLagInSeconds()
```

##### `resetBackupRetentionPeriodInDays` <a name="resetBackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```java
public void resetBackupRetentionPeriodInDays()
```

##### `resetByolComputeCountLimit` <a name="resetByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit"></a>

```java
public void resetByolComputeCountLimit()
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet"></a>

```java
public void resetCharacterSet()
```

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetCustomerContactsToSendToOci` <a name="resetCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci"></a>

```java
public void resetCustomerContactsToSendToOci()
```

##### `resetDatabaseEdition` <a name="resetDatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition"></a>

```java
public void resetDatabaseEdition()
```

##### `resetDataStorageSizeInGbs` <a name="resetDataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs"></a>

```java
public void resetDataStorageSizeInGbs()
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```java
public void resetDataStorageSizeInTbs()
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDbToolsDetails` <a name="resetDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails"></a>

```java
public void resetDbToolsDetails()
```

##### `resetDbVersion` <a name="resetDbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion"></a>

```java
public void resetDbVersion()
```

##### `resetDbWorkload` <a name="resetDbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload"></a>

```java
public void resetDbWorkload()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEncryptionKeyProvider` <a name="resetEncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider"></a>

```java
public void resetEncryptionKeyProvider()
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```java
public void resetIsAutoScalingEnabled()
```

##### `resetIsAutoScalingForStorageEnabled` <a name="resetIsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```java
public void resetIsAutoScalingForStorageEnabled()
```

##### `resetIsBackupRetentionLocked` <a name="resetIsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked"></a>

```java
public void resetIsBackupRetentionLocked()
```

##### `resetIsLocalDataGuardEnabled` <a name="resetIsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```java
public void resetIsLocalDataGuardEnabled()
```

##### `resetIsMtlsConnectionRequired` <a name="resetIsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```java
public void resetIsMtlsConnectionRequired()
```

##### `resetIsRefreshableClone` <a name="resetIsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone"></a>

```java
public void resetIsRefreshableClone()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetLocalAdgAutoFailoverMaxDataLossLimit` <a name="resetLocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```java
public void resetLocalAdgAutoFailoverMaxDataLossLimit()
```

##### `resetLongTermBackupSchedule` <a name="resetLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule"></a>

```java
public void resetLongTermBackupSchedule()
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet"></a>

```java
public void resetNcharacterSet()
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId"></a>

```java
public void resetOdbNetworkId()
```

##### `resetOpenMode` <a name="resetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode"></a>

```java
public void resetOpenMode()
```

##### `resetPermissionLevel` <a name="resetPermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel"></a>

```java
public void resetPermissionLevel()
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp"></a>

```java
public void resetPrivateEndpointIp()
```

##### `resetPrivateEndpointLabel` <a name="resetPrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel"></a>

```java
public void resetPrivateEndpointLabel()
```

##### `resetRefreshableMode` <a name="resetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode"></a>

```java
public void resetRefreshableMode()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourcePoolLeaderId` <a name="resetResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId"></a>

```java
public void resetResourcePoolLeaderId()
```

##### `resetResourcePoolSummary` <a name="resetResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary"></a>

```java
public void resetResourcePoolSummary()
```

##### `resetScheduledOperations` <a name="resetScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations"></a>

```java
public void resetScheduledOperations()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceConfiguration` <a name="resetSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration"></a>

```java
public void resetSourceConfiguration()
```

##### `resetStandbyAllowlistedIps` <a name="resetStandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps"></a>

```java
public void resetStandbyAllowlistedIps()
```

##### `resetStandbyAllowlistedIpsSource` <a name="resetStandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource"></a>

```java
public void resetStandbyAllowlistedIpsSource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeOfAutoRefreshStart` <a name="resetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```java
public void resetTimeOfAutoRefreshStart()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransportableTablespace` <a name="resetTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace"></a>

```java
public void resetTransportableTablespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabase;

OdbAutonomousDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabase;

OdbAutonomousDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabase;

OdbAutonomousDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabase;

OdbAutonomousDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OdbAutonomousDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OdbAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actualUsedDataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource">adminPasswordSource</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs">allocatedStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails">dbToolsDetails</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress">percentProgress</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint">privateEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations">scheduledOperations</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace">transportableTablespace</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput">adminPasswordSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput">adminPasswordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput">adminPasswordWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput">allowlistedIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">autonomousMaintenanceScheduleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">autoRefreshFrequencyInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">autoRefreshPointLagInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput">byolComputeCountLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput">customerContactsToSendToOciInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput">databaseEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput">dataStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput">dbToolsDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput">encryptionKeyProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">isAutoScalingForStorageEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput">isBackupRetentionLockedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput">isLocalDataGuardEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput">isMtlsConnectionRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput">isRefreshableCloneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">localAdgAutoFailoverMaxDataLossLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput">longTermBackupScheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput">openModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput">permissionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput">privateEndpointLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput">refreshableModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput">resourcePoolLeaderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput">resourcePoolSummaryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput">scheduledOperationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput">sourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput">standbyAllowlistedIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput">standbyAllowlistedIpsSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput">timeOfAutoRefreshStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput">transportableTablespaceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo">adminPasswordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion">adminPasswordWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps">allowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider">encryptionKeyProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked">isBackupRetentionLocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps">standbyAllowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource">standbyAllowlistedIpsSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```java
public java.lang.Number getActualUsedDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `adminPasswordSource`<sup>Required</sup> <a name="adminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource"></a>

```java
public OdbAutonomousDatabaseAdminPasswordSourceList getAdminPasswordSource();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `allocatedStorageSizeInTbs`<sup>Required</sup> <a name="allocatedStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```java
public java.lang.Number getAllocatedStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```java
public java.util.List<java.lang.String> getAvailableUpgradeVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customerContactsToSendToOci`<sup>Required</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```java
public OdbAutonomousDatabaseCustomerContactsToSendToOciList getCustomerContactsToSendToOci();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `dbToolsDetails`<sup>Required</sup> <a name="dbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails"></a>

```java
public OdbAutonomousDatabaseDbToolsDetailsList getDbToolsDetails();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `longTermBackupSchedule`<sup>Required</sup> <a name="longTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```java
public OdbAutonomousDatabaseLongTermBackupScheduleList getLongTermBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```java
public java.lang.String getOciResourceAnchorName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn"></a>

```java
public java.lang.String getOdbNetworkArn();
```

- *Type:* java.lang.String

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress"></a>

```java
public java.lang.Number getPercentProgress();
```

- *Type:* java.lang.Number

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint"></a>

```java
public java.lang.String getPrivateEndpoint();
```

- *Type:* java.lang.String

---

##### `resourcePoolSummary`<sup>Required</sup> <a name="resourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary"></a>

```java
public OdbAutonomousDatabaseResourcePoolSummaryList getResourcePoolSummary();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `scheduledOperations`<sup>Required</sup> <a name="scheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations"></a>

```java
public OdbAutonomousDatabaseScheduledOperationsList getScheduledOperations();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```java
public java.lang.String getServiceConsoleUrl();
```

- *Type:* java.lang.String

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationList getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a>

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```java
public java.lang.String getSqlWebDeveloperUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts"></a>

```java
public OdbAutonomousDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `transportableTablespace`<sup>Required</sup> <a name="transportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace"></a>

```java
public OdbAutonomousDatabaseTransportableTablespaceList getTransportableTablespace();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminPasswordSourceInput`<sup>Optional</sup> <a name="adminPasswordSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSource> getAdminPasswordSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>>

---

##### `adminPasswordWoInput`<sup>Optional</sup> <a name="adminPasswordWoInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput"></a>

```java
public java.lang.String getAdminPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `adminPasswordWoVersionInput`<sup>Optional</sup> <a name="adminPasswordWoVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput"></a>

```java
public java.lang.Number getAdminPasswordWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `allowlistedIpsInput`<sup>Optional</sup> <a name="allowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput"></a>

```java
public java.util.List<java.lang.String> getAllowlistedIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autonomousMaintenanceScheduleTypeInput`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```java
public java.lang.String getAutonomousMaintenanceScheduleTypeInput();
```

- *Type:* java.lang.String

---

##### `autoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="autoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `autoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="autoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `byolComputeCountLimitInput`<sup>Optional</sup> <a name="byolComputeCountLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```java
public java.lang.Number getByolComputeCountLimitInput();
```

- *Type:* java.lang.Number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `customerContactsToSendToOciInput`<sup>Optional</sup> <a name="customerContactsToSendToOciInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseCustomerContactsToSendToOci> getCustomerContactsToSendToOciInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>>

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput"></a>

```java
public java.lang.String getDatabaseEditionInput();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInGbsInput`<sup>Optional</sup> <a name="dataStorageSizeInGbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput"></a>

```java
public java.lang.Number getDataStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```java
public java.lang.Number getDataStorageSizeInTbsInput();
```

- *Type:* java.lang.Number

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbToolsDetailsInput`<sup>Optional</sup> <a name="dbToolsDetailsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseDbToolsDetails> getDbToolsDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput"></a>

```java
public java.lang.String getDbWorkloadInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyProviderInput`<sup>Optional</sup> <a name="encryptionKeyProviderInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput"></a>

```java
public java.lang.String getEncryptionKeyProviderInput();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isAutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingForStorageEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isBackupRetentionLockedInput`<sup>Optional</sup> <a name="isBackupRetentionLockedInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsBackupRetentionLockedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isLocalDataGuardEnabledInput`<sup>Optional</sup> <a name="isLocalDataGuardEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsLocalDataGuardEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isMtlsConnectionRequiredInput`<sup>Optional</sup> <a name="isMtlsConnectionRequiredInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getIsMtlsConnectionRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRefreshableCloneInput`<sup>Optional</sup> <a name="isRefreshableCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRefreshableCloneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `localAdgAutoFailoverMaxDataLossLimitInput`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimitInput();
```

- *Type:* java.lang.Number

---

##### `longTermBackupScheduleInput`<sup>Optional</sup> <a name="longTermBackupScheduleInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseLongTermBackupSchedule> getLongTermBackupScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>>

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput"></a>

```java
public java.lang.String getNcharacterSetInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput"></a>

```java
public java.lang.String getOdbNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `openModeInput`<sup>Optional</sup> <a name="openModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput"></a>

```java
public java.lang.String getOpenModeInput();
```

- *Type:* java.lang.String

---

##### `permissionLevelInput`<sup>Optional</sup> <a name="permissionLevelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput"></a>

```java
public java.lang.String getPermissionLevelInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput"></a>

```java
public java.lang.String getPrivateEndpointIpInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabelInput`<sup>Optional</sup> <a name="privateEndpointLabelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput"></a>

```java
public java.lang.String getPrivateEndpointLabelInput();
```

- *Type:* java.lang.String

---

##### `refreshableModeInput`<sup>Optional</sup> <a name="refreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput"></a>

```java
public java.lang.String getRefreshableModeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourcePoolLeaderIdInput`<sup>Optional</sup> <a name="resourcePoolLeaderIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```java
public java.lang.String getResourcePoolLeaderIdInput();
```

- *Type:* java.lang.String

---

##### `resourcePoolSummaryInput`<sup>Optional</sup> <a name="resourcePoolSummaryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseResourcePoolSummary> getResourcePoolSummaryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>>

---

##### `scheduledOperationsInput`<sup>Optional</sup> <a name="scheduledOperationsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseScheduledOperations> getScheduledOperationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>>

---

##### `sourceConfigurationInput`<sup>Optional</sup> <a name="sourceConfigurationInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfiguration> getSourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `standbyAllowlistedIpsInput`<sup>Optional</sup> <a name="standbyAllowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput"></a>

```java
public java.util.List<java.lang.String> getStandbyAllowlistedIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `standbyAllowlistedIpsSourceInput`<sup>Optional</sup> <a name="standbyAllowlistedIpsSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput"></a>

```java
public java.lang.String getStandbyAllowlistedIpsSourceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="timeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```java
public java.lang.String getTimeOfAutoRefreshStartInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput"></a>

```java
public IResolvable|OdbAutonomousDatabaseTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `transportableTablespaceInput`<sup>Optional</sup> <a name="transportableTablespaceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseTransportableTablespace> getTransportableTablespaceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### ~~`adminPasswordWo`~~<sup>Required</sup> <a name="adminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getAdminPasswordWo();
```

- *Type:* java.lang.String

---

##### `adminPasswordWoVersion`<sup>Required</sup> <a name="adminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion"></a>

```java
public java.lang.Number getAdminPasswordWoVersion();
```

- *Type:* java.lang.Number

---

##### `allowlistedIps`<sup>Required</sup> <a name="allowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autonomousMaintenanceScheduleType`<sup>Required</sup> <a name="autonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```java
public java.lang.String getAutonomousMaintenanceScheduleType();
```

- *Type:* java.lang.String

---

##### `autoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSeconds();
```

- *Type:* java.lang.Number

---

##### `autoRefreshPointLagInSeconds`<sup>Required</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSeconds();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `byolComputeCountLimit`<sup>Required</sup> <a name="byolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```java
public java.lang.Number getByolComputeCountLimit();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```java
public java.lang.Number getDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `encryptionKeyProvider`<sup>Required</sup> <a name="encryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```java
public java.lang.String getEncryptionKeyProvider();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isAutoScalingForStorageEnabled`<sup>Required</sup> <a name="isAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isBackupRetentionLocked`<sup>Required</sup> <a name="isBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```java
public java.lang.Boolean|IResolvable getIsBackupRetentionLocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsLocalDataGuardEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isMtlsConnectionRequired`<sup>Required</sup> <a name="isMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone"></a>

```java
public java.lang.Boolean|IResolvable getIsRefreshableClone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimit();
```

- *Type:* java.lang.Number

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourcePoolLeaderId`<sup>Required</sup> <a name="resourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```java
public java.lang.String getResourcePoolLeaderId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `standbyAllowlistedIps`<sup>Required</sup> <a name="standbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```java
public java.util.List<java.lang.String> getStandbyAllowlistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `standbyAllowlistedIpsSource`<sup>Required</sup> <a name="standbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```java
public java.lang.String getStandbyAllowlistedIpsSource();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeOfAutoRefreshStart`<sup>Required</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```java
public java.lang.String getTimeOfAutoRefreshStart();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OdbAutonomousDatabaseAdminPasswordSource <a name="OdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseAdminPasswordSource;

OdbAutonomousDatabaseAdminPasswordSource.builder()
//  .customerManagedAwsSecret(IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret">customerManagedAwsSecret</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>></code> | customer_managed_aws_secret block. |

---

##### `customerManagedAwsSecret`<sup>Optional</sup> <a name="customerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret> getCustomerManagedAwsSecret();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>>

customer_managed_aws_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#customer_managed_aws_secret OdbAutonomousDatabase#customer_managed_aws_secret}

---

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret;

OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.builder()
    .externalIdType(java.lang.String)
    .iamRoleArn(java.lang.String)
    .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType">externalIdType</a></code> | <code>java.lang.String</code> | Type of OCI identifier supplied as the external ID when OCI assumes the IAM role. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | ARN of the customer-managed IAM role OCI assumes to retrieve the secret. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | ARN of the AWS Secrets Manager secret that contains the ADMIN password. |

---

##### `externalIdType`<sup>Required</sup> <a name="externalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType"></a>

```java
public java.lang.String getExternalIdType();
```

- *Type:* java.lang.String

Type of OCI identifier supplied as the external ID when OCI assumes the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#external_id_type OdbAutonomousDatabase#external_id_type}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

ARN of the customer-managed IAM role OCI assumes to retrieve the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#iam_role_arn OdbAutonomousDatabase#iam_role_arn}

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

ARN of the AWS Secrets Manager secret that contains the ADMIN password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#secret_arn OdbAutonomousDatabase#secret_arn}

---

### OdbAutonomousDatabaseConfig <a name="OdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseConfig;

OdbAutonomousDatabaseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .adminPassword(java.lang.String)
//  .adminPasswordSource(IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSource>)
//  .adminPasswordWo(java.lang.String)
//  .adminPasswordWoVersion(java.lang.Number)
//  .allowlistedIps(java.util.List<java.lang.String>)
//  .autonomousMaintenanceScheduleType(java.lang.String)
//  .autoRefreshFrequencyInSeconds(java.lang.Number)
//  .autoRefreshPointLagInSeconds(java.lang.Number)
//  .backupRetentionPeriodInDays(java.lang.Number)
//  .byolComputeCountLimit(java.lang.Number)
//  .characterSet(java.lang.String)
//  .computeCount(java.lang.Number)
//  .cpuCoreCount(java.lang.Number)
//  .customerContactsToSendToOci(IResolvable|java.util.List<OdbAutonomousDatabaseCustomerContactsToSendToOci>)
//  .databaseEdition(java.lang.String)
//  .dataStorageSizeInGbs(java.lang.Number)
//  .dataStorageSizeInTbs(java.lang.Number)
//  .dbName(java.lang.String)
//  .dbToolsDetails(IResolvable|java.util.List<OdbAutonomousDatabaseDbToolsDetails>)
//  .dbVersion(java.lang.String)
//  .dbWorkload(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionKeyProvider(java.lang.String)
//  .isAutoScalingEnabled(java.lang.Boolean|IResolvable)
//  .isAutoScalingForStorageEnabled(java.lang.Boolean|IResolvable)
//  .isBackupRetentionLocked(java.lang.Boolean|IResolvable)
//  .isLocalDataGuardEnabled(java.lang.Boolean|IResolvable)
//  .isMtlsConnectionRequired(java.lang.Boolean|IResolvable)
//  .isRefreshableClone(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .localAdgAutoFailoverMaxDataLossLimit(java.lang.Number)
//  .longTermBackupSchedule(IResolvable|java.util.List<OdbAutonomousDatabaseLongTermBackupSchedule>)
//  .ncharacterSet(java.lang.String)
//  .odbNetworkId(java.lang.String)
//  .openMode(java.lang.String)
//  .permissionLevel(java.lang.String)
//  .privateEndpointIp(java.lang.String)
//  .privateEndpointLabel(java.lang.String)
//  .refreshableMode(java.lang.String)
//  .region(java.lang.String)
//  .resourcePoolLeaderId(java.lang.String)
//  .resourcePoolSummary(IResolvable|java.util.List<OdbAutonomousDatabaseResourcePoolSummary>)
//  .scheduledOperations(IResolvable|java.util.List<OdbAutonomousDatabaseScheduledOperations>)
//  .source(java.lang.String)
//  .sourceConfiguration(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfiguration>)
//  .standbyAllowlistedIps(java.util.List<java.lang.String>)
//  .standbyAllowlistedIpsSource(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeOfAutoRefreshStart(java.lang.String)
//  .timeouts(OdbAutonomousDatabaseTimeouts)
//  .transportableTablespace(IResolvable|java.util.List<OdbAutonomousDatabaseTransportableTablespace>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Password for the ADMIN user. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource">adminPasswordSource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>></code> | admin_password_source block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo">adminPasswordWo</a></code> | <code>java.lang.String</code> | Password for the ADMIN user. This write-only value is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion">adminPasswordWoVersion</a></code> | <code>java.lang.Number</code> | Arbitrary version used to trigger an ADMIN password update. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps">allowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | IP addresses allowed to access the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>java.lang.String</code> | Maintenance schedule type for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Frequency at which a refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | Time lag between a refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Retention period for automatic backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>java.lang.Number</code> | Maximum compute capacity under the bring-your-own-license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Compute capacity in ECPUs or OCPUs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Number of CPU cores allocated to the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>></code> | customer_contacts_to_send_to_oci block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | Oracle Database edition. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Data volume size in GB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Data volume size in TB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Name of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails">dbToolsDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>></code> | db_tools_details block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Oracle Database software version. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Intended database workload. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-friendly name for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider">encryptionKeyProvider</a></code> | <code>java.lang.String</code> | Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether automatic compute scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether automatic storage scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked">isBackupRetentionLocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the backup retention period is locked. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether local Oracle Data Guard is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether mutual TLS authentication is required. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the Autonomous Database is a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | ARN of the AWS KMS key used to encrypt the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Oracle license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | Maximum data-loss limit for automatic local Data Guard failover, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>></code> | long_term_backup_schedule block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | National character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | ID of the associated ODB network. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode">openMode</a></code> | <code>java.lang.String</code> | Open mode of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | Permission level of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | Private endpoint IP address. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | Private endpoint label. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | Refresh mode of a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>java.lang.String</code> | ID of the resource-pool leader Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>></code> | resource_pool_summary block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations">scheduledOperations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>></code> | scheduled_operations block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source">source</a></code> | <code>java.lang.String</code> | Source from which to create the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration">sourceConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>></code> | source_configuration block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps">standbyAllowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | IP addresses allowed to access the standby Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource">standbyAllowlistedIpsSource</a></code> | <code>java.lang.String</code> | Source of the standby allowlisted IP addresses. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | Date and time when automatic refresh begins. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace">transportableTablespace</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>></code> | transportable_tablespace block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Password for the ADMIN user.

This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}

---

##### `adminPasswordSource`<sup>Optional</sup> <a name="adminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSource> getAdminPasswordSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>>

admin_password_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}

---

##### `adminPasswordWo`<sup>Optional</sup> <a name="adminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo"></a>

```java
public java.lang.String getAdminPasswordWo();
```

- *Type:* java.lang.String

Password for the ADMIN user. This write-only value is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}

---

##### `adminPasswordWoVersion`<sup>Optional</sup> <a name="adminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion"></a>

```java
public java.lang.Number getAdminPasswordWoVersion();
```

- *Type:* java.lang.Number

Arbitrary version used to trigger an ADMIN password update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}

---

##### `allowlistedIps`<sup>Optional</sup> <a name="allowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedIps();
```

- *Type:* java.util.List<java.lang.String>

IP addresses allowed to access the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}

---

##### `autonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```java
public java.lang.String getAutonomousMaintenanceScheduleType();
```

- *Type:* java.lang.String

Maintenance schedule type for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSeconds();
```

- *Type:* java.lang.Number

Frequency at which a refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSeconds();
```

- *Type:* java.lang.Number

Time lag between a refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `backupRetentionPeriodInDays`<sup>Optional</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Retention period for automatic backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}

---

##### `byolComputeCountLimit`<sup>Optional</sup> <a name="byolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```java
public java.lang.Number getByolComputeCountLimit();
```

- *Type:* java.lang.Number

Maximum compute capacity under the bring-your-own-license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

Character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Compute capacity in ECPUs or OCPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Number of CPU cores allocated to the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}

---

##### `customerContactsToSendToOci`<sup>Optional</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseCustomerContactsToSendToOci> getCustomerContactsToSendToOci();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>>

customer_contacts_to_send_to_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

Oracle Database edition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}

---

##### `dataStorageSizeInGbs`<sup>Optional</sup> <a name="dataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs"></a>

```java
public java.lang.Number getDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

Data volume size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

Data volume size in TB.

Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Name of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}

---

##### `dbToolsDetails`<sup>Optional</sup> <a name="dbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseDbToolsDetails> getDbToolsDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>>

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Oracle Database software version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

Intended database workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-friendly name for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}

---

##### `encryptionKeyProvider`<sup>Optional</sup> <a name="encryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider"></a>

```java
public java.lang.String getEncryptionKeyProvider();
```

- *Type:* java.lang.String

Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether automatic compute scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}

---

##### `isAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether automatic storage scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}

---

##### `isBackupRetentionLocked`<sup>Optional</sup> <a name="isBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked"></a>

```java
public java.lang.Boolean|IResolvable getIsBackupRetentionLocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the backup retention period is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}

---

##### `isLocalDataGuardEnabled`<sup>Optional</sup> <a name="isLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsLocalDataGuardEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether local Oracle Data Guard is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}

---

##### `isMtlsConnectionRequired`<sup>Optional</sup> <a name="isMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether mutual TLS authentication is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}

---

##### `isRefreshableClone`<sup>Optional</sup> <a name="isRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```java
public java.lang.Boolean|IResolvable getIsRefreshableClone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the Autonomous Database is a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

ARN of the AWS KMS key used to encrypt the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Oracle license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimit();
```

- *Type:* java.lang.Number

Maximum data-loss limit for automatic local Data Guard failover, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}

---

##### `longTermBackupSchedule`<sup>Optional</sup> <a name="longTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseLongTermBackupSchedule> getLongTermBackupSchedule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>>

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

National character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

ID of the associated ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

Open mode of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

Permission level of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

Private endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

Private endpoint label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

Refresh mode of a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}

---

##### `resourcePoolLeaderId`<sup>Optional</sup> <a name="resourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```java
public java.lang.String getResourcePoolLeaderId();
```

- *Type:* java.lang.String

ID of the resource-pool leader Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}

---

##### `resourcePoolSummary`<sup>Optional</sup> <a name="resourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseResourcePoolSummary> getResourcePoolSummary();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>>

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}

---

##### `scheduledOperations`<sup>Optional</sup> <a name="scheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseScheduledOperations> getScheduledOperations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>>

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Source from which to create the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfiguration> getSourceConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>>

source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}

---

##### `standbyAllowlistedIps`<sup>Optional</sup> <a name="standbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps"></a>

```java
public java.util.List<java.lang.String> getStandbyAllowlistedIps();
```

- *Type:* java.util.List<java.lang.String>

IP addresses allowed to access the standby Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}

---

##### `standbyAllowlistedIpsSource`<sup>Optional</sup> <a name="standbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource"></a>

```java
public java.lang.String getStandbyAllowlistedIpsSource();
```

- *Type:* java.lang.String

Source of the standby allowlisted IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}.

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```java
public java.lang.String getTimeOfAutoRefreshStart();
```

- *Type:* java.lang.String

Date and time when automatic refresh begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts"></a>

```java
public OdbAutonomousDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}

---

##### `transportableTablespace`<sup>Optional</sup> <a name="transportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseTransportableTablespace> getTransportableTablespace();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>>

transportable_tablespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}

---

### OdbAutonomousDatabaseCustomerContactsToSendToOci <a name="OdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseCustomerContactsToSendToOci;

OdbAutonomousDatabaseCustomerContactsToSendToOci.builder()
    .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the customer contact. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the customer contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#email OdbAutonomousDatabase#email}

---

### OdbAutonomousDatabaseDbToolsDetails <a name="OdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseDbToolsDetails;

OdbAutonomousDatabaseDbToolsDetails.builder()
//  .computeCount(java.lang.Number)
//  .isEnabled(java.lang.Boolean|IResolvable)
//  .maxIdleTimeInMinutes(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Compute capacity allocated to the database tool. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the database tool is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>java.lang.Number</code> | Maximum idle time before the database tool is shut down, in minutes. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name">name</a></code> | <code>java.lang.String</code> | Name of the database tool. |

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Compute capacity allocated to the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the database tool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_enabled OdbAutonomousDatabase#is_enabled}

---

##### `maxIdleTimeInMinutes`<sup>Optional</sup> <a name="maxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeInMinutes();
```

- *Type:* java.lang.Number

Maximum idle time before the database tool is shut down, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#max_idle_time_in_minutes OdbAutonomousDatabase#max_idle_time_in_minutes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#name OdbAutonomousDatabase#name}

---

### OdbAutonomousDatabaseLongTermBackupSchedule <a name="OdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseLongTermBackupSchedule;

OdbAutonomousDatabaseLongTermBackupSchedule.builder()
//  .isDisabled(java.lang.Boolean|IResolvable)
//  .repeatCadence(java.lang.String)
//  .retentionPeriodInDays(java.lang.Number)
//  .timeOfBackup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the long-term backup schedule is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">repeatCadence</a></code> | <code>java.lang.String</code> | Cadence at which long-term backups are taken. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Retention period for long-term backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">timeOfBackup</a></code> | <code>java.lang.String</code> | Date and time at which the long-term backup is taken. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the long-term backup schedule is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `repeatCadence`<sup>Optional</sup> <a name="repeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```java
public java.lang.String getRepeatCadence();
```

- *Type:* java.lang.String

Cadence at which long-term backups are taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#repeat_cadence OdbAutonomousDatabase#repeat_cadence}

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Retention period for long-term backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#retention_period_in_days OdbAutonomousDatabase#retention_period_in_days}

---

##### `timeOfBackup`<sup>Optional</sup> <a name="timeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```java
public java.lang.String getTimeOfBackup();
```

- *Type:* java.lang.String

Date and time at which the long-term backup is taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#time_of_backup OdbAutonomousDatabase#time_of_backup}

---

### OdbAutonomousDatabaseResourcePoolSummary <a name="OdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseResourcePoolSummary;

OdbAutonomousDatabaseResourcePoolSummary.builder()
//  .isDisabled(java.lang.Boolean|IResolvable)
//  .poolSize(java.lang.Number)
//  .poolStorageSizeInTbs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the resource pool is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | Number of Autonomous Databases the resource pool can contain. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs">poolStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | Total storage size of the resource pool, in TB. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the resource pool is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `poolSize`<sup>Optional</sup> <a name="poolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

Number of Autonomous Databases the resource pool can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#pool_size OdbAutonomousDatabase#pool_size}

---

##### `poolStorageSizeInTbs`<sup>Optional</sup> <a name="poolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs"></a>

```java
public java.lang.Number getPoolStorageSizeInTbs();
```

- *Type:* java.lang.Number

Total storage size of the resource pool, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#pool_storage_size_in_tbs OdbAutonomousDatabase#pool_storage_size_in_tbs}

---

### OdbAutonomousDatabaseScheduledOperations <a name="OdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseScheduledOperations;

OdbAutonomousDatabaseScheduledOperations.builder()
    .dayOfWeek(java.lang.String)
//  .scheduledStartTime(java.lang.String)
//  .scheduledStopTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Day of the week. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime">scheduledStartTime</a></code> | <code>java.lang.String</code> | Scheduled start time in UTC. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime">scheduledStopTime</a></code> | <code>java.lang.String</code> | Scheduled stop time in UTC. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Day of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#day_of_week OdbAutonomousDatabase#day_of_week}

---

##### `scheduledStartTime`<sup>Optional</sup> <a name="scheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```java
public java.lang.String getScheduledStartTime();
```

- *Type:* java.lang.String

Scheduled start time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#scheduled_start_time OdbAutonomousDatabase#scheduled_start_time}

---

##### `scheduledStopTime`<sup>Optional</sup> <a name="scheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```java
public java.lang.String getScheduledStopTime();
```

- *Type:* java.lang.String

Scheduled stop time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#scheduled_stop_time OdbAutonomousDatabase#scheduled_stop_time}

---

### OdbAutonomousDatabaseSourceConfiguration <a name="OdbAutonomousDatabaseSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfiguration;

OdbAutonomousDatabaseSourceConfiguration.builder()
//  .cloneToRefreshable(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable>)
//  .crossRegionDataGuard(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard>)
//  .crossRegionDisasterRecovery(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery>)
//  .databaseClone(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationDatabaseClone>)
//  .pointInTimeRestore(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore>)
//  .restoreFromBackup(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable">cloneToRefreshable</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>></code> | clone_to_refreshable block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard">crossRegionDataGuard</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>></code> | cross_region_data_guard block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery">crossRegionDisasterRecovery</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>></code> | cross_region_disaster_recovery block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone">databaseClone</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>></code> | database_clone block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>></code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup">restoreFromBackup</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>></code> | restore_from_backup block. |

---

##### `cloneToRefreshable`<sup>Optional</sup> <a name="cloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable> getCloneToRefreshable();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>>

clone_to_refreshable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#clone_to_refreshable OdbAutonomousDatabase#clone_to_refreshable}

---

##### `crossRegionDataGuard`<sup>Optional</sup> <a name="crossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard> getCrossRegionDataGuard();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>>

cross_region_data_guard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#cross_region_data_guard OdbAutonomousDatabase#cross_region_data_guard}

---

##### `crossRegionDisasterRecovery`<sup>Optional</sup> <a name="crossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery> getCrossRegionDisasterRecovery();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>>

cross_region_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#cross_region_disaster_recovery OdbAutonomousDatabase#cross_region_disaster_recovery}

---

##### `databaseClone`<sup>Optional</sup> <a name="databaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationDatabaseClone> getDatabaseClone();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>>

database_clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#database_clone OdbAutonomousDatabase#database_clone}

---

##### `pointInTimeRestore`<sup>Optional</sup> <a name="pointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore> getPointInTimeRestore();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#point_in_time_restore OdbAutonomousDatabase#point_in_time_restore}

---

##### `restoreFromBackup`<sup>Optional</sup> <a name="restoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup> getRestoreFromBackup();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>>

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#restore_from_backup OdbAutonomousDatabase#restore_from_backup}

---

### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable;

OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.builder()
    .sourceAutonomousDatabaseId(java.lang.String)
//  .autoRefreshFrequencyInSeconds(java.lang.Number)
//  .autoRefreshPointLagInSeconds(java.lang.Number)
//  .cloneType(java.lang.String)
//  .openMode(java.lang.String)
//  .refreshableMode(java.lang.String)
//  .timeOfAutoRefreshStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Frequency at which the refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | Time lag between the refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode">openMode</a></code> | <code>java.lang.String</code> | Open mode of the refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | Refresh mode of the clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | Date and time when automatic refresh starts. |

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSeconds();
```

- *Type:* java.lang.Number

Frequency at which the refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSeconds();
```

- *Type:* java.lang.Number

Time lag between the refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `cloneType`<sup>Optional</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

Open mode of the refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

Refresh mode of the clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart"></a>

```java
public java.lang.String getTimeOfAutoRefreshStart();
```

- *Type:* java.lang.String

Date and time when automatic refresh starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard;

OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.builder()
    .sourceAutonomousDatabaseArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>java.lang.String</code> | ARN of the source Autonomous Database. |

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn"></a>

```java
public java.lang.String getSourceAutonomousDatabaseArn();
```

- *Type:* java.lang.String

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery;

OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.builder()
    .remoteDisasterRecoveryType(java.lang.String)
    .sourceAutonomousDatabaseArn(java.lang.String)
//  .isReplicateAutomaticBackups(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>java.lang.String</code> | Type of remote disaster recovery. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>java.lang.String</code> | ARN of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether automatic backups are replicated to the disaster recovery database. |

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```java
public java.lang.String getRemoteDisasterRecoveryType();
```

- *Type:* java.lang.String

Type of remote disaster recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#remote_disaster_recovery_type OdbAutonomousDatabase#remote_disaster_recovery_type}

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn"></a>

```java
public java.lang.String getSourceAutonomousDatabaseArn();
```

- *Type:* java.lang.String

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

##### `isReplicateAutomaticBackups`<sup>Optional</sup> <a name="isReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups"></a>

```java
public java.lang.Boolean|IResolvable getIsReplicateAutomaticBackups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether automatic backups are replicated to the disaster recovery database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#is_replicate_automatic_backups OdbAutonomousDatabase#is_replicate_automatic_backups}

---

### OdbAutonomousDatabaseSourceConfigurationDatabaseClone <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationDatabaseClone;

OdbAutonomousDatabaseSourceConfigurationDatabaseClone.builder()
    .cloneType(java.lang.String)
    .sourceAutonomousDatabaseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | ID of the source Autonomous Database. |

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore;

OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.builder()
    .cloneType(java.lang.String)
    .sourceAutonomousDatabaseId(java.lang.String)
//  .cloneTableSpaceList(java.util.List<java.lang.Number>)
//  .timestamp(java.lang.String)
//  .useLatestAvailableBackupTimestamp(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>java.util.List<java.lang.Number></code> | Tablespace IDs to clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | Date and time to which the database is restored. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp">useLatestAvailableBackupTimestamp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use the latest available backup timestamp. |

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `cloneTableSpaceList`<sup>Optional</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList"></a>

```java
public java.util.List<java.lang.Number> getCloneTableSpaceList();
```

- *Type:* java.util.List<java.lang.Number>

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

Date and time to which the database is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#timestamp OdbAutonomousDatabase#timestamp}

---

##### `useLatestAvailableBackupTimestamp`<sup>Optional</sup> <a name="useLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestAvailableBackupTimestamp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use the latest available backup timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#use_latest_available_backup_timestamp OdbAutonomousDatabase#use_latest_available_backup_timestamp}

---

### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup;

OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.builder()
    .autonomousDatabaseBackupId(java.lang.String)
    .cloneType(java.lang.String)
//  .cloneTableSpaceList(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>java.lang.String</code> | ID of the Autonomous Database backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Type of clone to create from the backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>java.util.List<java.lang.Number></code> | Tablespace IDs to clone. |

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId"></a>

```java
public java.lang.String getAutonomousDatabaseBackupId();
```

- *Type:* java.lang.String

ID of the Autonomous Database backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#autonomous_database_backup_id OdbAutonomousDatabase#autonomous_database_backup_id}

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

Type of clone to create from the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `cloneTableSpaceList`<sup>Optional</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList"></a>

```java
public java.util.List<java.lang.Number> getCloneTableSpaceList();
```

- *Type:* java.util.List<java.lang.Number>

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

### OdbAutonomousDatabaseTimeouts <a name="OdbAutonomousDatabaseTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseTimeouts;

OdbAutonomousDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#create OdbAutonomousDatabase#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#delete OdbAutonomousDatabase#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#update OdbAutonomousDatabase#update}

---

### OdbAutonomousDatabaseTransportableTablespace <a name="OdbAutonomousDatabaseTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseTransportableTablespace;

OdbAutonomousDatabaseTransportableTablespace.builder()
//  .ttsBundleUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl">ttsBundleUrl</a></code> | <code>java.lang.String</code> | URL of the transportable tablespace bundle. |

---

##### `ttsBundleUrl`<sup>Optional</sup> <a name="ttsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl"></a>

```java
public java.lang.String getTtsBundleUrl();
```

- *Type:* java.lang.String

URL of the transportable tablespace bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database#tts_bundle_url OdbAutonomousDatabase#tts_bundle_url}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList;

new OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```java
public OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>>

---


### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference;

new OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput">externalIdTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">externalIdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdTypeInput`<sup>Optional</sup> <a name="externalIdTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput"></a>

```java
public java.lang.String getExternalIdTypeInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `externalIdType`<sup>Required</sup> <a name="externalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```java
public java.lang.String getExternalIdType();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### OdbAutonomousDatabaseAdminPasswordSourceList <a name="OdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseAdminPasswordSourceList;

new OdbAutonomousDatabaseAdminPasswordSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```java
public OdbAutonomousDatabaseAdminPasswordSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>>

---


### OdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseAdminPasswordSourceOutputReference;

new OdbAutonomousDatabaseAdminPasswordSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret">putCustomerManagedAwsSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret">resetCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedAwsSecret` <a name="putCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret"></a>

```java
public void putCustomerManagedAwsSecret(IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>>

---

##### `resetCustomerManagedAwsSecret` <a name="resetCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret"></a>

```java
public void resetCustomerManagedAwsSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">customerManagedAwsSecret</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput">customerManagedAwsSecretInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerManagedAwsSecret`<sup>Required</sup> <a name="customerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```java
public OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList getCustomerManagedAwsSecret();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `customerManagedAwsSecretInput`<sup>Optional</sup> <a name="customerManagedAwsSecretInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret> getCustomerManagedAwsSecretInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseAdminPasswordSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseCustomerContactsToSendToOciList;

new OdbAutonomousDatabaseCustomerContactsToSendToOciList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```java
public OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseCustomerContactsToSendToOci> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>>

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference;

new OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseCustomerContactsToSendToOci getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### OdbAutonomousDatabaseDbToolsDetailsList <a name="OdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseDbToolsDetailsList;

new OdbAutonomousDatabaseDbToolsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```java
public OdbAutonomousDatabaseDbToolsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseDbToolsDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>>

---


### OdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="OdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseDbToolsDetailsOutputReference;

new OdbAutonomousDatabaseDbToolsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes">resetMaxIdleTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetMaxIdleTimeInMinutes` <a name="resetMaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```java
public void resetMaxIdleTimeInMinutes()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">maxIdleTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxIdleTimeInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeInMinutesInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```java
public java.lang.Number getMaxIdleTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxIdleTimeInMinutes`<sup>Required</sup> <a name="maxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```java
public java.lang.Number getMaxIdleTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseDbToolsDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>

---


### OdbAutonomousDatabaseLongTermBackupScheduleList <a name="OdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseLongTermBackupScheduleList;

new OdbAutonomousDatabaseLongTermBackupScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```java
public OdbAutonomousDatabaseLongTermBackupScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseLongTermBackupSchedule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>>

---


### OdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="OdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference;

new OdbAutonomousDatabaseLongTermBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence">resetRepeatCadence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays">resetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup">resetTimeOfBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```java
public void resetIsDisabled()
```

##### `resetRepeatCadence` <a name="resetRepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```java
public void resetRepeatCadence()
```

##### `resetRetentionPeriodInDays` <a name="resetRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```java
public void resetRetentionPeriodInDays()
```

##### `resetTimeOfBackup` <a name="resetTimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```java
public void resetTimeOfBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">repeatCadenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">timeOfBackupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeatCadence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">timeOfBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repeatCadenceInput`<sup>Optional</sup> <a name="repeatCadenceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```java
public java.lang.String getRepeatCadenceInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```java
public java.lang.Number getRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeOfBackupInput`<sup>Optional</sup> <a name="timeOfBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```java
public java.lang.String getTimeOfBackupInput();
```

- *Type:* java.lang.String

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repeatCadence`<sup>Required</sup> <a name="repeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```java
public java.lang.String getRepeatCadence();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```java
public java.lang.String getTimeOfBackup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseLongTermBackupSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### OdbAutonomousDatabaseResourcePoolSummaryList <a name="OdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseResourcePoolSummaryList;

new OdbAutonomousDatabaseResourcePoolSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```java
public OdbAutonomousDatabaseResourcePoolSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseResourcePoolSummary> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>>

---


### OdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="OdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseResourcePoolSummaryOutputReference;

new OdbAutonomousDatabaseResourcePoolSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize">resetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs">resetPoolStorageSizeInTbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```java
public void resetIsDisabled()
```

##### `resetPoolSize` <a name="resetPoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```java
public void resetPoolSize()
```

##### `resetPoolStorageSizeInTbs` <a name="resetPoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs"></a>

```java
public void resetPoolStorageSizeInTbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">availableComputeCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">availableStorageCapacityInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">totalComputeCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">poolSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput">poolStorageSizeInTbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">poolSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">poolStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableComputeCapacity`<sup>Required</sup> <a name="availableComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```java
public java.lang.Number getAvailableComputeCapacity();
```

- *Type:* java.lang.Number

---

##### `availableStorageCapacityInTbs`<sup>Required</sup> <a name="availableStorageCapacityInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```java
public java.lang.Number getAvailableStorageCapacityInTbs();
```

- *Type:* java.lang.Number

---

##### `totalComputeCapacity`<sup>Required</sup> <a name="totalComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```java
public java.lang.Number getTotalComputeCapacity();
```

- *Type:* java.lang.Number

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `poolSizeInput`<sup>Optional</sup> <a name="poolSizeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```java
public java.lang.Number getPoolSizeInput();
```

- *Type:* java.lang.Number

---

##### `poolStorageSizeInTbsInput`<sup>Optional</sup> <a name="poolStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput"></a>

```java
public java.lang.Number getPoolStorageSizeInTbsInput();
```

- *Type:* java.lang.Number

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```java
public java.lang.Number getPoolSize();
```

- *Type:* java.lang.Number

---

##### `poolStorageSizeInTbs`<sup>Required</sup> <a name="poolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```java
public java.lang.Number getPoolStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseResourcePoolSummary getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>

---


### OdbAutonomousDatabaseScheduledOperationsList <a name="OdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseScheduledOperationsList;

new OdbAutonomousDatabaseScheduledOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get"></a>

```java
public OdbAutonomousDatabaseScheduledOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseScheduledOperations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>>

---


### OdbAutonomousDatabaseScheduledOperationsOutputReference <a name="OdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseScheduledOperationsOutputReference;

new OdbAutonomousDatabaseScheduledOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime">resetScheduledStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime">resetScheduledStopTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScheduledStartTime` <a name="resetScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```java
public void resetScheduledStartTime()
```

##### `resetScheduledStopTime` <a name="resetScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```java
public void resetScheduledStopTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">scheduledStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">scheduledStopTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduledStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduledStopTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `scheduledStartTimeInput`<sup>Optional</sup> <a name="scheduledStartTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```java
public java.lang.String getScheduledStartTimeInput();
```

- *Type:* java.lang.String

---

##### `scheduledStopTimeInput`<sup>Optional</sup> <a name="scheduledStopTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```java
public java.lang.String getScheduledStopTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `scheduledStartTime`<sup>Required</sup> <a name="scheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```java
public java.lang.String getScheduledStartTime();
```

- *Type:* java.lang.String

---

##### `scheduledStopTime`<sup>Required</sup> <a name="scheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```java
public java.lang.String getScheduledStopTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseScheduledOperations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList;

new OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>>

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference;

new OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds">resetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds">resetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType">resetCloneType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode">resetOpenMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode">resetRefreshableMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart">resetTimeOfAutoRefreshStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRefreshFrequencyInSeconds` <a name="resetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds"></a>

```java
public void resetAutoRefreshFrequencyInSeconds()
```

##### `resetAutoRefreshPointLagInSeconds` <a name="resetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds"></a>

```java
public void resetAutoRefreshPointLagInSeconds()
```

##### `resetCloneType` <a name="resetCloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType"></a>

```java
public void resetCloneType()
```

##### `resetOpenMode` <a name="resetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode"></a>

```java
public void resetOpenMode()
```

##### `resetRefreshableMode` <a name="resetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode"></a>

```java
public void resetRefreshableMode()
```

##### `resetTimeOfAutoRefreshStart` <a name="resetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart"></a>

```java
public void resetTimeOfAutoRefreshStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput">autoRefreshFrequencyInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput">autoRefreshPointLagInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput">openModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput">refreshableModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput">timeOfAutoRefreshStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="autoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `autoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="autoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput"></a>

```java
public java.lang.String getCloneTypeInput();
```

- *Type:* java.lang.String

---

##### `openModeInput`<sup>Optional</sup> <a name="openModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput"></a>

```java
public java.lang.String getOpenModeInput();
```

- *Type:* java.lang.String

---

##### `refreshableModeInput`<sup>Optional</sup> <a name="refreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput"></a>

```java
public java.lang.String getRefreshableModeInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `timeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="timeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput"></a>

```java
public java.lang.String getTimeOfAutoRefreshStartInput();
```

- *Type:* java.lang.String

---

##### `autoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```java
public java.lang.Number getAutoRefreshFrequencyInSeconds();
```

- *Type:* java.lang.Number

---

##### `autoRefreshPointLagInSeconds`<sup>Required</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds"></a>

```java
public java.lang.Number getAutoRefreshPointLagInSeconds();
```

- *Type:* java.lang.Number

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `timeOfAutoRefreshStart`<sup>Required</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart"></a>

```java
public java.lang.String getTimeOfAutoRefreshStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput">sourceAutonomousDatabaseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseArnInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn"></a>

```java
public java.lang.String getSourceAutonomousDatabaseArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups">resetIsReplicateAutomaticBackups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsReplicateAutomaticBackups` <a name="resetIsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups"></a>

```java
public void resetIsReplicateAutomaticBackups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput">isReplicateAutomaticBackupsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput">remoteDisasterRecoveryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput">sourceAutonomousDatabaseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isReplicateAutomaticBackupsInput`<sup>Optional</sup> <a name="isReplicateAutomaticBackupsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput"></a>

```java
public java.lang.Boolean|IResolvable getIsReplicateAutomaticBackupsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remoteDisasterRecoveryTypeInput`<sup>Optional</sup> <a name="remoteDisasterRecoveryTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput"></a>

```java
public java.lang.String getRemoteDisasterRecoveryTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseArnInput();
```

- *Type:* java.lang.String

---

##### `isReplicateAutomaticBackups`<sup>Required</sup> <a name="isReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups"></a>

```java
public java.lang.Boolean|IResolvable getIsReplicateAutomaticBackups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType"></a>

```java
public java.lang.String getRemoteDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn"></a>

```java
public java.lang.String getSourceAutonomousDatabaseArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList;

new OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationDatabaseClone> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>>

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference;

new OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput"></a>

```java
public java.lang.String getCloneTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSourceConfigurationDatabaseClone getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>

---


### OdbAutonomousDatabaseSourceConfigurationList <a name="OdbAutonomousDatabaseSourceConfigurationList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationList;

new OdbAutonomousDatabaseSourceConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>>

---


### OdbAutonomousDatabaseSourceConfigurationOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationOutputReference;

new OdbAutonomousDatabaseSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable">putCloneToRefreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard">putCrossRegionDataGuard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery">putCrossRegionDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone">putDatabaseClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore">putPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup">putRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable">resetCloneToRefreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard">resetCrossRegionDataGuard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery">resetCrossRegionDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone">resetDatabaseClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore">resetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup">resetRestoreFromBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloneToRefreshable` <a name="putCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable"></a>

```java
public void putCloneToRefreshable(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>>

---

##### `putCrossRegionDataGuard` <a name="putCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard"></a>

```java
public void putCrossRegionDataGuard(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>>

---

##### `putCrossRegionDisasterRecovery` <a name="putCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery"></a>

```java
public void putCrossRegionDisasterRecovery(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>>

---

##### `putDatabaseClone` <a name="putDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone"></a>

```java
public void putDatabaseClone(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationDatabaseClone> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>>

---

##### `putPointInTimeRestore` <a name="putPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore"></a>

```java
public void putPointInTimeRestore(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>>

---

##### `putRestoreFromBackup` <a name="putRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup"></a>

```java
public void putRestoreFromBackup(IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>>

---

##### `resetCloneToRefreshable` <a name="resetCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable"></a>

```java
public void resetCloneToRefreshable()
```

##### `resetCrossRegionDataGuard` <a name="resetCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard"></a>

```java
public void resetCrossRegionDataGuard()
```

##### `resetCrossRegionDisasterRecovery` <a name="resetCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery"></a>

```java
public void resetCrossRegionDisasterRecovery()
```

##### `resetDatabaseClone` <a name="resetDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone"></a>

```java
public void resetDatabaseClone()
```

##### `resetPointInTimeRestore` <a name="resetPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore"></a>

```java
public void resetPointInTimeRestore()
```

##### `resetRestoreFromBackup` <a name="resetRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup"></a>

```java
public void resetRestoreFromBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable">cloneToRefreshable</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard">crossRegionDataGuard</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery">crossRegionDisasterRecovery</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone">databaseClone</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup">restoreFromBackup</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput">cloneToRefreshableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput">crossRegionDataGuardInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput">crossRegionDisasterRecoveryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput">databaseCloneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput">pointInTimeRestoreInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput">restoreFromBackupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloneToRefreshable`<sup>Required</sup> <a name="cloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList getCloneToRefreshable();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a>

---

##### `crossRegionDataGuard`<sup>Required</sup> <a name="crossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList getCrossRegionDataGuard();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a>

---

##### `crossRegionDisasterRecovery`<sup>Required</sup> <a name="crossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList getCrossRegionDisasterRecovery();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a>

---

##### `databaseClone`<sup>Required</sup> <a name="databaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList getDatabaseClone();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a>

---

##### `pointInTimeRestore`<sup>Required</sup> <a name="pointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList getPointInTimeRestore();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a>

---

##### `restoreFromBackup`<sup>Required</sup> <a name="restoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList getRestoreFromBackup();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a>

---

##### `cloneToRefreshableInput`<sup>Optional</sup> <a name="cloneToRefreshableInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable> getCloneToRefreshableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>>

---

##### `crossRegionDataGuardInput`<sup>Optional</sup> <a name="crossRegionDataGuardInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard> getCrossRegionDataGuardInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>>

---

##### `crossRegionDisasterRecoveryInput`<sup>Optional</sup> <a name="crossRegionDisasterRecoveryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery> getCrossRegionDisasterRecoveryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>>

---

##### `databaseCloneInput`<sup>Optional</sup> <a name="databaseCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationDatabaseClone> getDatabaseCloneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>>

---

##### `pointInTimeRestoreInput`<sup>Optional</sup> <a name="pointInTimeRestoreInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore> getPointInTimeRestoreInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>>

---

##### `restoreFromBackupInput`<sup>Optional</sup> <a name="restoreFromBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup> getRestoreFromBackupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList;

new OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>>

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference;

new OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList">resetCloneTableSpaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp">resetUseLatestAvailableBackupTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloneTableSpaceList` <a name="resetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList"></a>

```java
public void resetCloneTableSpaceList()
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp"></a>

```java
public void resetTimestamp()
```

##### `resetUseLatestAvailableBackupTimestamp` <a name="resetUseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp"></a>

```java
public void resetUseLatestAvailableBackupTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput">cloneTableSpaceListInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput">timestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput">useLatestAvailableBackupTimestampInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp">useLatestAvailableBackupTimestamp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloneTableSpaceListInput`<sup>Optional</sup> <a name="cloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput"></a>

```java
public java.util.List<java.lang.Number> getCloneTableSpaceListInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput"></a>

```java
public java.lang.String getCloneTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput"></a>

```java
public java.lang.String getTimestampInput();
```

- *Type:* java.lang.String

---

##### `useLatestAvailableBackupTimestampInput`<sup>Optional</sup> <a name="useLatestAvailableBackupTimestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestAvailableBackupTimestampInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cloneTableSpaceList`<sup>Required</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList"></a>

```java
public java.util.List<java.lang.Number> getCloneTableSpaceList();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `useLatestAvailableBackupTimestamp`<sup>Required</sup> <a name="useLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestAvailableBackupTimestamp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList;

new OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get"></a>

```java
public OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>>

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference;

new OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList">resetCloneTableSpaceList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloneTableSpaceList` <a name="resetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList"></a>

```java
public void resetCloneTableSpaceList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput">autonomousDatabaseBackupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput">cloneTableSpaceListInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseBackupIdInput`<sup>Optional</sup> <a name="autonomousDatabaseBackupIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseBackupIdInput();
```

- *Type:* java.lang.String

---

##### `cloneTableSpaceListInput`<sup>Optional</sup> <a name="cloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput"></a>

```java
public java.util.List<java.lang.Number> getCloneTableSpaceListInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput"></a>

```java
public java.lang.String getCloneTypeInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId"></a>

```java
public java.lang.String getAutonomousDatabaseBackupId();
```

- *Type:* java.lang.String

---

##### `cloneTableSpaceList`<sup>Required</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList"></a>

```java
public java.util.List<java.lang.Number> getCloneTableSpaceList();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>

---


### OdbAutonomousDatabaseTimeoutsOutputReference <a name="OdbAutonomousDatabaseTimeoutsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseTimeoutsOutputReference;

new OdbAutonomousDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---


### OdbAutonomousDatabaseTransportableTablespaceList <a name="OdbAutonomousDatabaseTransportableTablespaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseTransportableTablespaceList;

new OdbAutonomousDatabaseTransportableTablespaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get"></a>

```java
public OdbAutonomousDatabaseTransportableTablespaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbAutonomousDatabaseTransportableTablespace> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>>

---


### OdbAutonomousDatabaseTransportableTablespaceOutputReference <a name="OdbAutonomousDatabaseTransportableTablespaceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database.OdbAutonomousDatabaseTransportableTablespaceOutputReference;

new OdbAutonomousDatabaseTransportableTablespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl">resetTtsBundleUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtsBundleUrl` <a name="resetTtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl"></a>

```java
public void resetTtsBundleUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput">ttsBundleUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl">ttsBundleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttsBundleUrlInput`<sup>Optional</sup> <a name="ttsBundleUrlInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput"></a>

```java
public java.lang.String getTtsBundleUrlInput();
```

- *Type:* java.lang.String

---

##### `ttsBundleUrl`<sup>Required</sup> <a name="ttsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl"></a>

```java
public java.lang.String getTtsBundleUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseTransportableTablespace getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>

---



