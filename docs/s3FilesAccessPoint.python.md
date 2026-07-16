# `s3FilesAccessPoint` Submodule <a name="`s3FilesAccessPoint` Submodule" id="@cdktn/provider-aws.s3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesAccessPoint <a name="S3FilesAccessPoint" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point aws_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint(
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
  posix_user: IResolvable | typing.List[S3FilesAccessPointPosixUser] = None,
  region: str = None,
  root_directory: IResolvable | typing.List[S3FilesAccessPointRootDirectory] = None,
  tags: typing.Mapping[str] = None,
  timeouts: S3FilesAccessPointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.posixUser">posix_user</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]</code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.rootDirectory">root_directory</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]</code> | root_directory block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.fileSystemId"></a>

- *Type:* str

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.posixUser"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#region S3FilesAccessPoint#region}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.rootDirectory"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#timeouts S3FilesAccessPoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser">put_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory">put_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser">reset_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory">reset_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_posix_user` <a name="put_posix_user" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser"></a>

```python
def put_posix_user(
  value: IResolvable | typing.List[S3FilesAccessPointPosixUser]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]

---

##### `put_root_directory` <a name="put_root_directory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory"></a>

```python
def put_root_directory(
  value: IResolvable | typing.List[S3FilesAccessPointRootDirectory]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#create S3FilesAccessPoint#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#delete S3FilesAccessPoint#delete}

---

##### `reset_posix_user` <a name="reset_posix_user" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser"></a>

```python
def reset_posix_user() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_root_directory` <a name="reset_root_directory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory"></a>

```python
def reset_root_directory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3FilesAccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList">S3FilesAccessPointPosixUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList">S3FilesAccessPointRootDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference">S3FilesAccessPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput">posix_user_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput">root_directory_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser"></a>

```python
posix_user: S3FilesAccessPointPosixUserList
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList">S3FilesAccessPointPosixUserList</a>

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory"></a>

```python
root_directory: S3FilesAccessPointRootDirectoryList
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList">S3FilesAccessPointRootDirectoryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeouts"></a>

```python
timeouts: S3FilesAccessPointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference">S3FilesAccessPointTimeoutsOutputReference</a>

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `posix_user_input`<sup>Optional</sup> <a name="posix_user_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput"></a>

```python
posix_user_input: IResolvable | typing.List[S3FilesAccessPointPosixUser]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput"></a>

```python
root_directory_input: IResolvable | typing.List[S3FilesAccessPointRootDirectory]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | S3FilesAccessPointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesAccessPointConfig <a name="S3FilesAccessPointConfig" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  posix_user: IResolvable | typing.List[S3FilesAccessPointPosixUser] = None,
  region: str = None,
  root_directory: IResolvable | typing.List[S3FilesAccessPointRootDirectory] = None,
  tags: typing.Mapping[str] = None,
  timeouts: S3FilesAccessPointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser">posix_user</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]</code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory">root_directory</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]</code> | root_directory block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser"></a>

```python
posix_user: IResolvable | typing.List[S3FilesAccessPointPosixUser]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#region S3FilesAccessPoint#region}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory"></a>

```python
root_directory: IResolvable | typing.List[S3FilesAccessPointRootDirectory]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.timeouts"></a>

```python
timeouts: S3FilesAccessPointTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#timeouts S3FilesAccessPoint#timeouts}

---

### S3FilesAccessPointPosixUser <a name="S3FilesAccessPointPosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointPosixUser(
  gid: typing.Union[int, float],
  uid: typing.Union[int, float],
  secondary_gids: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | POSIX group ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | POSIX user ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Secondary POSIX group IDs. |

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

POSIX group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#gid S3FilesAccessPoint#gid}

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

POSIX user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#uid S3FilesAccessPoint#uid}

---

##### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids"></a>

```python
secondary_gids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Secondary POSIX group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#secondary_gids S3FilesAccessPoint#secondary_gids}

---

