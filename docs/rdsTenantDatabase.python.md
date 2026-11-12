# `rdsTenantDatabase` Submodule <a name="`rdsTenantDatabase` Submodule" id="@cdktn/provider-aws.rdsTenantDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsTenantDatabase <a name="RdsTenantDatabase" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database aws_rds_tenant_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_instance_identifier: str,
  master_username: str,
  tenant_db_name: str,
  character_set_name: str = None,
  final_snapshot_identifier: str = None,
  manage_master_user_password: bool | IResolvable = None,
  master_user_password: str = None,
  master_user_password_wo: str = None,
  master_user_password_wo_version: typing.Union[int, float] = None,
  master_user_secret_kms_key_id: str = None,
  nchar_character_set_name: str = None,
  region: str = None,
  skip_final_snapshot: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: RdsTenantDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#db_instance_identifier RdsTenantDatabase#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_username RdsTenantDatabase#master_username}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.tenantDbName">tenant_db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tenant_db_name RdsTenantDatabase#tenant_db_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.characterSetName">character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#character_set_name RdsTenantDatabase#character_set_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#final_snapshot_identifier RdsTenantDatabase#final_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#manage_master_user_password RdsTenantDatabase#manage_master_user_password}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserPassword">master_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password RdsTenantDatabase#master_user_password}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserPasswordWo">master_user_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo RdsTenantDatabase#master_user_password_wo}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserPasswordWoVersion">master_user_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo_version RdsTenantDatabase#master_user_password_wo_version}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserSecretKmsKeyId">master_user_secret_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_secret_kms_key_id RdsTenantDatabase#master_user_secret_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#nchar_character_set_name RdsTenantDatabase#nchar_character_set_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#skip_final_snapshot RdsTenantDatabase#skip_final_snapshot}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tags RdsTenantDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#db_instance_identifier RdsTenantDatabase#db_instance_identifier}.

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_username RdsTenantDatabase#master_username}.

---

##### `tenant_db_name`<sup>Required</sup> <a name="tenant_db_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.tenantDbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tenant_db_name RdsTenantDatabase#tenant_db_name}.

---

##### `character_set_name`<sup>Optional</sup> <a name="character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.characterSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#character_set_name RdsTenantDatabase#character_set_name}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#final_snapshot_identifier RdsTenantDatabase#final_snapshot_identifier}.

---

##### `manage_master_user_password`<sup>Optional</sup> <a name="manage_master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.manageMasterUserPassword"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#manage_master_user_password RdsTenantDatabase#manage_master_user_password}.

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password RdsTenantDatabase#master_user_password}.

---

##### `master_user_password_wo`<sup>Optional</sup> <a name="master_user_password_wo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserPasswordWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo RdsTenantDatabase#master_user_password_wo}.

---

##### `master_user_password_wo_version`<sup>Optional</sup> <a name="master_user_password_wo_version" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserPasswordWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo_version RdsTenantDatabase#master_user_password_wo_version}.

---

##### `master_user_secret_kms_key_id`<sup>Optional</sup> <a name="master_user_secret_kms_key_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.masterUserSecretKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_secret_kms_key_id RdsTenantDatabase#master_user_secret_kms_key_id}.

---

##### `nchar_character_set_name`<sup>Optional</sup> <a name="nchar_character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.ncharCharacterSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#nchar_character_set_name RdsTenantDatabase#nchar_character_set_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#region RdsTenantDatabase#region}

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#skip_final_snapshot RdsTenantDatabase#skip_final_snapshot}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tags RdsTenantDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#timeouts RdsTenantDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetCharacterSetName">reset_character_set_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetFinalSnapshotIdentifier">reset_final_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetManageMasterUserPassword">reset_manage_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWo">reset_master_user_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWoVersion">reset_master_user_password_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserSecretKmsKeyId">reset_master_user_secret_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetNcharCharacterSetName">reset_nchar_character_set_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetSkipFinalSnapshot">reset_skip_final_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#create RdsTenantDatabase#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#delete RdsTenantDatabase#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#update RdsTenantDatabase#update}

---

##### `reset_character_set_name` <a name="reset_character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetCharacterSetName"></a>

```python
def reset_character_set_name() -> None
```

##### `reset_final_snapshot_identifier` <a name="reset_final_snapshot_identifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetFinalSnapshotIdentifier"></a>

```python
def reset_final_snapshot_identifier() -> None
```

##### `reset_manage_master_user_password` <a name="reset_manage_master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetManageMasterUserPassword"></a>

```python
def reset_manage_master_user_password() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```

##### `reset_master_user_password_wo` <a name="reset_master_user_password_wo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWo"></a>

```python
def reset_master_user_password_wo() -> None
```

##### `reset_master_user_password_wo_version` <a name="reset_master_user_password_wo_version" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserPasswordWoVersion"></a>

```python
def reset_master_user_password_wo_version() -> None
```

