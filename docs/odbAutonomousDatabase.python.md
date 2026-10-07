# `odbAutonomousDatabase` Submodule <a name="`odbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.odbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbAutonomousDatabase <a name="OdbAutonomousDatabase" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_password: str = None,
  admin_password_source: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSource] = None,
  admin_password_wo: str = None,
  admin_password_wo_version: typing.Union[int, float] = None,
  allowlisted_ips: typing.List[str] = None,
  autonomous_maintenance_schedule_type: str = None,
  auto_refresh_frequency_in_seconds: typing.Union[int, float] = None,
  auto_refresh_point_lag_in_seconds: typing.Union[int, float] = None,
  backup_retention_period_in_days: typing.Union[int, float] = None,
  byol_compute_count_limit: typing.Union[int, float] = None,
  character_set: str = None,
  compute_count: typing.Union[int, float] = None,
  cpu_core_count: typing.Union[int, float] = None,
  customer_contacts_to_send_to_oci: IResolvable | typing.List[OdbAutonomousDatabaseCustomerContactsToSendToOci] = None,
  database_edition: str = None,
  data_storage_size_in_gbs: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_name: str = None,
  db_tools_details: IResolvable | typing.List[OdbAutonomousDatabaseDbToolsDetails] = None,
  db_version: str = None,
  db_workload: str = None,
  display_name: str = None,
  encryption_key_provider: str = None,
  is_auto_scaling_enabled: bool | IResolvable = None,
  is_auto_scaling_for_storage_enabled: bool | IResolvable = None,
  is_backup_retention_locked: bool | IResolvable = None,
  is_local_data_guard_enabled: bool | IResolvable = None,
  is_mtls_connection_required: bool | IResolvable = None,
  is_refreshable_clone: bool | IResolvable = None,
  kms_key_id: str = None,
  license_model: str = None,
  local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float] = None,
  long_term_backup_schedule: IResolvable | typing.List[OdbAutonomousDatabaseLongTermBackupSchedule] = None,
  ncharacter_set: str = None,
  odb_network_id: str = None,
  open_mode: str = None,
  permission_level: str = None,
  private_endpoint_ip: str = None,
  private_endpoint_label: str = None,
  refreshable_mode: str = None,
  region: str = None,
  resource_pool_leader_id: str = None,
  resource_pool_summary: IResolvable | typing.List[OdbAutonomousDatabaseResourcePoolSummary] = None,
  scheduled_operations: IResolvable | typing.List[OdbAutonomousDatabaseScheduledOperations] = None,
  source: str = None,
  source_configuration: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfiguration] = None,
  standby_allowlisted_ips: typing.List[str] = None,
  standby_allowlisted_ips_source: str = None,
  tags: typing.Mapping[str] = None,
  time_of_auto_refresh_start: str = None,
  timeouts: OdbAutonomousDatabaseTimeouts = None,
  transportable_tablespace: IResolvable | typing.List[OdbAutonomousDatabaseTransportableTablespace] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Password for the ADMIN user. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordSource">admin_password_source</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]</code> | admin_password_source block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWo">admin_password_wo</a></code> | <code>str</code> | Password for the ADMIN user. This write-only value is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWoVersion">admin_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Arbitrary version used to trigger an ADMIN password update. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.allowlistedIps">allowlisted_ips</a></code> | <code>typing.List[str]</code> | IP addresses allowed to access the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | Maintenance schedule type for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Frequency at which a refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Time lag between a refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Retention period for automatic backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | Maximum compute capacity under the bring-your-own-license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.characterSet">character_set</a></code> | <code>str</code> | Character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Compute capacity in ECPUs or OCPUs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Number of CPU cores allocated to the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.customerContactsToSendToOci">customer_contacts_to_send_to_oci</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]</code> | customer_contacts_to_send_to_oci block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.databaseEdition">database_edition</a></code> | <code>str</code> | Oracle Database edition. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInGbs">data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Data volume size in GB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Data volume size in TB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | Name of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbToolsDetails">db_tools_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]</code> | db_tools_details block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbVersion">db_version</a></code> | <code>str</code> | Oracle Database software version. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbWorkload">db_workload</a></code> | <code>str</code> | Intended database workload. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly name for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.encryptionKeyProvider">encryption_key_provider</a></code> | <code>str</code> | Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether automatic compute scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether automatic storage scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isBackupRetentionLocked">is_backup_retention_locked</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the backup retention period is locked. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether local Oracle Data Guard is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether mutual TLS authentication is required. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isRefreshableClone">is_refreshable_clone</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the Autonomous Database is a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | ARN of the AWS KMS key used to encrypt the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Oracle license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | Maximum data-loss limit for automatic local Data Guard failover, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]</code> | long_term_backup_schedule block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | National character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.odbNetworkId">odb_network_id</a></code> | <code>str</code> | ID of the associated ODB network. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.openMode">open_mode</a></code> | <code>str</code> | Open mode of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.permissionLevel">permission_level</a></code> | <code>str</code> | Permission level of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | Private endpoint IP address. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | Private endpoint label. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.refreshableMode">refreshable_mode</a></code> | <code>str</code> | Refresh mode of a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | ID of the resource-pool leader Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolSummary">resource_pool_summary</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]</code> | resource_pool_summary block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scheduledOperations">scheduled_operations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]</code> | scheduled_operations block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.source">source</a></code> | <code>str</code> | Source from which to create the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.sourceConfiguration">source_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]</code> | source_configuration block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIps">standby_allowlisted_ips</a></code> | <code>typing.List[str]</code> | IP addresses allowed to access the standby Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIpsSource">standby_allowlisted_ips_source</a></code> | <code>str</code> | Source of the standby allowlisted IP addresses. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | Date and time when automatic refresh begins. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.transportableTablespace">transportable_tablespace</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]</code> | transportable_tablespace block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPassword"></a>

- *Type:* str

Password for the ADMIN user.

This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}

---

##### `admin_password_source`<sup>Optional</sup> <a name="admin_password_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordSource"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]

admin_password_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}

---

##### `admin_password_wo`<sup>Optional</sup> <a name="admin_password_wo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWo"></a>

- *Type:* str

Password for the ADMIN user. This write-only value is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}

---

##### `admin_password_wo_version`<sup>Optional</sup> <a name="admin_password_wo_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.adminPasswordWoVersion"></a>

- *Type:* typing.Union[int, float]

Arbitrary version used to trigger an ADMIN password update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}

---

##### `allowlisted_ips`<sup>Optional</sup> <a name="allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.allowlistedIps"></a>

- *Type:* typing.List[str]

IP addresses allowed to access the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}

---

##### `autonomous_maintenance_schedule_type`<sup>Optional</sup> <a name="autonomous_maintenance_schedule_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autonomousMaintenanceScheduleType"></a>

- *Type:* str

Maintenance schedule type for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}

---

##### `auto_refresh_frequency_in_seconds`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshFrequencyInSeconds"></a>

- *Type:* typing.Union[int, float]

Frequency at which a refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `auto_refresh_point_lag_in_seconds`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.autoRefreshPointLagInSeconds"></a>

- *Type:* typing.Union[int, float]

Time lag between a refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `backup_retention_period_in_days`<sup>Optional</sup> <a name="backup_retention_period_in_days" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.backupRetentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Retention period for automatic backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}

---

##### `byol_compute_count_limit`<sup>Optional</sup> <a name="byol_compute_count_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.byolComputeCountLimit"></a>

- *Type:* typing.Union[int, float]

Maximum compute capacity under the bring-your-own-license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.characterSet"></a>

- *Type:* str

Character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

Compute capacity in ECPUs or OCPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Number of CPU cores allocated to the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}

---

##### `customer_contacts_to_send_to_oci`<sup>Optional</sup> <a name="customer_contacts_to_send_to_oci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.customerContactsToSendToOci"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]

customer_contacts_to_send_to_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}

---

##### `database_edition`<sup>Optional</sup> <a name="database_edition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.databaseEdition"></a>

- *Type:* str

Oracle Database edition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}

---

##### `data_storage_size_in_gbs`<sup>Optional</sup> <a name="data_storage_size_in_gbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Data volume size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dataStorageSizeInTbs"></a>

- *Type:* typing.Union[int, float]

Data volume size in TB.

Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbName"></a>

- *Type:* str

Name of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}

---

##### `db_tools_details`<sup>Optional</sup> <a name="db_tools_details" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbToolsDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbVersion"></a>

- *Type:* str

Oracle Database software version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.dbWorkload"></a>

- *Type:* str

Intended database workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly name for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}

---

##### `encryption_key_provider`<sup>Optional</sup> <a name="encryption_key_provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.encryptionKeyProvider"></a>

- *Type:* str

Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}

---

##### `is_auto_scaling_enabled`<sup>Optional</sup> <a name="is_auto_scaling_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether automatic compute scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}

---

##### `is_auto_scaling_for_storage_enabled`<sup>Optional</sup> <a name="is_auto_scaling_for_storage_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isAutoScalingForStorageEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether automatic storage scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}

---

##### `is_backup_retention_locked`<sup>Optional</sup> <a name="is_backup_retention_locked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isBackupRetentionLocked"></a>

- *Type:* bool | cdktn.IResolvable

Whether the backup retention period is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}

---

##### `is_local_data_guard_enabled`<sup>Optional</sup> <a name="is_local_data_guard_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isLocalDataGuardEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether local Oracle Data Guard is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}

---

