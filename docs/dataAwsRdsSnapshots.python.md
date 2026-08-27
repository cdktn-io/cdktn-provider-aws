# `dataAwsRdsSnapshots` Submodule <a name="`dataAwsRdsSnapshots` Submodule" id="@cdktn/provider-aws.dataAwsRdsSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsSnapshots <a name="DataAwsRdsSnapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots aws_rds_snapshots}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshots(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_instance_identifier: str = None,
  db_snapshot_identifier: str = None,
  filter: IResolvable | typing.List[DataAwsRdsSnapshotsFilter] = None,
  include_public: bool | IResolvable = None,
  include_shared: bool | IResolvable = None,
  region: str = None,
  snapshot_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.includePublic">include_public</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.includeShared">include_shared</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.snapshotType">snapshot_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}.

---

##### `db_snapshot_identifier`<sup>Optional</sup> <a name="db_snapshot_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.dbSnapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#filter DataAwsRdsSnapshots#filter}

---

##### `include_public`<sup>Optional</sup> <a name="include_public" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.includePublic"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}.

---

##### `include_shared`<sup>Optional</sup> <a name="include_shared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.includeShared"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#region DataAwsRdsSnapshots#region}

---

##### `snapshot_type`<sup>Optional</sup> <a name="snapshot_type" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.snapshotType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbInstanceIdentifier">reset_db_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbSnapshotIdentifier">reset_db_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludePublic">reset_include_public</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludeShared">reset_include_shared</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetSnapshotType">reset_snapshot_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[DataAwsRdsSnapshotsFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]

---

##### `reset_db_instance_identifier` <a name="reset_db_instance_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbInstanceIdentifier"></a>

```python
def reset_db_instance_identifier() -> None
```

##### `reset_db_snapshot_identifier` <a name="reset_db_snapshot_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbSnapshotIdentifier"></a>

```python
def reset_db_snapshot_identifier() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_include_public` <a name="reset_include_public" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludePublic"></a>

```python
def reset_include_public() -> None
```

##### `reset_include_shared` <a name="reset_include_shared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludeShared"></a>

```python
def reset_include_shared() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_snapshot_type` <a name="reset_snapshot_type" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetSnapshotType"></a>

```python
def reset_snapshot_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsRdsSnapshots resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshots.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshots.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshots.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshots.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsRdsSnapshots resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsRdsSnapshots to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsRdsSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRdsSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList">DataAwsRdsSnapshotsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshots">snapshots</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList">DataAwsRdsSnapshotsSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifierInput">db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifierInput">db_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublicInput">include_public_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeSharedInput">include_shared_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotTypeInput">snapshot_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublic">include_public</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeShared">include_shared</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotType">snapshot_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filter"></a>

```python
filter: DataAwsRdsSnapshotsFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList">DataAwsRdsSnapshotsFilterList</a>

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshots"></a>

```python
snapshots: DataAwsRdsSnapshotsSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList">DataAwsRdsSnapshotsSnapshotsList</a>

---

##### `db_instance_identifier_input`<sup>Optional</sup> <a name="db_instance_identifier_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifierInput"></a>

```python
db_instance_identifier_input: str
```

- *Type:* str

---

##### `db_snapshot_identifier_input`<sup>Optional</sup> <a name="db_snapshot_identifier_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifierInput"></a>

```python
db_snapshot_identifier_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[DataAwsRdsSnapshotsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]

---

##### `include_public_input`<sup>Optional</sup> <a name="include_public_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublicInput"></a>

```python
include_public_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_shared_input`<sup>Optional</sup> <a name="include_shared_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeSharedInput"></a>

```python
include_shared_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `snapshot_type_input`<sup>Optional</sup> <a name="snapshot_type_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotTypeInput"></a>

```python
snapshot_type_input: str
```

- *Type:* str

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

---

##### `db_snapshot_identifier`<sup>Required</sup> <a name="db_snapshot_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifier"></a>

```python
db_snapshot_identifier: str
```

- *Type:* str

---

##### `include_public`<sup>Required</sup> <a name="include_public" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublic"></a>

```python
include_public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_shared`<sup>Required</sup> <a name="include_shared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeShared"></a>

```python
include_shared: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `snapshot_type`<sup>Required</sup> <a name="snapshot_type" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsSnapshotsConfig <a name="DataAwsRdsSnapshotsConfig" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_instance_identifier: str = None,
  db_snapshot_identifier: str = None,
  filter: IResolvable | typing.List[DataAwsRdsSnapshotsFilter] = None,
  include_public: bool | IResolvable = None,
  include_shared: bool | IResolvable = None,
  region: str = None,
  snapshot_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includePublic">include_public</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includeShared">include_shared</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.snapshotType">snapshot_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}.