##### `reset_master_user_secret_kms_key_id` <a name="reset_master_user_secret_kms_key_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetMasterUserSecretKmsKeyId"></a>

```python
def reset_master_user_secret_kms_key_id() -> None
```

##### `reset_nchar_character_set_name` <a name="reset_nchar_character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetNcharCharacterSetName"></a>

```python
def reset_nchar_character_set_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_skip_final_snapshot` <a name="reset_skip_final_snapshot" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetSkipFinalSnapshot"></a>

```python
def reset_skip_final_snapshot() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsTenantDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isConstruct"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformElement"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformResource"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsTenantDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsTenantDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsTenantDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsTenantDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecret">master_user_secret</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList">RdsTenantDatabaseMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDatabaseResourceId">tenant_database_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference">RdsTenantDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetNameInput">character_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifierInput">db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifierInput">final_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPasswordInput">manage_master_user_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoInput">master_user_password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersionInput">master_user_password_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyIdInput">master_user_secret_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetNameInput">nchar_character_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshotInput">skip_final_snapshot_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbNameInput">tenant_db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetName">character_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWo">master_user_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersion">master_user_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyId">master_user_secret_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbName">tenant_db_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `master_user_secret`<sup>Required</sup> <a name="master_user_secret" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecret"></a>

```python
master_user_secret: RdsTenantDatabaseMasterUserSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList">RdsTenantDatabaseMasterUserSecretList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `tenant_database_resource_id`<sup>Required</sup> <a name="tenant_database_resource_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDatabaseResourceId"></a>

```python
tenant_database_resource_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeouts"></a>

```python
timeouts: RdsTenantDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference">RdsTenantDatabaseTimeoutsOutputReference</a>

---

##### `character_set_name_input`<sup>Optional</sup> <a name="character_set_name_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetNameInput"></a>

```python
character_set_name_input: str
```

- *Type:* str

---

##### `db_instance_identifier_input`<sup>Optional</sup> <a name="db_instance_identifier_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifierInput"></a>

```python
db_instance_identifier_input: str
```

- *Type:* str

---

##### `final_snapshot_identifier_input`<sup>Optional</sup> <a name="final_snapshot_identifier_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifierInput"></a>

```python
final_snapshot_identifier_input: str
```

- *Type:* str

---

##### `manage_master_user_password_input`<sup>Optional</sup> <a name="manage_master_user_password_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPasswordInput"></a>

```python
manage_master_user_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `master_user_password_wo_input`<sup>Optional</sup> <a name="master_user_password_wo_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoInput"></a>

```python
master_user_password_wo_input: str
```

- *Type:* str

---

##### `master_user_password_wo_version_input`<sup>Optional</sup> <a name="master_user_password_wo_version_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersionInput"></a>

```python
master_user_password_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_user_secret_kms_key_id_input`<sup>Optional</sup> <a name="master_user_secret_kms_key_id_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyIdInput"></a>

```python
master_user_secret_kms_key_id_input: str
```

- *Type:* str

---

##### `nchar_character_set_name_input`<sup>Optional</sup> <a name="nchar_character_set_name_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetNameInput"></a>

```python
nchar_character_set_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `skip_final_snapshot_input`<sup>Optional</sup> <a name="skip_final_snapshot_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshotInput"></a>

```python
skip_final_snapshot_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_db_name_input`<sup>Optional</sup> <a name="tenant_db_name_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbNameInput"></a>

```python
tenant_db_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | RdsTenantDatabaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

---

##### `character_set_name`<sup>Required</sup> <a name="character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.characterSetName"></a>

```python
character_set_name: str
```

- *Type:* str

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

---

##### `final_snapshot_identifier`<sup>Required</sup> <a name="final_snapshot_identifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

---

##### `manage_master_user_password`<sup>Required</sup> <a name="manage_master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.manageMasterUserPassword"></a>

```python
manage_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### ~~`master_user_password_wo`~~<sup>Required</sup> <a name="master_user_password_wo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
master_user_password_wo: str
```

- *Type:* str

---

##### `master_user_password_wo_version`<sup>Required</sup> <a name="master_user_password_wo_version" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserPasswordWoVersion"></a>

```python
master_user_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_user_secret_kms_key_id`<sup>Required</sup> <a name="master_user_secret_kms_key_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.masterUserSecretKmsKeyId"></a>

```python
master_user_secret_kms_key_id: str
```

- *Type:* str

---

##### `nchar_character_set_name`<sup>Required</sup> <a name="nchar_character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.ncharCharacterSetName"></a>

```python
nchar_character_set_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `skip_final_snapshot`<sup>Required</sup> <a name="skip_final_snapshot" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_db_name`<sup>Required</sup> <a name="tenant_db_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tenantDbName"></a>

```python
tenant_db_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsTenantDatabaseConfig <a name="RdsTenantDatabaseConfig" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_instance_identifier: str,
  master_username: str,
  tenant_db_name: str,
  character_set_name: str = None,
  final_snapshot_identifier: str = None,
  manage_master_user_password: bool | IResolvable = None,
  master_user_password: str = None,
  master_user_password_wo: str = None,
  master_user_password_wo_version: typing.Union[int, float] = None,
  master_user_secret_kms_key_id: str = None,
  nchar_character_set_name: str = None,
  region: str = None,
  skip_final_snapshot: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: RdsTenantDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#db_instance_identifier RdsTenantDatabase#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_username RdsTenantDatabase#master_username}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tenantDbName">tenant_db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tenant_db_name RdsTenantDatabase#tenant_db_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.characterSetName">character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#character_set_name RdsTenantDatabase#character_set_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#final_snapshot_identifier RdsTenantDatabase#final_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#manage_master_user_password RdsTenantDatabase#manage_master_user_password}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password RdsTenantDatabase#master_user_password}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWo">master_user_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo RdsTenantDatabase#master_user_password_wo}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWoVersion">master_user_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo_version RdsTenantDatabase#master_user_password_wo_version}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserSecretKmsKeyId">master_user_secret_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_secret_kms_key_id RdsTenantDatabase#master_user_secret_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#nchar_character_set_name RdsTenantDatabase#nchar_character_set_name}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#skip_final_snapshot RdsTenantDatabase#skip_final_snapshot}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tags RdsTenantDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#db_instance_identifier RdsTenantDatabase#db_instance_identifier}.

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_username RdsTenantDatabase#master_username}.