##### `is_mtls_connection_required`<sup>Optional</sup> <a name="is_mtls_connection_required" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isMtlsConnectionRequired"></a>

- *Type:* bool | cdktn.IResolvable

Whether mutual TLS authentication is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}

---

##### `is_refreshable_clone`<sup>Optional</sup> <a name="is_refreshable_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.isRefreshableClone"></a>

- *Type:* bool | cdktn.IResolvable

Whether the Autonomous Database is a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

ARN of the AWS KMS key used to encrypt the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.licenseModel"></a>

- *Type:* str

Oracle license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Optional</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.localAdgAutoFailoverMaxDataLossLimit"></a>

- *Type:* typing.Union[int, float]

Maximum data-loss limit for automatic local Data Guard failover, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}

---

##### `long_term_backup_schedule`<sup>Optional</sup> <a name="long_term_backup_schedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.longTermBackupSchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.ncharacterSet"></a>

- *Type:* str

National character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.odbNetworkId"></a>

- *Type:* str

ID of the associated ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}

---

##### `open_mode`<sup>Optional</sup> <a name="open_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.openMode"></a>

- *Type:* str

Open mode of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `permission_level`<sup>Optional</sup> <a name="permission_level" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.permissionLevel"></a>

- *Type:* str

Permission level of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}

---

##### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointIp"></a>

- *Type:* str

Private endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}

---

##### `private_endpoint_label`<sup>Optional</sup> <a name="private_endpoint_label" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.privateEndpointLabel"></a>

- *Type:* str

Private endpoint label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}

---

##### `refreshable_mode`<sup>Optional</sup> <a name="refreshable_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.refreshableMode"></a>

- *Type:* str

Refresh mode of a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}

---

##### `resource_pool_leader_id`<sup>Optional</sup> <a name="resource_pool_leader_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolLeaderId"></a>

- *Type:* str

ID of the resource-pool leader Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}

---

##### `resource_pool_summary`<sup>Optional</sup> <a name="resource_pool_summary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.resourcePoolSummary"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}

---

##### `scheduled_operations`<sup>Optional</sup> <a name="scheduled_operations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scheduledOperations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.source"></a>

- *Type:* str

Source from which to create the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}

---

##### `source_configuration`<sup>Optional</sup> <a name="source_configuration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.sourceConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]

source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}

---

##### `standby_allowlisted_ips`<sup>Optional</sup> <a name="standby_allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIps"></a>

- *Type:* typing.List[str]

IP addresses allowed to access the standby Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}

---

##### `standby_allowlisted_ips_source`<sup>Optional</sup> <a name="standby_allowlisted_ips_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.standbyAllowlistedIpsSource"></a>

- *Type:* str

Source of the standby allowlisted IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}.

---

##### `time_of_auto_refresh_start`<sup>Optional</sup> <a name="time_of_auto_refresh_start" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeOfAutoRefreshStart"></a>

- *Type:* str

Date and time when automatic refresh begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}

---

##### `transportable_tablespace`<sup>Optional</sup> <a name="transportable_tablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.transportableTablespace"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]

transportable_tablespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource">put_admin_password_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci">put_customer_contacts_to_send_to_oci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails">put_db_tools_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule">put_long_term_backup_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary">put_resource_pool_summary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations">put_scheduled_operations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration">put_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace">put_transportable_tablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource">reset_admin_password_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo">reset_admin_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion">reset_admin_password_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps">reset_allowlisted_ips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType">reset_autonomous_maintenance_schedule_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds">reset_auto_refresh_frequency_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds">reset_auto_refresh_point_lag_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays">reset_backup_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit">reset_byol_compute_count_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci">reset_customer_contacts_to_send_to_oci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition">reset_database_edition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs">reset_data_storage_size_in_gbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs">reset_data_storage_size_in_tbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails">reset_db_tools_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload">reset_db_workload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider">reset_encryption_key_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled">reset_is_auto_scaling_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled">reset_is_auto_scaling_for_storage_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked">reset_is_backup_retention_locked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled">reset_is_local_data_guard_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired">reset_is_mtls_connection_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone">reset_is_refreshable_clone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit">reset_local_adg_auto_failover_max_data_loss_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule">reset_long_term_backup_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet">reset_ncharacter_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId">reset_odb_network_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode">reset_open_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel">reset_permission_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp">reset_private_endpoint_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel">reset_private_endpoint_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode">reset_refreshable_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId">reset_resource_pool_leader_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary">reset_resource_pool_summary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations">reset_scheduled_operations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration">reset_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps">reset_standby_allowlisted_ips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource">reset_standby_allowlisted_ips_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart">reset_time_of_auto_refresh_start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace">reset_transportable_tablespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_admin_password_source` <a name="put_admin_password_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource"></a>

```python
def put_admin_password_source(
  value: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]

---

##### `put_customer_contacts_to_send_to_oci` <a name="put_customer_contacts_to_send_to_oci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci"></a>

```python
def put_customer_contacts_to_send_to_oci(
  value: IResolvable | typing.List[OdbAutonomousDatabaseCustomerContactsToSendToOci]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]

---

##### `put_db_tools_details` <a name="put_db_tools_details" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails"></a>

