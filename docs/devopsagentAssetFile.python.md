# `devopsagentAssetFile` Submodule <a name="`devopsagentAssetFile` Submodule" id="@cdktn/provider-aws.devopsagentAssetFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssetFile <a name="DevopsagentAssetFile" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file aws_devopsagent_asset_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_space_id: str,
  asset_id: str,
  path: str,
  content: IResolvable | typing.List[DevopsagentAssetFileContent] = None,
  metadata: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.agentSpaceId">agent_space_id</a></code> | <code>str</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | Identifier of the asset containing the file. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.path">path</a></code> | <code>str</code> | Path of the file within the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.content">content</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]</code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | JSON document describing the file. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.agentSpaceId"></a>

- *Type:* str

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#agent_space_id DevopsagentAssetFile#agent_space_id}

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.assetId"></a>

- *Type:* str

Identifier of the asset containing the file. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#asset_id DevopsagentAssetFile#asset_id}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.path"></a>

- *Type:* str

Path of the file within the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#path DevopsagentAssetFile#path}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.content"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#content DevopsagentAssetFile#content}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.metadata"></a>

- *Type:* str

JSON document describing the file.

Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#metadata DevopsagentAssetFile#metadata}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#region DevopsagentAssetFile#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent"></a>

```python
def put_content(
  value: IResolvable | typing.List[DevopsagentAssetFileContent]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]

---

##### `reset_content` <a name="reset_content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsagentAssetFile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsagentAssetFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsagentAssetFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsagentAssetFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssetFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.content">content</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList">DevopsagentAssetFileContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataActual">metadata_actual</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceIdInput">agent_space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.content"></a>

```python
content: DevopsagentAssetFileContentList
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList">DevopsagentAssetFileContentList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `metadata_actual`<sup>Required</sup> <a name="metadata_actual" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataActual"></a>

```python
metadata_actual: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `agent_space_id_input`<sup>Optional</sup> <a name="agent_space_id_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceIdInput"></a>

```python
agent_space_id_input: str
```

- *Type:* str

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.contentInput"></a>

```python
content_input: IResolvable | typing.List[DevopsagentAssetFileContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssetFileConfig <a name="DevopsagentAssetFileConfig" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_space_id: str,
  asset_id: str,
  path: str,
  content: IResolvable | typing.List[DevopsagentAssetFileContent] = None,
  metadata: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.assetId">asset_id</a></code> | <code>str</code> | Identifier of the asset containing the file. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.path">path</a></code> | <code>str</code> | Path of the file within the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.content">content</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]</code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.metadata">metadata</a></code> | <code>str</code> | JSON document describing the file. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#agent_space_id DevopsagentAssetFile#agent_space_id}

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

Identifier of the asset containing the file. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#asset_id DevopsagentAssetFile#asset_id}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the file within the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#path DevopsagentAssetFile#path}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.content"></a>

```python
content: IResolvable | typing.List[DevopsagentAssetFileContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#content DevopsagentAssetFile#content}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

JSON document describing the file.

Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#metadata DevopsagentAssetFile#metadata}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#region DevopsagentAssetFile#region}

---

### DevopsagentAssetFileContent <a name="DevopsagentAssetFileContent" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFileContent(
  bytes: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.bytes">bytes</a></code> | <code>str</code> | Base64-encoded binary file content. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.text">text</a></code> | <code>str</code> | Text file content. |

---

##### `bytes`<sup>Optional</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.bytes"></a>

```python
bytes: str
```

- *Type:* str

Base64-encoded binary file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#bytes DevopsagentAssetFile#bytes}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.text"></a>

```python
text: str
```

- *Type:* str

Text file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#text DevopsagentAssetFile#text}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssetFileContentList <a name="DevopsagentAssetFileContentList" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFileContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssetFileContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssetFileContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>]

---


### DevopsagentAssetFileContentOutputReference <a name="DevopsagentAssetFileContentOutputReference" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset_file

devopsagentAssetFile.DevopsagentAssetFileContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetBytes">reset_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bytes` <a name="reset_bytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetBytes"></a>

```python
def reset_bytes() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytesInput">bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytes">bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_input`<sup>Optional</sup> <a name="bytes_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytesInput"></a>

```python
bytes_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytes"></a>

```python
bytes: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssetFileContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent">DevopsagentAssetFileContent</a>

---