---

##### `db_snapshot_identifier`<sup>Optional</sup> <a name="db_snapshot_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbSnapshotIdentifier"></a>

```python
db_snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[DataAwsRdsSnapshotsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#filter DataAwsRdsSnapshots#filter}

---

##### `include_public`<sup>Optional</sup> <a name="include_public" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includePublic"></a>

```python
include_public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}.

---

##### `include_shared`<sup>Optional</sup> <a name="include_shared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includeShared"></a>

```python
include_shared: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#region DataAwsRdsSnapshots#region}

---

##### `snapshot_type`<sup>Optional</sup> <a name="snapshot_type" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}.

---

### DataAwsRdsSnapshotsFilter <a name="DataAwsRdsSnapshotsFilter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#name DataAwsRdsSnapshots#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#values DataAwsRdsSnapshots#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#name DataAwsRdsSnapshots#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/rds_snapshots#values DataAwsRdsSnapshots#values}.

---

### DataAwsRdsSnapshotsSnapshots <a name="DataAwsRdsSnapshotsSnapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots()
```


### DataAwsRdsSnapshotsSnapshotsTagListStruct <a name="DataAwsRdsSnapshotsSnapshotsTagListStruct" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsSnapshotsFilterList <a name="DataAwsRdsSnapshotsFilterList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRdsSnapshotsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataAwsRdsSnapshotsFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>]

---


### DataAwsRdsSnapshotsFilterOutputReference <a name="DataAwsRdsSnapshotsFilterOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAwsRdsSnapshotsFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter">DataAwsRdsSnapshotsFilter</a>

---


### DataAwsRdsSnapshotsSnapshotsList <a name="DataAwsRdsSnapshotsSnapshotsList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRdsSnapshotsSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRdsSnapshotsSnapshotsOutputReference <a name="DataAwsRdsSnapshotsSnapshotsOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotArn">db_snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.optionGroupName">option_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.originalSnapshotCreateTime">original_snapshot_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotCreateTime">snapshot_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotType">snapshot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceDbSnapshotIdentifier">source_db_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.tagList">tag_list</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList">DataAwsRdsSnapshotsSnapshotsTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots">DataAwsRdsSnapshotsSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

---

##### `db_snapshot_arn`<sup>Required</sup> <a name="db_snapshot_arn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotArn"></a>

```python
db_snapshot_arn: str
```

- *Type:* str

---

##### `db_snapshot_identifier`<sup>Required</sup> <a name="db_snapshot_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotIdentifier"></a>

```python
db_snapshot_identifier: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `option_group_name`<sup>Required</sup> <a name="option_group_name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

---

##### `original_snapshot_create_time`<sup>Required</sup> <a name="original_snapshot_create_time" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.originalSnapshotCreateTime"></a>

```python
original_snapshot_create_time: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_create_time`<sup>Required</sup> <a name="snapshot_create_time" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotCreateTime"></a>

```python
snapshot_create_time: str
```

- *Type:* str

---

##### `snapshot_type`<sup>Required</sup> <a name="snapshot_type" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

---

##### `source_db_snapshot_identifier`<sup>Required</sup> <a name="source_db_snapshot_identifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceDbSnapshotIdentifier"></a>

```python
source_db_snapshot_identifier: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `tag_list`<sup>Required</sup> <a name="tag_list" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.tagList"></a>

```python
tag_list: DataAwsRdsSnapshotsSnapshotsTagListStructList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList">DataAwsRdsSnapshotsSnapshotsTagListStructList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRdsSnapshotsSnapshots
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots">DataAwsRdsSnapshotsSnapshots</a>

---


### DataAwsRdsSnapshotsSnapshotsTagListStructList <a name="DataAwsRdsSnapshotsSnapshotsTagListStructList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference <a name="DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_snapshots

dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct">DataAwsRdsSnapshotsSnapshotsTagListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRdsSnapshotsSnapshotsTagListStruct
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct">DataAwsRdsSnapshotsSnapshotsTagListStruct</a>

---