```python
def put_db_tools_details(
  value: IResolvable | typing.List[OdbAutonomousDatabaseDbToolsDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]

---

##### `put_long_term_backup_schedule` <a name="put_long_term_backup_schedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule"></a>

```python
def put_long_term_backup_schedule(
  value: IResolvable | typing.List[OdbAutonomousDatabaseLongTermBackupSchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]

---

##### `put_resource_pool_summary` <a name="put_resource_pool_summary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary"></a>

```python
def put_resource_pool_summary(
  value: IResolvable | typing.List[OdbAutonomousDatabaseResourcePoolSummary]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]

---

##### `put_scheduled_operations` <a name="put_scheduled_operations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations"></a>

```python
def put_scheduled_operations(
  value: IResolvable | typing.List[OdbAutonomousDatabaseScheduledOperations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]

---

##### `put_source_configuration` <a name="put_source_configuration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration"></a>

```python
def put_source_configuration(
  value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#create OdbAutonomousDatabase#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#delete OdbAutonomousDatabase#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#update OdbAutonomousDatabase#update}

---

##### `put_transportable_tablespace` <a name="put_transportable_tablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace"></a>

```python
def put_transportable_tablespace(
  value: IResolvable | typing.List[OdbAutonomousDatabaseTransportableTablespace]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]

---

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_password_source` <a name="reset_admin_password_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource"></a>

```python
def reset_admin_password_source() -> None
```

##### `reset_admin_password_wo` <a name="reset_admin_password_wo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo"></a>

```python
def reset_admin_password_wo() -> None
```

##### `reset_admin_password_wo_version` <a name="reset_admin_password_wo_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion"></a>

```python
def reset_admin_password_wo_version() -> None
```

##### `reset_allowlisted_ips` <a name="reset_allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps"></a>

```python
def reset_allowlisted_ips() -> None
```

##### `reset_autonomous_maintenance_schedule_type` <a name="reset_autonomous_maintenance_schedule_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```python
def reset_autonomous_maintenance_schedule_type() -> None
```

##### `reset_auto_refresh_frequency_in_seconds` <a name="reset_auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```python
def reset_auto_refresh_frequency_in_seconds() -> None
```

##### `reset_auto_refresh_point_lag_in_seconds` <a name="reset_auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```python
def reset_auto_refresh_point_lag_in_seconds() -> None
```

##### `reset_backup_retention_period_in_days` <a name="reset_backup_retention_period_in_days" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```python
def reset_backup_retention_period_in_days() -> None
```

##### `reset_byol_compute_count_limit` <a name="reset_byol_compute_count_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit"></a>

```python
def reset_byol_compute_count_limit() -> None
```

##### `reset_character_set` <a name="reset_character_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_compute_count` <a name="reset_compute_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_customer_contacts_to_send_to_oci` <a name="reset_customer_contacts_to_send_to_oci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci"></a>

```python
def reset_customer_contacts_to_send_to_oci() -> None
```

##### `reset_database_edition` <a name="reset_database_edition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition"></a>

```python
def reset_database_edition() -> None
```

##### `reset_data_storage_size_in_gbs` <a name="reset_data_storage_size_in_gbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs"></a>

```python
def reset_data_storage_size_in_gbs() -> None
```

##### `reset_data_storage_size_in_tbs` <a name="reset_data_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```python
def reset_data_storage_size_in_tbs() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_db_tools_details` <a name="reset_db_tools_details" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails"></a>

```python
def reset_db_tools_details() -> None
```

##### `reset_db_version` <a name="reset_db_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_db_workload` <a name="reset_db_workload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload"></a>

```python
def reset_db_workload() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_key_provider` <a name="reset_encryption_key_provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider"></a>

```python
def reset_encryption_key_provider() -> None
```

##### `reset_is_auto_scaling_enabled` <a name="reset_is_auto_scaling_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```python
def reset_is_auto_scaling_enabled() -> None
```

##### `reset_is_auto_scaling_for_storage_enabled` <a name="reset_is_auto_scaling_for_storage_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```python
def reset_is_auto_scaling_for_storage_enabled() -> None
```

##### `reset_is_backup_retention_locked` <a name="reset_is_backup_retention_locked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked"></a>

```python
def reset_is_backup_retention_locked() -> None
```

##### `reset_is_local_data_guard_enabled` <a name="reset_is_local_data_guard_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```python
def reset_is_local_data_guard_enabled() -> None
```

##### `reset_is_mtls_connection_required` <a name="reset_is_mtls_connection_required" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```python
def reset_is_mtls_connection_required() -> None
```

##### `reset_is_refreshable_clone` <a name="reset_is_refreshable_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone"></a>

```python
def reset_is_refreshable_clone() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_local_adg_auto_failover_max_data_loss_limit` <a name="reset_local_adg_auto_failover_max_data_loss_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```python
def reset_local_adg_auto_failover_max_data_loss_limit() -> None
```

##### `reset_long_term_backup_schedule` <a name="reset_long_term_backup_schedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule"></a>

```python
def reset_long_term_backup_schedule() -> None
```

##### `reset_ncharacter_set` <a name="reset_ncharacter_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet"></a>

```python
def reset_ncharacter_set() -> None
```

##### `reset_odb_network_id` <a name="reset_odb_network_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId"></a>

```python
def reset_odb_network_id() -> None
```

##### `reset_open_mode` <a name="reset_open_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode"></a>

```python
def reset_open_mode() -> None
```

##### `reset_permission_level` <a name="reset_permission_level" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel"></a>

```python
def reset_permission_level() -> None
```

##### `reset_private_endpoint_ip` <a name="reset_private_endpoint_ip" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp"></a>

```python
def reset_private_endpoint_ip() -> None
```

##### `reset_private_endpoint_label` <a name="reset_private_endpoint_label" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel"></a>

```python
def reset_private_endpoint_label() -> None
```

##### `reset_refreshable_mode` <a name="reset_refreshable_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode"></a>

```python
def reset_refreshable_mode() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_pool_leader_id` <a name="reset_resource_pool_leader_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId"></a>

```python
def reset_resource_pool_leader_id() -> None
```

##### `reset_resource_pool_summary` <a name="reset_resource_pool_summary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary"></a>

```python
def reset_resource_pool_summary() -> None
```

##### `reset_scheduled_operations` <a name="reset_scheduled_operations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations"></a>

```python
def reset_scheduled_operations() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_configuration` <a name="reset_source_configuration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration"></a>

```python
def reset_source_configuration() -> None
```

##### `reset_standby_allowlisted_ips` <a name="reset_standby_allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps"></a>

```python
def reset_standby_allowlisted_ips() -> None
```

##### `reset_standby_allowlisted_ips_source` <a name="reset_standby_allowlisted_ips_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource"></a>

```python
def reset_standby_allowlisted_ips_source() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_time_of_auto_refresh_start` <a name="reset_time_of_auto_refresh_start" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```python
def reset_time_of_auto_refresh_start() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transportable_tablespace` <a name="reset_transportable_tablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace"></a>

```python
def reset_transportable_tablespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabase.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbAutonomousDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actual_used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource">admin_password_source</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs">allocated_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci">customer_contacts_to_send_to_oci</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails">db_tools_details</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress">percent_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations">scheduled_operations</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl">sql_web_developer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace">transportable_tablespace</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput">admin_password_source_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput">admin_password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput">admin_password_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput">allowlisted_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">autonomous_maintenance_schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">auto_refresh_frequency_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">auto_refresh_point_lag_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput">backup_retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput">byol_compute_count_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput">customer_contacts_to_send_to_oci_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput">database_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput">data_storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput">data_storage_size_in_tbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput">db_tools_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput">db_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput">encryption_key_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput">is_auto_scaling_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">is_auto_scaling_for_storage_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput">is_backup_retention_locked_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput">is_local_data_guard_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput">is_mtls_connection_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput">is_refreshable_clone_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">local_adg_auto_failover_max_data_loss_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput">long_term_backup_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput">ncharacter_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput">odb_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput">open_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput">permission_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput">private_endpoint_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput">private_endpoint_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput">refreshable_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput">resource_pool_leader_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput">resource_pool_summary_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput">scheduled_operations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput">source_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput">standby_allowlisted_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput">standby_allowlisted_ips_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput">time_of_auto_refresh_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput">transportable_tablespace_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo">admin_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion">admin_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps">allowlisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs">data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider">encryption_key_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked">is_backup_retention_locked</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel">permission_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps">standby_allowlisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource">standby_allowlisted_ips_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actual_used_data_storage_size_in_tbs`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```python
actual_used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password_source`<sup>Required</sup> <a name="admin_password_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource"></a>

```python
admin_password_source: OdbAutonomousDatabaseAdminPasswordSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `allocated_storage_size_in_tbs`<sup>Required</sup> <a name="allocated_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```python
allocated_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customer_contacts_to_send_to_oci`<sup>Required</sup> <a name="customer_contacts_to_send_to_oci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```python
customer_contacts_to_send_to_oci: OdbAutonomousDatabaseCustomerContactsToSendToOciList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_tools_details`<sup>Required</sup> <a name="db_tools_details" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails"></a>

```python
db_tools_details: OdbAutonomousDatabaseDbToolsDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `long_term_backup_schedule`<sup>Required</sup> <a name="long_term_backup_schedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: OdbAutonomousDatabaseLongTermBackupScheduleList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `odb_network_arn`<sup>Required</sup> <a name="odb_network_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress"></a>

```python
percent_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `resource_pool_summary`<sup>Required</sup> <a name="resource_pool_summary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary"></a>

```python
resource_pool_summary: OdbAutonomousDatabaseResourcePoolSummaryList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `scheduled_operations`<sup>Required</sup> <a name="scheduled_operations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations"></a>

```python
scheduled_operations: OdbAutonomousDatabaseScheduledOperationsList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `source_configuration`<sup>Required</sup> <a name="source_configuration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration"></a>

```python
source_configuration: OdbAutonomousDatabaseSourceConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a>

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `sql_web_developer_url`<sup>Required</sup> <a name="sql_web_developer_url" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```python
sql_web_developer_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts"></a>

```python
timeouts: OdbAutonomousDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `transportable_tablespace`<sup>Required</sup> <a name="transportable_tablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace"></a>

```python
transportable_tablespace: OdbAutonomousDatabaseTransportableTablespaceList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_password_source_input`<sup>Optional</sup> <a name="admin_password_source_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput"></a>

```python
admin_password_source_input: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]

---

##### `admin_password_wo_input`<sup>Optional</sup> <a name="admin_password_wo_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput"></a>

```python
admin_password_wo_input: str
```

- *Type:* str

---

##### `admin_password_wo_version_input`<sup>Optional</sup> <a name="admin_password_wo_version_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput"></a>

```python
admin_password_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowlisted_ips_input`<sup>Optional</sup> <a name="allowlisted_ips_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput"></a>

```python
allowlisted_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autonomous_maintenance_schedule_type_input`<sup>Optional</sup> <a name="autonomous_maintenance_schedule_type_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```python
autonomous_maintenance_schedule_type_input: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds_input`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```python
auto_refresh_frequency_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds_input`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```python
auto_refresh_point_lag_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_period_in_days_input`<sup>Optional</sup> <a name="backup_retention_period_in_days_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```python
backup_retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit_input`<sup>Optional</sup> <a name="byol_compute_count_limit_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```python
byol_compute_count_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts_to_send_to_oci_input`<sup>Optional</sup> <a name="customer_contacts_to_send_to_oci_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput"></a>

```python
customer_contacts_to_send_to_oci_input: IResolvable | typing.List[OdbAutonomousDatabaseCustomerContactsToSendToOci]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]

---

##### `database_edition_input`<sup>Optional</sup> <a name="database_edition_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput"></a>

```python
database_edition_input: str
```

- *Type:* str

---

##### `data_storage_size_in_gbs_input`<sup>Optional</sup> <a name="data_storage_size_in_gbs_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput"></a>

```python
data_storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs_input`<sup>Optional</sup> <a name="data_storage_size_in_tbs_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```python
data_storage_size_in_tbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_tools_details_input`<sup>Optional</sup> <a name="db_tools_details_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput"></a>

```python
db_tools_details_input: IResolvable | typing.List[OdbAutonomousDatabaseDbToolsDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `db_workload_input`<sup>Optional</sup> <a name="db_workload_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput"></a>

```python
db_workload_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_key_provider_input`<sup>Optional</sup> <a name="encryption_key_provider_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput"></a>

```python
encryption_key_provider_input: str
```

- *Type:* str

---

##### `is_auto_scaling_enabled_input`<sup>Optional</sup> <a name="is_auto_scaling_enabled_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```python
is_auto_scaling_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_auto_scaling_for_storage_enabled_input`<sup>Optional</sup> <a name="is_auto_scaling_for_storage_enabled_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```python
is_auto_scaling_for_storage_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_backup_retention_locked_input`<sup>Optional</sup> <a name="is_backup_retention_locked_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput"></a>

```python
is_backup_retention_locked_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_local_data_guard_enabled_input`<sup>Optional</sup> <a name="is_local_data_guard_enabled_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```python
is_local_data_guard_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_mtls_connection_required_input`<sup>Optional</sup> <a name="is_mtls_connection_required_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```python
is_mtls_connection_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_refreshable_clone_input`<sup>Optional</sup> <a name="is_refreshable_clone_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput"></a>

```python
is_refreshable_clone_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit_input`<sup>Optional</sup> <a name="local_adg_auto_failover_max_data_loss_limit_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```python
local_adg_auto_failover_max_data_loss_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_term_backup_schedule_input`<sup>Optional</sup> <a name="long_term_backup_schedule_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```python
long_term_backup_schedule_input: IResolvable | typing.List[OdbAutonomousDatabaseLongTermBackupSchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]

---

##### `ncharacter_set_input`<sup>Optional</sup> <a name="ncharacter_set_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput"></a>

```python
ncharacter_set_input: str
```

- *Type:* str

---

##### `odb_network_id_input`<sup>Optional</sup> <a name="odb_network_id_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput"></a>

```python
odb_network_id_input: str
```

- *Type:* str

---

##### `open_mode_input`<sup>Optional</sup> <a name="open_mode_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput"></a>

```python
open_mode_input: str
```

- *Type:* str

---

##### `permission_level_input`<sup>Optional</sup> <a name="permission_level_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput"></a>

```python
permission_level_input: str
```

- *Type:* str

---

##### `private_endpoint_ip_input`<sup>Optional</sup> <a name="private_endpoint_ip_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput"></a>

```python
private_endpoint_ip_input: str
```

- *Type:* str

---

##### `private_endpoint_label_input`<sup>Optional</sup> <a name="private_endpoint_label_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput"></a>

```python
private_endpoint_label_input: str
```

- *Type:* str

---

##### `refreshable_mode_input`<sup>Optional</sup> <a name="refreshable_mode_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput"></a>

```python
refreshable_mode_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_pool_leader_id_input`<sup>Optional</sup> <a name="resource_pool_leader_id_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```python
resource_pool_leader_id_input: str
```

- *Type:* str

---

##### `resource_pool_summary_input`<sup>Optional</sup> <a name="resource_pool_summary_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```python
resource_pool_summary_input: IResolvable | typing.List[OdbAutonomousDatabaseResourcePoolSummary]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]

---

##### `scheduled_operations_input`<sup>Optional</sup> <a name="scheduled_operations_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput"></a>

```python
scheduled_operations_input: IResolvable | typing.List[OdbAutonomousDatabaseScheduledOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]

---

##### `source_configuration_input`<sup>Optional</sup> <a name="source_configuration_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput"></a>

```python
source_configuration_input: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `standby_allowlisted_ips_input`<sup>Optional</sup> <a name="standby_allowlisted_ips_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput"></a>

```python
standby_allowlisted_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `standby_allowlisted_ips_source_input`<sup>Optional</sup> <a name="standby_allowlisted_ips_source_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput"></a>

```python
standby_allowlisted_ips_source_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `time_of_auto_refresh_start_input`<sup>Optional</sup> <a name="time_of_auto_refresh_start_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```python
time_of_auto_refresh_start_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OdbAutonomousDatabaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `transportable_tablespace_input`<sup>Optional</sup> <a name="transportable_tablespace_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput"></a>

```python
transportable_tablespace_input: IResolvable | typing.List[OdbAutonomousDatabaseTransportableTablespace]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### ~~`admin_password_wo`~~<sup>Required</sup> <a name="admin_password_wo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
admin_password_wo: str
```

- *Type:* str

---

##### `admin_password_wo_version`<sup>Required</sup> <a name="admin_password_wo_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion"></a>

```python
admin_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowlisted_ips`<sup>Required</sup> <a name="allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps"></a>

```python
allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autonomous_maintenance_schedule_type`<sup>Required</sup> <a name="autonomous_maintenance_schedule_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds`<sup>Required</sup> <a name="auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds`<sup>Required</sup> <a name="auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit`<sup>Required</sup> <a name="byol_compute_count_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `data_storage_size_in_gbs`<sup>Required</sup> <a name="data_storage_size_in_gbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```python
data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_key_provider`<sup>Required</sup> <a name="encryption_key_provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```python
encryption_key_provider: str
```

- *Type:* str

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="is_auto_scaling_for_storage_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_backup_retention_locked`<sup>Required</sup> <a name="is_backup_retention_locked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```python
is_backup_retention_locked: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_local_data_guard_enabled`<sup>Required</sup> <a name="is_local_data_guard_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_mtls_connection_required`<sup>Required</sup> <a name="is_mtls_connection_required" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone"></a>

```python
is_refreshable_clone: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `permission_level`<sup>Required</sup> <a name="permission_level" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `refreshable_mode`<sup>Required</sup> <a name="refreshable_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_pool_leader_id`<sup>Required</sup> <a name="resource_pool_leader_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `standby_allowlisted_ips`<sup>Required</sup> <a name="standby_allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```python
standby_allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `standby_allowlisted_ips_source`<sup>Required</sup> <a name="standby_allowlisted_ips_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```python
standby_allowlisted_ips_source: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `time_of_auto_refresh_start`<sup>Required</sup> <a name="time_of_auto_refresh_start" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbAutonomousDatabaseAdminPasswordSource <a name="OdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource(
  customer_managed_aws_secret: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret">customer_managed_aws_secret</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>]</code> | customer_managed_aws_secret block. |

---

##### `customer_managed_aws_secret`<sup>Optional</sup> <a name="customer_managed_aws_secret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret"></a>

```python
customer_managed_aws_secret: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>]

customer_managed_aws_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#customer_managed_aws_secret OdbAutonomousDatabase#customer_managed_aws_secret}

---

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret(
  external_id_type: str,
  iam_role_arn: str,
  secret_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType">external_id_type</a></code> | <code>str</code> | Type of OCI identifier supplied as the external ID when OCI assumes the IAM role. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | ARN of the customer-managed IAM role OCI assumes to retrieve the secret. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn">secret_arn</a></code> | <code>str</code> | ARN of the AWS Secrets Manager secret that contains the ADMIN password. |

---

##### `external_id_type`<sup>Required</sup> <a name="external_id_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType"></a>

```python
external_id_type: str
```

- *Type:* str

Type of OCI identifier supplied as the external ID when OCI assumes the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#external_id_type OdbAutonomousDatabase#external_id_type}

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

ARN of the customer-managed IAM role OCI assumes to retrieve the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#iam_role_arn OdbAutonomousDatabase#iam_role_arn}

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

ARN of the AWS Secrets Manager secret that contains the ADMIN password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#secret_arn OdbAutonomousDatabase#secret_arn}

---

### OdbAutonomousDatabaseConfig <a name="OdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_password: str = None,
  admin_password_source: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSource] = None,
  admin_password_wo: str = None,
  admin_password_wo_version: typing.Union[int, float] = None,
  allowlisted_ips: typing.List[str] = None,
  autonomous_maintenance_schedule_type: str = None,
  auto_refresh_frequency_in_seconds: typing.Union[int, float] = None,
  auto_refresh_point_lag_in_seconds: typing.Union[int, float] = None,
  backup_retention_period_in_days: typing.Union[int, float] = None,
  byol_compute_count_limit: typing.Union[int, float] = None,
  character_set: str = None,
  compute_count: typing.Union[int, float] = None,
  cpu_core_count: typing.Union[int, float] = None,
  customer_contacts_to_send_to_oci: IResolvable | typing.List[OdbAutonomousDatabaseCustomerContactsToSendToOci] = None,
  database_edition: str = None,
  data_storage_size_in_gbs: typing.Union[int, float] = None,
  data_storage_size_in_tbs: typing.Union[int, float] = None,
  db_name: str = None,
  db_tools_details: IResolvable | typing.List[OdbAutonomousDatabaseDbToolsDetails] = None,
  db_version: str = None,
  db_workload: str = None,
  display_name: str = None,
  encryption_key_provider: str = None,
  is_auto_scaling_enabled: bool | IResolvable = None,
  is_auto_scaling_for_storage_enabled: bool | IResolvable = None,
  is_backup_retention_locked: bool | IResolvable = None,
  is_local_data_guard_enabled: bool | IResolvable = None,
  is_mtls_connection_required: bool | IResolvable = None,
  is_refreshable_clone: bool | IResolvable = None,
  kms_key_id: str = None,
  license_model: str = None,
  local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float] = None,
  long_term_backup_schedule: IResolvable | typing.List[OdbAutonomousDatabaseLongTermBackupSchedule] = None,
  ncharacter_set: str = None,
  odb_network_id: str = None,
  open_mode: str = None,
  permission_level: str = None,
  private_endpoint_ip: str = None,
  private_endpoint_label: str = None,
  refreshable_mode: str = None,
  region: str = None,
  resource_pool_leader_id: str = None,
  resource_pool_summary: IResolvable | typing.List[OdbAutonomousDatabaseResourcePoolSummary] = None,
  scheduled_operations: IResolvable | typing.List[OdbAutonomousDatabaseScheduledOperations] = None,
  source: str = None,
  source_configuration: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfiguration] = None,
  standby_allowlisted_ips: typing.List[str] = None,
  standby_allowlisted_ips_source: str = None,
  tags: typing.Mapping[str] = None,
  time_of_auto_refresh_start: str = None,
  timeouts: OdbAutonomousDatabaseTimeouts = None,
  transportable_tablespace: IResolvable | typing.List[OdbAutonomousDatabaseTransportableTablespace] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Password for the ADMIN user. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource">admin_password_source</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]</code> | admin_password_source block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo">admin_password_wo</a></code> | <code>str</code> | Password for the ADMIN user. This write-only value is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion">admin_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Arbitrary version used to trigger an ADMIN password update. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps">allowlisted_ips</a></code> | <code>typing.List[str]</code> | IP addresses allowed to access the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | Maintenance schedule type for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Frequency at which a refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Time lag between a refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Retention period for automatic backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | Maximum compute capacity under the bring-your-own-license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet">character_set</a></code> | <code>str</code> | Character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Compute capacity in ECPUs or OCPUs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Number of CPU cores allocated to the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci">customer_contacts_to_send_to_oci</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]</code> | customer_contacts_to_send_to_oci block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition">database_edition</a></code> | <code>str</code> | Oracle Database edition. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs">data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Data volume size in GB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Data volume size in TB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName">db_name</a></code> | <code>str</code> | Name of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails">db_tools_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]</code> | db_tools_details block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion">db_version</a></code> | <code>str</code> | Oracle Database software version. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload">db_workload</a></code> | <code>str</code> | Intended database workload. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly name for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider">encryption_key_provider</a></code> | <code>str</code> | Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether automatic compute scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether automatic storage scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked">is_backup_retention_locked</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the backup retention period is locked. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether local Oracle Data Guard is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether mutual TLS authentication is required. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the Autonomous Database is a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | ARN of the AWS KMS key used to encrypt the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Oracle license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | Maximum data-loss limit for automatic local Data Guard failover, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]</code> | long_term_backup_schedule block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | National character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | ID of the associated ODB network. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode">open_mode</a></code> | <code>str</code> | Open mode of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel">permission_level</a></code> | <code>str</code> | Permission level of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | Private endpoint IP address. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | Private endpoint label. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | Refresh mode of a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | ID of the resource-pool leader Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary">resource_pool_summary</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]</code> | resource_pool_summary block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations">scheduled_operations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]</code> | scheduled_operations block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source">source</a></code> | <code>str</code> | Source from which to create the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration">source_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]</code> | source_configuration block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps">standby_allowlisted_ips</a></code> | <code>typing.List[str]</code> | IP addresses allowed to access the standby Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource">standby_allowlisted_ips_source</a></code> | <code>str</code> | Source of the standby allowlisted IP addresses. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | Date and time when automatic refresh begins. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace">transportable_tablespace</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]</code> | transportable_tablespace block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Password for the ADMIN user.

This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}

---

##### `admin_password_source`<sup>Optional</sup> <a name="admin_password_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource"></a>

```python
admin_password_source: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]