---

##### `tenant_db_name`<sup>Required</sup> <a name="tenant_db_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tenantDbName"></a>

```python
tenant_db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tenant_db_name RdsTenantDatabase#tenant_db_name}.

---

##### `character_set_name`<sup>Optional</sup> <a name="character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.characterSetName"></a>

```python
character_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#character_set_name RdsTenantDatabase#character_set_name}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#final_snapshot_identifier RdsTenantDatabase#final_snapshot_identifier}.

---

##### `manage_master_user_password`<sup>Optional</sup> <a name="manage_master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.manageMasterUserPassword"></a>

```python
manage_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#manage_master_user_password RdsTenantDatabase#manage_master_user_password}.

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password RdsTenantDatabase#master_user_password}.

---

##### `master_user_password_wo`<sup>Optional</sup> <a name="master_user_password_wo" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWo"></a>

```python
master_user_password_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo RdsTenantDatabase#master_user_password_wo}.

---

##### `master_user_password_wo_version`<sup>Optional</sup> <a name="master_user_password_wo_version" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserPasswordWoVersion"></a>

```python
master_user_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_password_wo_version RdsTenantDatabase#master_user_password_wo_version}.

---

##### `master_user_secret_kms_key_id`<sup>Optional</sup> <a name="master_user_secret_kms_key_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.masterUserSecretKmsKeyId"></a>

```python
master_user_secret_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#master_user_secret_kms_key_id RdsTenantDatabase#master_user_secret_kms_key_id}.

---

##### `nchar_character_set_name`<sup>Optional</sup> <a name="nchar_character_set_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.ncharCharacterSetName"></a>

```python
nchar_character_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#nchar_character_set_name RdsTenantDatabase#nchar_character_set_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#region RdsTenantDatabase#region}

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#skip_final_snapshot RdsTenantDatabase#skip_final_snapshot}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#tags RdsTenantDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseConfig.property.timeouts"></a>

```python
timeouts: RdsTenantDatabaseTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#timeouts RdsTenantDatabase#timeouts}

---

### RdsTenantDatabaseMasterUserSecret <a name="RdsTenantDatabaseMasterUserSecret" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret.Initializer"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret()
```


### RdsTenantDatabaseTimeouts <a name="RdsTenantDatabaseTimeouts" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#create RdsTenantDatabase#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#delete RdsTenantDatabase#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/rds_tenant_database#update RdsTenantDatabase#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsTenantDatabaseMasterUserSecretList <a name="RdsTenantDatabaseMasterUserSecretList" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsTenantDatabaseMasterUserSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RdsTenantDatabaseMasterUserSecretOutputReference <a name="RdsTenantDatabaseMasterUserSecretOutputReference" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretStatus">secret_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret">RdsTenantDatabaseMasterUserSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_status`<sup>Required</sup> <a name="secret_status" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.secretStatus"></a>

```python
secret_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecretOutputReference.property.internalValue"></a>

```python
internal_value: RdsTenantDatabaseMasterUserSecret
```

- *Type:* <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseMasterUserSecret">RdsTenantDatabaseMasterUserSecret</a>

---


### RdsTenantDatabaseTimeoutsOutputReference <a name="RdsTenantDatabaseTimeoutsOutputReference" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import rds_tenant_database

rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsTenantDatabaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.rdsTenantDatabase.RdsTenantDatabaseTimeouts">RdsTenantDatabaseTimeouts</a>

---