### S3FilesAccessPointRootDirectory <a name="S3FilesAccessPointRootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectory(
  creation_permissions: IResolvable | typing.List[S3FilesAccessPointRootDirectoryCreationPermissions] = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions">creation_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>]</code> | creation_permissions block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path">path</a></code> | <code>str</code> | Root directory path. |

---

##### `creation_permissions`<sup>Optional</sup> <a name="creation_permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```python
creation_permissions: IResolvable | typing.List[S3FilesAccessPointRootDirectoryCreationPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>]

creation_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#creation_permissions S3FilesAccessPoint#creation_permissions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path"></a>

```python
path: str
```

- *Type:* str

Root directory path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#path S3FilesAccessPoint#path}

---

### S3FilesAccessPointRootDirectoryCreationPermissions <a name="S3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions(
  owner_gid: typing.Union[int, float],
  owner_uid: typing.Union[int, float],
  permissions: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid">owner_gid</a></code> | <code>typing.Union[int, float]</code> | Owner group ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid">owner_uid</a></code> | <code>typing.Union[int, float]</code> | Owner user ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions">permissions</a></code> | <code>str</code> | POSIX permissions. |

---

##### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid"></a>

```python
owner_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Owner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#owner_gid S3FilesAccessPoint#owner_gid}

---

##### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid"></a>

```python
owner_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Owner user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#owner_uid S3FilesAccessPoint#owner_uid}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

POSIX permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#permissions S3FilesAccessPoint#permissions}

---

### S3FilesAccessPointTimeouts <a name="S3FilesAccessPointTimeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#create S3FilesAccessPoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_access_point#delete S3FilesAccessPoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesAccessPointPosixUserList <a name="S3FilesAccessPointPosixUserList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointPosixUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesAccessPointPosixUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesAccessPointPosixUser]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>]

---


### S3FilesAccessPointPosixUserOutputReference <a name="S3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids">reset_secondary_gids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secondary_gids` <a name="reset_secondary_gids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```python
def reset_secondary_gids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput">secondary_gids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids_input`<sup>Optional</sup> <a name="secondary_gids_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```python
secondary_gids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```python
secondary_gids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointPosixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---


### S3FilesAccessPointRootDirectoryCreationPermissionsList <a name="S3FilesAccessPointRootDirectoryCreationPermissionsList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesAccessPointRootDirectoryCreationPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>]

---


### S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput">owner_gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput">owner_uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">owner_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">owner_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_gid_input`<sup>Optional</sup> <a name="owner_gid_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput"></a>

```python
owner_gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_uid_input`<sup>Optional</sup> <a name="owner_uid_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput"></a>

```python
owner_uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```python
owner_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```python
owner_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### S3FilesAccessPointRootDirectoryList <a name="S3FilesAccessPointRootDirectoryList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesAccessPointRootDirectoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesAccessPointRootDirectory]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>]

---


### S3FilesAccessPointRootDirectoryOutputReference <a name="S3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">put_creation_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">reset_creation_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_creation_permissions` <a name="put_creation_permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```python
def put_creation_permissions(
  value: IResolvable | typing.List[S3FilesAccessPointRootDirectoryCreationPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>]

---

##### `reset_creation_permissions` <a name="reset_creation_permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```python
def reset_creation_permissions() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">creation_permissions</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList">S3FilesAccessPointRootDirectoryCreationPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">creation_permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_permissions`<sup>Required</sup> <a name="creation_permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```python
creation_permissions: S3FilesAccessPointRootDirectoryCreationPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList">S3FilesAccessPointRootDirectoryCreationPermissionsList</a>

---

##### `creation_permissions_input`<sup>Optional</sup> <a name="creation_permissions_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```python
creation_permissions_input: IResolvable | typing.List[S3FilesAccessPointRootDirectoryCreationPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointRootDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---


### S3FilesAccessPointTimeoutsOutputReference <a name="S3FilesAccessPointTimeoutsOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---