admin_password_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}

---

##### `admin_password_wo`<sup>Optional</sup> <a name="admin_password_wo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo"></a>

```python
admin_password_wo: str
```

- *Type:* str

Password for the ADMIN user. This write-only value is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}

---

##### `admin_password_wo_version`<sup>Optional</sup> <a name="admin_password_wo_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion"></a>

```python
admin_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Arbitrary version used to trigger an ADMIN password update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}

---

##### `allowlisted_ips`<sup>Optional</sup> <a name="allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps"></a>

```python
allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

IP addresses allowed to access the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}

---

##### `autonomous_maintenance_schedule_type`<sup>Optional</sup> <a name="autonomous_maintenance_schedule_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

Maintenance schedule type for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}

---

##### `auto_refresh_frequency_in_seconds`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Frequency at which a refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `auto_refresh_point_lag_in_seconds`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time lag between a refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `backup_retention_period_in_days`<sup>Optional</sup> <a name="backup_retention_period_in_days" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Retention period for automatic backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}

---

##### `byol_compute_count_limit`<sup>Optional</sup> <a name="byol_compute_count_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum compute capacity under the bring-your-own-license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Compute capacity in ECPUs or OCPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of CPU cores allocated to the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}

---

##### `customer_contacts_to_send_to_oci`<sup>Optional</sup> <a name="customer_contacts_to_send_to_oci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci"></a>

