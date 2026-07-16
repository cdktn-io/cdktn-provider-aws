# `s3FilesSynchronizationConfiguration` Submodule <a name="`s3FilesSynchronizationConfiguration` Submodule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesSynchronizationConfiguration <a name="S3FilesSynchronizationConfiguration" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration aws_s3files_synchronization_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  expiration_data_rule: IResolvable | typing.List[S3FilesSynchronizationConfigurationExpirationDataRule] = None,
  import_data_rule: IResolvable | typing.List[S3FilesSynchronizationConfigurationImportDataRule] = None,
  latest_version_number: typing.Union[int, float] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.expirationDataRule">expiration_data_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]</code> | expiration_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.importDataRule">import_data_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]</code> | import_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | Latest version number for optimistic locking. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.fileSystemId"></a>

- *Type:* str

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}

---

##### `expiration_data_rule`<sup>Optional</sup> <a name="expiration_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.expirationDataRule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]

expiration_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}

---

##### `import_data_rule`<sup>Optional</sup> <a name="import_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.importDataRule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]

import_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}

---

##### `latest_version_number`<sup>Optional</sup> <a name="latest_version_number" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.latestVersionNumber"></a>

- *Type:* typing.Union[int, float]

Latest version number for optimistic locking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule">put_expiration_data_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule">put_import_data_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule">reset_expiration_data_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule">reset_import_data_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber">reset_latest_version_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_expiration_data_rule` <a name="put_expiration_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule"></a>

```python
def put_expiration_data_rule(
  value: IResolvable | typing.List[S3FilesSynchronizationConfigurationExpirationDataRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]

---

##### `put_import_data_rule` <a name="put_import_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule"></a>

```python
def put_import_data_rule(
  value: IResolvable | typing.List[S3FilesSynchronizationConfigurationImportDataRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]

---

##### `reset_expiration_data_rule` <a name="reset_expiration_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule"></a>

```python
def reset_expiration_data_rule() -> None
```

##### `reset_import_data_rule` <a name="reset_import_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule"></a>

```python
def reset_import_data_rule() -> None
```

##### `reset_latest_version_number` <a name="reset_latest_version_number" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber"></a>

```python
def reset_latest_version_number() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3FilesSynchronizationConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3FilesSynchronizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesSynchronizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule">expiration_data_rule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule">import_data_rule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput">expiration_data_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput">import_data_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput">latest_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `expiration_data_rule`<sup>Required</sup> <a name="expiration_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule"></a>

```python
expiration_data_rule: S3FilesSynchronizationConfigurationExpirationDataRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a>

---

##### `import_data_rule`<sup>Required</sup> <a name="import_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule"></a>

```python
import_data_rule: S3FilesSynchronizationConfigurationImportDataRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a>

---

##### `expiration_data_rule_input`<sup>Optional</sup> <a name="expiration_data_rule_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput"></a>

```python
expiration_data_rule_input: IResolvable | typing.List[S3FilesSynchronizationConfigurationExpirationDataRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `import_data_rule_input`<sup>Optional</sup> <a name="import_data_rule_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput"></a>

```python
import_data_rule_input: IResolvable | typing.List[S3FilesSynchronizationConfigurationImportDataRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]

---

##### `latest_version_number_input`<sup>Optional</sup> <a name="latest_version_number_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput"></a>

```python
latest_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `latest_version_number`<sup>Required</sup> <a name="latest_version_number" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesSynchronizationConfigurationConfig <a name="S3FilesSynchronizationConfigurationConfig" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  expiration_data_rule: IResolvable | typing.List[S3FilesSynchronizationConfigurationExpirationDataRule] = None,
  import_data_rule: IResolvable | typing.List[S3FilesSynchronizationConfigurationImportDataRule] = None,
  latest_version_number: typing.Union[int, float] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule">expiration_data_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]</code> | expiration_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule">import_data_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]</code> | import_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | Latest version number for optimistic locking. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}

---

##### `expiration_data_rule`<sup>Optional</sup> <a name="expiration_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule"></a>

```python
expiration_data_rule: IResolvable | typing.List[S3FilesSynchronizationConfigurationExpirationDataRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]

expiration_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}

---

##### `import_data_rule`<sup>Optional</sup> <a name="import_data_rule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule"></a>

```python
import_data_rule: IResolvable | typing.List[S3FilesSynchronizationConfigurationImportDataRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]

import_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}

---

##### `latest_version_number`<sup>Optional</sup> <a name="latest_version_number" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Latest version number for optimistic locking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}

---

### S3FilesSynchronizationConfigurationExpirationDataRule <a name="S3FilesSynchronizationConfigurationExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule(
  days_after_last_access: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess">days_after_last_access</a></code> | <code>typing.Union[int, float]</code> | Days after last access before data expires. |

---

##### `days_after_last_access`<sup>Required</sup> <a name="days_after_last_access" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess"></a>

```python
days_after_last_access: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Days after last access before data expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#days_after_last_access S3FilesSynchronizationConfiguration#days_after_last_access}

---

### S3FilesSynchronizationConfigurationImportDataRule <a name="S3FilesSynchronizationConfigurationImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule(
  prefix: str,
  size_less_than: typing.Union[int, float],
  trigger: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix">prefix</a></code> | <code>str</code> | S3 prefix for import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan">size_less_than</a></code> | <code>typing.Union[int, float]</code> | Maximum file size to import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger">trigger</a></code> | <code>str</code> | Import trigger type. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

S3 prefix for import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#prefix S3FilesSynchronizationConfiguration#prefix}

---

##### `size_less_than`<sup>Required</sup> <a name="size_less_than" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan"></a>

```python
size_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum file size to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#size_less_than S3FilesSynchronizationConfiguration#size_less_than}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

Import trigger type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#trigger S3FilesSynchronizationConfiguration#trigger}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesSynchronizationConfigurationExpirationDataRuleList <a name="S3FilesSynchronizationConfigurationExpirationDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesSynchronizationConfigurationExpirationDataRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>]

---


### S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput">days_after_last_access_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess">days_after_last_access</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_after_last_access_input`<sup>Optional</sup> <a name="days_after_last_access_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput"></a>

```python
days_after_last_access_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_after_last_access`<sup>Required</sup> <a name="days_after_last_access" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess"></a>

```python
days_after_last_access: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesSynchronizationConfigurationExpirationDataRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>

---


### S3FilesSynchronizationConfigurationImportDataRuleList <a name="S3FilesSynchronizationConfigurationImportDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesSynchronizationConfigurationImportDataRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesSynchronizationConfigurationImportDataRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>]

---


### S3FilesSynchronizationConfigurationImportDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationImportDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_synchronization_configuration

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput">size_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput">trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan">size_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `size_less_than_input`<sup>Optional</sup> <a name="size_less_than_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput"></a>

```python
size_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput"></a>

```python
trigger_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `size_less_than`<sup>Required</sup> <a name="size_less_than" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan"></a>

```python
size_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesSynchronizationConfigurationImportDataRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>

---