```python
customer_contacts_to_send_to_oci: IResolvable | typing.List[OdbAutonomousDatabaseCustomerContactsToSendToOci]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]

customer_contacts_to_send_to_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}

---

##### `database_edition`<sup>Optional</sup> <a name="database_edition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

Oracle Database edition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}

---

##### `data_storage_size_in_gbs`<sup>Optional</sup> <a name="data_storage_size_in_gbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs"></a>

```python
data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Data volume size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}

---

##### `data_storage_size_in_tbs`<sup>Optional</sup> <a name="data_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Data volume size in TB.

Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Name of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}

---

##### `db_tools_details`<sup>Optional</sup> <a name="db_tools_details" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```python
db_tools_details: IResolvable | typing.List[OdbAutonomousDatabaseDbToolsDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Oracle Database software version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

Intended database workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly name for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}

---

##### `encryption_key_provider`<sup>Optional</sup> <a name="encryption_key_provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider"></a>

```python
encryption_key_provider: str
```

- *Type:* str

Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}

---

##### `is_auto_scaling_enabled`<sup>Optional</sup> <a name="is_auto_scaling_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether automatic compute scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}

---

##### `is_auto_scaling_for_storage_enabled`<sup>Optional</sup> <a name="is_auto_scaling_for_storage_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether automatic storage scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}

---

##### `is_backup_retention_locked`<sup>Optional</sup> <a name="is_backup_retention_locked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked"></a>

```python
is_backup_retention_locked: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the backup retention period is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}

---

##### `is_local_data_guard_enabled`<sup>Optional</sup> <a name="is_local_data_guard_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether local Oracle Data Guard is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}

---

##### `is_mtls_connection_required`<sup>Optional</sup> <a name="is_mtls_connection_required" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether mutual TLS authentication is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}

---

##### `is_refreshable_clone`<sup>Optional</sup> <a name="is_refreshable_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```python
is_refreshable_clone: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the Autonomous Database is a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

ARN of the AWS KMS key used to encrypt the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Oracle license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Optional</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum data-loss limit for automatic local Data Guard failover, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}

---

##### `long_term_backup_schedule`<sup>Optional</sup> <a name="long_term_backup_schedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: IResolvable | typing.List[OdbAutonomousDatabaseLongTermBackupSchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

National character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

ID of the associated ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}

---

##### `open_mode`<sup>Optional</sup> <a name="open_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

Open mode of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `permission_level`<sup>Optional</sup> <a name="permission_level" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

Permission level of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}

---

##### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

Private endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}

---

##### `private_endpoint_label`<sup>Optional</sup> <a name="private_endpoint_label" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

Private endpoint label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}

---

##### `refreshable_mode`<sup>Optional</sup> <a name="refreshable_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

Refresh mode of a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}

---

##### `resource_pool_leader_id`<sup>Optional</sup> <a name="resource_pool_leader_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

ID of the resource-pool leader Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}

---

##### `resource_pool_summary`<sup>Optional</sup> <a name="resource_pool_summary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```python
resource_pool_summary: IResolvable | typing.List[OdbAutonomousDatabaseResourcePoolSummary]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}

---

##### `scheduled_operations`<sup>Optional</sup> <a name="scheduled_operations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations"></a>

```python
scheduled_operations: IResolvable | typing.List[OdbAutonomousDatabaseScheduledOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Source from which to create the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}

---

##### `source_configuration`<sup>Optional</sup> <a name="source_configuration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration"></a>

```python
source_configuration: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]

source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}

---

##### `standby_allowlisted_ips`<sup>Optional</sup> <a name="standby_allowlisted_ips" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps"></a>

```python
standby_allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

IP addresses allowed to access the standby Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}

---

##### `standby_allowlisted_ips_source`<sup>Optional</sup> <a name="standby_allowlisted_ips_source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource"></a>

```python
standby_allowlisted_ips_source: str
```

- *Type:* str

Source of the standby allowlisted IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}.

---

##### `time_of_auto_refresh_start`<sup>Optional</sup> <a name="time_of_auto_refresh_start" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

Date and time when automatic refresh begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts"></a>

```python
timeouts: OdbAutonomousDatabaseTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}

---

##### `transportable_tablespace`<sup>Optional</sup> <a name="transportable_tablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace"></a>

```python
transportable_tablespace: IResolvable | typing.List[OdbAutonomousDatabaseTransportableTablespace]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]

transportable_tablespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}

---

### OdbAutonomousDatabaseCustomerContactsToSendToOci <a name="OdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci(
  email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email">email</a></code> | <code>str</code> | Email address of the customer contact. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the customer contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#email OdbAutonomousDatabase#email}

---

### OdbAutonomousDatabaseDbToolsDetails <a name="OdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails(
  compute_count: typing.Union[int, float] = None,
  is_enabled: bool | IResolvable = None,
  max_idle_time_in_minutes: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Compute capacity allocated to the database tool. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the database tool is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Maximum idle time before the database tool is shut down, in minutes. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name">name</a></code> | <code>str</code> | Name of the database tool. |

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Compute capacity allocated to the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the database tool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_enabled OdbAutonomousDatabase#is_enabled}

---

##### `max_idle_time_in_minutes`<sup>Optional</sup> <a name="max_idle_time_in_minutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum idle time before the database tool is shut down, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#max_idle_time_in_minutes OdbAutonomousDatabase#max_idle_time_in_minutes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#name OdbAutonomousDatabase#name}

---

### OdbAutonomousDatabaseLongTermBackupSchedule <a name="OdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule(
  is_disabled: bool | IResolvable = None,
  repeat_cadence: str = None,
  retention_period_in_days: typing.Union[int, float] = None,
  time_of_backup: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">is_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the long-term backup schedule is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | Cadence at which long-term backups are taken. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Retention period for long-term backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | Date and time at which the long-term backup is taken. |

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```python
is_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the long-term backup schedule is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `repeat_cadence`<sup>Optional</sup> <a name="repeat_cadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

Cadence at which long-term backups are taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#repeat_cadence OdbAutonomousDatabase#repeat_cadence}

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Retention period for long-term backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#retention_period_in_days OdbAutonomousDatabase#retention_period_in_days}

---

##### `time_of_backup`<sup>Optional</sup> <a name="time_of_backup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

Date and time at which the long-term backup is taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#time_of_backup OdbAutonomousDatabase#time_of_backup}

---

### OdbAutonomousDatabaseResourcePoolSummary <a name="OdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary(
  is_disabled: bool | IResolvable = None,
  pool_size: typing.Union[int, float] = None,
  pool_storage_size_in_tbs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled">is_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the resource pool is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | Number of Autonomous Databases the resource pool can contain. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs">pool_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Total storage size of the resource pool, in TB. |

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```python
is_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the resource pool is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `pool_size`<sup>Optional</sup> <a name="pool_size" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of Autonomous Databases the resource pool can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#pool_size OdbAutonomousDatabase#pool_size}

---

##### `pool_storage_size_in_tbs`<sup>Optional</sup> <a name="pool_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs"></a>

```python
pool_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total storage size of the resource pool, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#pool_storage_size_in_tbs OdbAutonomousDatabase#pool_storage_size_in_tbs}

---

### OdbAutonomousDatabaseScheduledOperations <a name="OdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations(
  day_of_week: str,
  scheduled_start_time: str = None,
  scheduled_stop_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Day of the week. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | Scheduled start time in UTC. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | Scheduled stop time in UTC. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Day of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#day_of_week OdbAutonomousDatabase#day_of_week}

---

##### `scheduled_start_time`<sup>Optional</sup> <a name="scheduled_start_time" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

Scheduled start time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#scheduled_start_time OdbAutonomousDatabase#scheduled_start_time}

---

##### `scheduled_stop_time`<sup>Optional</sup> <a name="scheduled_stop_time" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

Scheduled stop time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#scheduled_stop_time OdbAutonomousDatabase#scheduled_stop_time}

---

### OdbAutonomousDatabaseSourceConfiguration <a name="OdbAutonomousDatabaseSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration(
  clone_to_refreshable: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable] = None,
  cross_region_data_guard: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard] = None,
  cross_region_disaster_recovery: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery] = None,
  database_clone: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationDatabaseClone] = None,
  point_in_time_restore: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore] = None,
  restore_from_backup: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable">clone_to_refreshable</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>]</code> | clone_to_refreshable block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard">cross_region_data_guard</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>]</code> | cross_region_data_guard block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery">cross_region_disaster_recovery</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>]</code> | cross_region_disaster_recovery block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone">database_clone</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>]</code> | database_clone block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore">point_in_time_restore</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>]</code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup">restore_from_backup</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>]</code> | restore_from_backup block. |

---

##### `clone_to_refreshable`<sup>Optional</sup> <a name="clone_to_refreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable"></a>

```python
clone_to_refreshable: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>]

clone_to_refreshable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_to_refreshable OdbAutonomousDatabase#clone_to_refreshable}

---

##### `cross_region_data_guard`<sup>Optional</sup> <a name="cross_region_data_guard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard"></a>

```python
cross_region_data_guard: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>]

cross_region_data_guard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#cross_region_data_guard OdbAutonomousDatabase#cross_region_data_guard}

---

##### `cross_region_disaster_recovery`<sup>Optional</sup> <a name="cross_region_disaster_recovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery"></a>

```python
cross_region_disaster_recovery: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>]

cross_region_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#cross_region_disaster_recovery OdbAutonomousDatabase#cross_region_disaster_recovery}

---

##### `database_clone`<sup>Optional</sup> <a name="database_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone"></a>

```python
database_clone: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationDatabaseClone]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>]

database_clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#database_clone OdbAutonomousDatabase#database_clone}

---

##### `point_in_time_restore`<sup>Optional</sup> <a name="point_in_time_restore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore"></a>

```python
point_in_time_restore: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>]

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#point_in_time_restore OdbAutonomousDatabase#point_in_time_restore}

---

##### `restore_from_backup`<sup>Optional</sup> <a name="restore_from_backup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup"></a>

```python
restore_from_backup: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>]

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#restore_from_backup OdbAutonomousDatabase#restore_from_backup}

---

### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable(
  source_autonomous_database_id: str,
  auto_refresh_frequency_in_seconds: typing.Union[int, float] = None,
  auto_refresh_point_lag_in_seconds: typing.Union[int, float] = None,
  clone_type: str = None,
  open_mode: str = None,
  refreshable_mode: str = None,
  time_of_auto_refresh_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Frequency at which the refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Time lag between the refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType">clone_type</a></code> | <code>str</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode">open_mode</a></code> | <code>str</code> | Open mode of the refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | Refresh mode of the clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | Date and time when automatic refresh starts. |

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `auto_refresh_frequency_in_seconds`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Frequency at which the refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `auto_refresh_point_lag_in_seconds`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time lag between the refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `clone_type`<sup>Optional</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `open_mode`<sup>Optional</sup> <a name="open_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

Open mode of the refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `refreshable_mode`<sup>Optional</sup> <a name="refreshable_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

Refresh mode of the clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `time_of_auto_refresh_start`<sup>Optional</sup> <a name="time_of_auto_refresh_start" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

Date and time when automatic refresh starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard(
  source_autonomous_database_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn">source_autonomous_database_arn</a></code> | <code>str</code> | ARN of the source Autonomous Database. |

---

##### `source_autonomous_database_arn`<sup>Required</sup> <a name="source_autonomous_database_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn"></a>

```python
source_autonomous_database_arn: str
```

- *Type:* str

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery(
  remote_disaster_recovery_type: str,
  source_autonomous_database_arn: str,
  is_replicate_automatic_backups: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | Type of remote disaster recovery. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn">source_autonomous_database_arn</a></code> | <code>str</code> | ARN of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether automatic backups are replicated to the disaster recovery database. |

---

##### `remote_disaster_recovery_type`<sup>Required</sup> <a name="remote_disaster_recovery_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

Type of remote disaster recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#remote_disaster_recovery_type OdbAutonomousDatabase#remote_disaster_recovery_type}

---

##### `source_autonomous_database_arn`<sup>Required</sup> <a name="source_autonomous_database_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn"></a>

```python
source_autonomous_database_arn: str
```

- *Type:* str

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

##### `is_replicate_automatic_backups`<sup>Optional</sup> <a name="is_replicate_automatic_backups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether automatic backups are replicated to the disaster recovery database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_replicate_automatic_backups OdbAutonomousDatabase#is_replicate_automatic_backups}

---

### OdbAutonomousDatabaseSourceConfigurationDatabaseClone <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone(
  clone_type: str,
  source_autonomous_database_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType">clone_type</a></code> | <code>str</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | ID of the source Autonomous Database. |

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore(
  clone_type: str,
  source_autonomous_database_id: str,
  clone_table_space_list: typing.List[typing.Union[int, float]] = None,
  timestamp: str = None,
  use_latest_available_backup_timestamp: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType">clone_type</a></code> | <code>str</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList">clone_table_space_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Tablespace IDs to clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp">timestamp</a></code> | <code>str</code> | Date and time to which the database is restored. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp">use_latest_available_backup_timestamp</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to use the latest available backup timestamp. |

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `clone_table_space_list`<sup>Optional</sup> <a name="clone_table_space_list" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList"></a>

```python
clone_table_space_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

Date and time to which the database is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#timestamp OdbAutonomousDatabase#timestamp}

---

##### `use_latest_available_backup_timestamp`<sup>Optional</sup> <a name="use_latest_available_backup_timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp"></a>

```python
use_latest_available_backup_timestamp: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to use the latest available backup timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#use_latest_available_backup_timestamp OdbAutonomousDatabase#use_latest_available_backup_timestamp}

---

### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup(
  autonomous_database_backup_id: str,
  clone_type: str,
  clone_table_space_list: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId">autonomous_database_backup_id</a></code> | <code>str</code> | ID of the Autonomous Database backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType">clone_type</a></code> | <code>str</code> | Type of clone to create from the backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList">clone_table_space_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Tablespace IDs to clone. |

---

##### `autonomous_database_backup_id`<sup>Required</sup> <a name="autonomous_database_backup_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId"></a>

```python
autonomous_database_backup_id: str
```

- *Type:* str

ID of the Autonomous Database backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#autonomous_database_backup_id OdbAutonomousDatabase#autonomous_database_backup_id}

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

Type of clone to create from the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `clone_table_space_list`<sup>Optional</sup> <a name="clone_table_space_list" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList"></a>

```python
clone_table_space_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

### OdbAutonomousDatabaseTimeouts <a name="OdbAutonomousDatabaseTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#create OdbAutonomousDatabase#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#delete OdbAutonomousDatabase#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#update OdbAutonomousDatabase#update}

---

### OdbAutonomousDatabaseTransportableTablespace <a name="OdbAutonomousDatabaseTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace(
  tts_bundle_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl">tts_bundle_url</a></code> | <code>str</code> | URL of the transportable tablespace bundle. |

---

##### `tts_bundle_url`<sup>Optional</sup> <a name="tts_bundle_url" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl"></a>

```python
tts_bundle_url: str
```

- *Type:* str

URL of the transportable tablespace bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tts_bundle_url OdbAutonomousDatabase#tts_bundle_url}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>]

---


### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput">external_id_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">external_id_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_type_input`<sup>Optional</sup> <a name="external_id_type_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput"></a>

```python
external_id_type_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `external_id_type`<sup>Required</sup> <a name="external_id_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```python
external_id_type: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### OdbAutonomousDatabaseAdminPasswordSourceList <a name="OdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>]

---


### OdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret">put_customer_managed_aws_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret">reset_customer_managed_aws_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_managed_aws_secret` <a name="put_customer_managed_aws_secret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret"></a>

```python
def put_customer_managed_aws_secret(
  value: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>]

---

##### `reset_customer_managed_aws_secret` <a name="reset_customer_managed_aws_secret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret"></a>

```python
def reset_customer_managed_aws_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">customer_managed_aws_secret</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput">customer_managed_aws_secret_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_aws_secret`<sup>Required</sup> <a name="customer_managed_aws_secret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```python
customer_managed_aws_secret: OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `customer_managed_aws_secret_input`<sup>Optional</sup> <a name="customer_managed_aws_secret_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput"></a>

```python
customer_managed_aws_secret_input: IResolvable | typing.List[OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseAdminPasswordSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseCustomerContactsToSendToOci]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>]

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseCustomerContactsToSendToOci
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### OdbAutonomousDatabaseDbToolsDetailsList <a name="OdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseDbToolsDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>]

---


### OdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="OdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes">reset_max_idle_time_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_count` <a name="reset_compute_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_max_idle_time_in_minutes` <a name="reset_max_idle_time_in_minutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```python
def reset_max_idle_time_in_minutes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">max_idle_time_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_idle_time_in_minutes_input`<sup>Optional</sup> <a name="max_idle_time_in_minutes_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```python
max_idle_time_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_idle_time_in_minutes`<sup>Required</sup> <a name="max_idle_time_in_minutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseDbToolsDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>

---


### OdbAutonomousDatabaseLongTermBackupScheduleList <a name="OdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseLongTermBackupSchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>]

---


### OdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="OdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled">reset_is_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence">reset_repeat_cadence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays">reset_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup">reset_time_of_backup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_disabled` <a name="reset_is_disabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```python
def reset_is_disabled() -> None
```

##### `reset_repeat_cadence` <a name="reset_repeat_cadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```python
def reset_repeat_cadence() -> None
```

##### `reset_retention_period_in_days` <a name="reset_retention_period_in_days" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```python
def reset_retention_period_in_days() -> None
```

##### `reset_time_of_backup` <a name="reset_time_of_backup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```python
def reset_time_of_backup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">is_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">repeat_cadence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">time_of_backup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">is_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled_input`<sup>Optional</sup> <a name="is_disabled_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```python
is_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `repeat_cadence_input`<sup>Optional</sup> <a name="repeat_cadence_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```python
repeat_cadence_input: str
```

- *Type:* str

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup_input`<sup>Optional</sup> <a name="time_of_backup_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```python
time_of_backup_input: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```python
is_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `repeat_cadence`<sup>Required</sup> <a name="repeat_cadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup`<sup>Required</sup> <a name="time_of_backup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseLongTermBackupSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### OdbAutonomousDatabaseResourcePoolSummaryList <a name="OdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseResourcePoolSummary]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>]

---


### OdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="OdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled">reset_is_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize">reset_pool_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs">reset_pool_storage_size_in_tbs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_disabled` <a name="reset_is_disabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```python
def reset_is_disabled() -> None
```

##### `reset_pool_size` <a name="reset_pool_size" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```python
def reset_pool_size() -> None
```

##### `reset_pool_storage_size_in_tbs` <a name="reset_pool_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs"></a>

```python
def reset_pool_storage_size_in_tbs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">available_compute_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">available_storage_capacity_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">total_compute_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">is_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput">pool_storage_size_in_tbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">is_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">pool_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_compute_capacity`<sup>Required</sup> <a name="available_compute_capacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```python
available_compute_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_storage_capacity_in_tbs`<sup>Required</sup> <a name="available_storage_capacity_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```python
available_storage_capacity_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_compute_capacity`<sup>Required</sup> <a name="total_compute_capacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```python
total_compute_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_disabled_input`<sup>Optional</sup> <a name="is_disabled_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```python
is_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pool_size_input`<sup>Optional</sup> <a name="pool_size_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```python
pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_storage_size_in_tbs_input`<sup>Optional</sup> <a name="pool_storage_size_in_tbs_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput"></a>

```python
pool_storage_size_in_tbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```python
is_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_storage_size_in_tbs`<sup>Required</sup> <a name="pool_storage_size_in_tbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```python
pool_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseResourcePoolSummary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>

---


### OdbAutonomousDatabaseScheduledOperationsList <a name="OdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseScheduledOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>]

---


### OdbAutonomousDatabaseScheduledOperationsOutputReference <a name="OdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime">reset_scheduled_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime">reset_scheduled_stop_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scheduled_start_time` <a name="reset_scheduled_start_time" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```python
def reset_scheduled_start_time() -> None
```

##### `reset_scheduled_stop_time` <a name="reset_scheduled_stop_time" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```python
def reset_scheduled_stop_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">scheduled_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">scheduled_stop_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `scheduled_start_time_input`<sup>Optional</sup> <a name="scheduled_start_time_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```python
scheduled_start_time_input: str
```

- *Type:* str

---

##### `scheduled_stop_time_input`<sup>Optional</sup> <a name="scheduled_stop_time_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```python
scheduled_stop_time_input: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `scheduled_stop_time`<sup>Required</sup> <a name="scheduled_stop_time" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseScheduledOperations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>]

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds">reset_auto_refresh_frequency_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds">reset_auto_refresh_point_lag_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType">reset_clone_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode">reset_open_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode">reset_refreshable_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart">reset_time_of_auto_refresh_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_refresh_frequency_in_seconds` <a name="reset_auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds"></a>

```python
def reset_auto_refresh_frequency_in_seconds() -> None
```

##### `reset_auto_refresh_point_lag_in_seconds` <a name="reset_auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds"></a>

```python
def reset_auto_refresh_point_lag_in_seconds() -> None
```

##### `reset_clone_type` <a name="reset_clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType"></a>

```python
def reset_clone_type() -> None
```

##### `reset_open_mode` <a name="reset_open_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode"></a>

```python
def reset_open_mode() -> None
```

##### `reset_refreshable_mode` <a name="reset_refreshable_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode"></a>

```python
def reset_refreshable_mode() -> None
```

##### `reset_time_of_auto_refresh_start` <a name="reset_time_of_auto_refresh_start" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart"></a>

```python
def reset_time_of_auto_refresh_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput">auto_refresh_frequency_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput">auto_refresh_point_lag_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput">clone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput">open_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput">refreshable_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput">source_autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput">time_of_auto_refresh_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds_input`<sup>Optional</sup> <a name="auto_refresh_frequency_in_seconds_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput"></a>

```python
auto_refresh_frequency_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds_input`<sup>Optional</sup> <a name="auto_refresh_point_lag_in_seconds_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput"></a>

```python
auto_refresh_point_lag_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `clone_type_input`<sup>Optional</sup> <a name="clone_type_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput"></a>

```python
clone_type_input: str
```

- *Type:* str

---

##### `open_mode_input`<sup>Optional</sup> <a name="open_mode_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput"></a>

```python
open_mode_input: str
```

- *Type:* str

---

##### `refreshable_mode_input`<sup>Optional</sup> <a name="refreshable_mode_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput"></a>

```python
refreshable_mode_input: str
```

- *Type:* str

---

##### `source_autonomous_database_id_input`<sup>Optional</sup> <a name="source_autonomous_database_id_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```python
source_autonomous_database_id_input: str
```

- *Type:* str

---

##### `time_of_auto_refresh_start_input`<sup>Optional</sup> <a name="time_of_auto_refresh_start_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput"></a>

```python
time_of_auto_refresh_start_input: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds`<sup>Required</sup> <a name="auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds`<sup>Required</sup> <a name="auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `refreshable_mode`<sup>Required</sup> <a name="refreshable_mode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

---

##### `time_of_auto_refresh_start`<sup>Required</sup> <a name="time_of_auto_refresh_start" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>]

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput">source_autonomous_database_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn">source_autonomous_database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_autonomous_database_arn_input`<sup>Optional</sup> <a name="source_autonomous_database_arn_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```python
source_autonomous_database_arn_input: str
```

- *Type:* str

---

##### `source_autonomous_database_arn`<sup>Required</sup> <a name="source_autonomous_database_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn"></a>

```python
source_autonomous_database_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>]

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups">reset_is_replicate_automatic_backups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_replicate_automatic_backups` <a name="reset_is_replicate_automatic_backups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups"></a>

```python
def reset_is_replicate_automatic_backups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput">is_replicate_automatic_backups_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput">remote_disaster_recovery_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput">source_autonomous_database_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn">source_autonomous_database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_replicate_automatic_backups_input`<sup>Optional</sup> <a name="is_replicate_automatic_backups_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput"></a>

```python
is_replicate_automatic_backups_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remote_disaster_recovery_type_input`<sup>Optional</sup> <a name="remote_disaster_recovery_type_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput"></a>

```python
remote_disaster_recovery_type_input: str
```

- *Type:* str

---

##### `source_autonomous_database_arn_input`<sup>Optional</sup> <a name="source_autonomous_database_arn_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```python
source_autonomous_database_arn_input: str
```

- *Type:* str

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remote_disaster_recovery_type`<sup>Required</sup> <a name="remote_disaster_recovery_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

---

##### `source_autonomous_database_arn`<sup>Required</sup> <a name="source_autonomous_database_arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn"></a>

```python
source_autonomous_database_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationDatabaseClone]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>]

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput">clone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput">source_autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clone_type_input`<sup>Optional</sup> <a name="clone_type_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput"></a>

```python
clone_type_input: str
```

- *Type:* str

---

##### `source_autonomous_database_id_input`<sup>Optional</sup> <a name="source_autonomous_database_id_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```python
source_autonomous_database_id_input: str
```

- *Type:* str

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseSourceConfigurationDatabaseClone
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>

---


### OdbAutonomousDatabaseSourceConfigurationList <a name="OdbAutonomousDatabaseSourceConfigurationList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseSourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>]

---


### OdbAutonomousDatabaseSourceConfigurationOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable">put_clone_to_refreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard">put_cross_region_data_guard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery">put_cross_region_disaster_recovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone">put_database_clone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore">put_point_in_time_restore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup">put_restore_from_backup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable">reset_clone_to_refreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard">reset_cross_region_data_guard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery">reset_cross_region_disaster_recovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone">reset_database_clone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore">reset_point_in_time_restore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup">reset_restore_from_backup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clone_to_refreshable` <a name="put_clone_to_refreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable"></a>

```python
def put_clone_to_refreshable(
  value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>]

---

##### `put_cross_region_data_guard` <a name="put_cross_region_data_guard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard"></a>

```python
def put_cross_region_data_guard(
  value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>]

---

##### `put_cross_region_disaster_recovery` <a name="put_cross_region_disaster_recovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery"></a>

```python
def put_cross_region_disaster_recovery(
  value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>]

---

##### `put_database_clone` <a name="put_database_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone"></a>

```python
def put_database_clone(
  value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationDatabaseClone]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>]

---

##### `put_point_in_time_restore` <a name="put_point_in_time_restore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore"></a>

```python
def put_point_in_time_restore(
  value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>]

---

##### `put_restore_from_backup` <a name="put_restore_from_backup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup"></a>

```python
def put_restore_from_backup(
  value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>]

---

##### `reset_clone_to_refreshable` <a name="reset_clone_to_refreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable"></a>

```python
def reset_clone_to_refreshable() -> None
```

##### `reset_cross_region_data_guard` <a name="reset_cross_region_data_guard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard"></a>

```python
def reset_cross_region_data_guard() -> None
```

##### `reset_cross_region_disaster_recovery` <a name="reset_cross_region_disaster_recovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery"></a>

```python
def reset_cross_region_disaster_recovery() -> None
```

##### `reset_database_clone` <a name="reset_database_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone"></a>

```python
def reset_database_clone() -> None
```

##### `reset_point_in_time_restore` <a name="reset_point_in_time_restore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore"></a>

```python
def reset_point_in_time_restore() -> None
```

##### `reset_restore_from_backup` <a name="reset_restore_from_backup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup"></a>

```python
def reset_restore_from_backup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable">clone_to_refreshable</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard">cross_region_data_guard</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery">cross_region_disaster_recovery</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone">database_clone</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore">point_in_time_restore</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup">restore_from_backup</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput">clone_to_refreshable_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput">cross_region_data_guard_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput">cross_region_disaster_recovery_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput">database_clone_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput">point_in_time_restore_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput">restore_from_backup_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clone_to_refreshable`<sup>Required</sup> <a name="clone_to_refreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable"></a>

```python
clone_to_refreshable: OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a>

---

##### `cross_region_data_guard`<sup>Required</sup> <a name="cross_region_data_guard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard"></a>

```python
cross_region_data_guard: OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a>

---

##### `cross_region_disaster_recovery`<sup>Required</sup> <a name="cross_region_disaster_recovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery"></a>

```python
cross_region_disaster_recovery: OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a>

---

##### `database_clone`<sup>Required</sup> <a name="database_clone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone"></a>

```python
database_clone: OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a>

---

##### `point_in_time_restore`<sup>Required</sup> <a name="point_in_time_restore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore"></a>

```python
point_in_time_restore: OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a>

---

##### `restore_from_backup`<sup>Required</sup> <a name="restore_from_backup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup"></a>

```python
restore_from_backup: OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a>

---

##### `clone_to_refreshable_input`<sup>Optional</sup> <a name="clone_to_refreshable_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput"></a>

```python
clone_to_refreshable_input: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>]

---

##### `cross_region_data_guard_input`<sup>Optional</sup> <a name="cross_region_data_guard_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput"></a>

```python
cross_region_data_guard_input: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>]

---

##### `cross_region_disaster_recovery_input`<sup>Optional</sup> <a name="cross_region_disaster_recovery_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput"></a>

```python
cross_region_disaster_recovery_input: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>]

---

##### `database_clone_input`<sup>Optional</sup> <a name="database_clone_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput"></a>

```python
database_clone_input: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationDatabaseClone]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>]

---

##### `point_in_time_restore_input`<sup>Optional</sup> <a name="point_in_time_restore_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput"></a>

```python
point_in_time_restore_input: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>]

---

##### `restore_from_backup_input`<sup>Optional</sup> <a name="restore_from_backup_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput"></a>

```python
restore_from_backup_input: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>]

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList">reset_clone_table_space_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp">reset_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp">reset_use_latest_available_backup_timestamp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_clone_table_space_list` <a name="reset_clone_table_space_list" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList"></a>

```python
def reset_clone_table_space_list() -> None
```

##### `reset_timestamp` <a name="reset_timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp"></a>

```python
def reset_timestamp() -> None
```

##### `reset_use_latest_available_backup_timestamp` <a name="reset_use_latest_available_backup_timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp"></a>

```python
def reset_use_latest_available_backup_timestamp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput">clone_table_space_list_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput">clone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput">source_autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput">timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput">use_latest_available_backup_timestamp_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList">clone_table_space_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp">use_latest_available_backup_timestamp</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clone_table_space_list_input`<sup>Optional</sup> <a name="clone_table_space_list_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput"></a>

```python
clone_table_space_list_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `clone_type_input`<sup>Optional</sup> <a name="clone_type_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput"></a>

```python
clone_type_input: str
```

- *Type:* str

---

##### `source_autonomous_database_id_input`<sup>Optional</sup> <a name="source_autonomous_database_id_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```python
source_autonomous_database_id_input: str
```

- *Type:* str

---

##### `timestamp_input`<sup>Optional</sup> <a name="timestamp_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput"></a>

```python
timestamp_input: str
```

- *Type:* str

---

##### `use_latest_available_backup_timestamp_input`<sup>Optional</sup> <a name="use_latest_available_backup_timestamp_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput"></a>

```python
use_latest_available_backup_timestamp_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `clone_table_space_list`<sup>Required</sup> <a name="clone_table_space_list" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList"></a>

```python
clone_table_space_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `use_latest_available_backup_timestamp`<sup>Required</sup> <a name="use_latest_available_backup_timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp"></a>

```python
use_latest_available_backup_timestamp: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>]

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList">reset_clone_table_space_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_clone_table_space_list` <a name="reset_clone_table_space_list" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList"></a>

```python
def reset_clone_table_space_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput">autonomous_database_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput">clone_table_space_list_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput">clone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId">autonomous_database_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList">clone_table_space_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_backup_id_input`<sup>Optional</sup> <a name="autonomous_database_backup_id_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput"></a>

```python
autonomous_database_backup_id_input: str
```

- *Type:* str

---

##### `clone_table_space_list_input`<sup>Optional</sup> <a name="clone_table_space_list_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput"></a>

```python
clone_table_space_list_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `clone_type_input`<sup>Optional</sup> <a name="clone_type_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput"></a>

```python
clone_type_input: str
```

- *Type:* str

---

##### `autonomous_database_backup_id`<sup>Required</sup> <a name="autonomous_database_backup_id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId"></a>

```python
autonomous_database_backup_id: str
```

- *Type:* str

---

##### `clone_table_space_list`<sup>Required</sup> <a name="clone_table_space_list" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList"></a>

```python
clone_table_space_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>

---


### OdbAutonomousDatabaseTimeoutsOutputReference <a name="OdbAutonomousDatabaseTimeoutsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---


### OdbAutonomousDatabaseTransportableTablespaceList <a name="OdbAutonomousDatabaseTransportableTablespaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbAutonomousDatabaseTransportableTablespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbAutonomousDatabaseTransportableTablespace]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>]

---


### OdbAutonomousDatabaseTransportableTablespaceOutputReference <a name="OdbAutonomousDatabaseTransportableTablespaceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import odb_autonomous_database

odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl">reset_tts_bundle_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tts_bundle_url` <a name="reset_tts_bundle_url" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl"></a>

```python
def reset_tts_bundle_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput">tts_bundle_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl">tts_bundle_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tts_bundle_url_input`<sup>Optional</sup> <a name="tts_bundle_url_input" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput"></a>

```python
tts_bundle_url_input: str
```

- *Type:* str

---

##### `tts_bundle_url`<sup>Required</sup> <a name="tts_bundle_url" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl"></a>

```python
tts_bundle_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbAutonomousDatabaseTransportableTablespace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>

---



