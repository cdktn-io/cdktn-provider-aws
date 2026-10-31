# `devopsagentAsset` Submodule <a name="`devopsagentAsset` Submodule" id="@cdktn/provider-aws.devopsagentAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAsset <a name="DevopsagentAsset" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset aws_devopsagent_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAsset(
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
  asset_type: str,
  content: IResolvable | typing.List[DevopsagentAssetContent] = None,
  metadata: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.agentSpaceId">agent_space_id</a></code> | <code>str</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.assetType">asset_type</a></code> | <code>str</code> | Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.content">content</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]</code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | JSON document describing the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.agentSpaceId"></a>

- *Type:* str

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#agent_space_id DevopsagentAsset#agent_space_id}

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.assetType"></a>

- *Type:* str

Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#asset_type DevopsagentAsset#asset_type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.content"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#content DevopsagentAsset#content}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.metadata"></a>

- *Type:* str

JSON document describing the asset.

Required metadata fields depend on asset_type. Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS. Changes to metadata alone do not re-upload content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#region DevopsagentAsset#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent"></a>

```python
def put_content(
  value: IResolvable | typing.List[DevopsagentAssetContent]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.putContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]

---

##### `reset_content` <a name="reset_content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsagentAsset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsagentAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsagentAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsagentAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.content">content</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList">DevopsagentAssetContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataActual">metadata_actual</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceIdInput">agent_space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetTypeInput">asset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.content"></a>

```python
content: DevopsagentAssetContentList
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList">DevopsagentAssetContentList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `metadata_actual`<sup>Required</sup> <a name="metadata_actual" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataActual"></a>

```python
metadata_actual: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `agent_space_id_input`<sup>Optional</sup> <a name="agent_space_id_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceIdInput"></a>

```python
agent_space_id_input: str
```

- *Type:* str

---

##### `asset_type_input`<sup>Optional</sup> <a name="asset_type_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetTypeInput"></a>

```python
asset_type_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.contentInput"></a>

```python
content_input: IResolvable | typing.List[DevopsagentAssetContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssetConfig <a name="DevopsagentAssetConfig" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_space_id: str,
  asset_type: str,
  content: IResolvable | typing.List[DevopsagentAssetContent] = None,
  metadata: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.assetType">asset_type</a></code> | <code>str</code> | Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.content">content</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]</code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.metadata">metadata</a></code> | <code>str</code> | JSON document describing the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#agent_space_id DevopsagentAsset#agent_space_id}

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

Type of asset. Changing this value requires replacement. See https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-managing-assets.html for supported types and their metadata requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#asset_type DevopsagentAsset#asset_type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.content"></a>

```python
content: IResolvable | typing.List[DevopsagentAssetContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#content DevopsagentAsset#content}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

JSON document describing the asset.

Required metadata fields depend on asset_type. Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS. Changes to metadata alone do not re-upload content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#region DevopsagentAsset#region}

---

### DevopsagentAssetContent <a name="DevopsagentAssetContent" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContent(
  file: IResolvable | typing.List[DevopsagentAssetContentFile] = None,
  source_url: IResolvable | typing.List[DevopsagentAssetContentSourceUrl] = None,
  zip: IResolvable | typing.List[DevopsagentAssetContentZip] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.file">file</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>]</code> | file block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.sourceUrl">source_url</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>]</code> | source_url block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.zip">zip</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>]</code> | zip block. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.file"></a>

```python
file: IResolvable | typing.List[DevopsagentAssetContentFile]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>]

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#file DevopsagentAsset#file}

---

##### `source_url`<sup>Optional</sup> <a name="source_url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.sourceUrl"></a>

```python
source_url: IResolvable | typing.List[DevopsagentAssetContentSourceUrl]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>]

source_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#source_url DevopsagentAsset#source_url}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent.property.zip"></a>

```python
zip: IResolvable | typing.List[DevopsagentAssetContentZip]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>]

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip DevopsagentAsset#zip}

---

### DevopsagentAssetContentFile <a name="DevopsagentAssetContentFile" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentFile(
  path: str,
  body: IResolvable | typing.List[DevopsagentAssetContentFileBody] = None,
  metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.path">path</a></code> | <code>str</code> | Path of the file within the asset. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.body">body</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>]</code> | body block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.metadata">metadata</a></code> | <code>str</code> | JSON metadata for the file. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the file within the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#path DevopsagentAsset#path}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.body"></a>

```python
body: IResolvable | typing.List[DevopsagentAssetContentFileBody]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>]

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#body DevopsagentAsset#body}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

JSON metadata for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#metadata DevopsagentAsset#metadata}

---

### DevopsagentAssetContentFileBody <a name="DevopsagentAssetContentFileBody" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentFileBody(
  bytes: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.bytes">bytes</a></code> | <code>str</code> | Base64-encoded binary file content. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.text">text</a></code> | <code>str</code> | Text file content. |

---

##### `bytes`<sup>Optional</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.bytes"></a>

```python
bytes: str
```

- *Type:* str

Base64-encoded binary file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#bytes DevopsagentAsset#bytes}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody.property.text"></a>

```python
text: str
```

- *Type:* str

Text file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#text DevopsagentAsset#text}

---

### DevopsagentAssetContentSourceUrl <a name="DevopsagentAssetContentSourceUrl" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentSourceUrl(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.property.url">url</a></code> | <code>str</code> | Source URL from which to import asset content. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl.property.url"></a>

```python
url: str
```

- *Type:* str

Source URL from which to import asset content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#url DevopsagentAsset#url}

---

### DevopsagentAssetContentZip <a name="DevopsagentAssetContentZip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentZip(
  zip_file: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.property.zipFile">zip_file</a></code> | <code>str</code> | Base64-encoded ZIP archive. Use filebase64() to load a local ZIP file. |

---

##### `zip_file`<sup>Required</sup> <a name="zip_file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip.property.zipFile"></a>

```python
zip_file: str
```

- *Type:* str

Base64-encoded ZIP archive. Use filebase64() to load a local ZIP file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/devopsagent_asset#zip_file DevopsagentAsset#zip_file}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssetContentFileBodyList <a name="DevopsagentAssetContentFileBodyList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentFileBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssetContentFileBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssetContentFileBody]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>]

---


### DevopsagentAssetContentFileBodyOutputReference <a name="DevopsagentAssetContentFileBodyOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetBytes">reset_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bytes` <a name="reset_bytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetBytes"></a>

```python
def reset_bytes() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytesInput">bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytes">bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_input`<sup>Optional</sup> <a name="bytes_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytesInput"></a>

```python
bytes_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.bytes"></a>

```python
bytes: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssetContentFileBody
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>

---


### DevopsagentAssetContentFileList <a name="DevopsagentAssetContentFileList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssetContentFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssetContentFile]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>]

---


### DevopsagentAssetContentFileOutputReference <a name="DevopsagentAssetContentFileOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody">put_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body` <a name="put_body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody"></a>

```python
def put_body(
  value: IResolvable | typing.List[DevopsagentAssetContentFileBody]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.putBody.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>]

---

##### `reset_body` <a name="reset_body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.body">body</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList">DevopsagentAssetContentFileBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.bodyInput">body_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.body"></a>

```python
body: DevopsagentAssetContentFileBodyList
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBodyList">DevopsagentAssetContentFileBodyList</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.bodyInput"></a>

```python
body_input: IResolvable | typing.List[DevopsagentAssetContentFileBody]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileBody">DevopsagentAssetContentFileBody</a>]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssetContentFile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>

---


### DevopsagentAssetContentList <a name="DevopsagentAssetContentList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssetContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssetContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>]

---


### DevopsagentAssetContentOutputReference <a name="DevopsagentAssetContentOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl">put_source_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip">put_zip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetSourceUrl">reset_source_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetZip">reset_zip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file` <a name="put_file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile"></a>

```python
def put_file(
  value: IResolvable | typing.List[DevopsagentAssetContentFile]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putFile.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>]

---

##### `put_source_url` <a name="put_source_url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl"></a>

```python
def put_source_url(
  value: IResolvable | typing.List[DevopsagentAssetContentSourceUrl]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putSourceUrl.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>]

---

##### `put_zip` <a name="put_zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip"></a>

```python
def put_zip(
  value: IResolvable | typing.List[DevopsagentAssetContentZip]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.putZip.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>]

---

##### `reset_file` <a name="reset_file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_source_url` <a name="reset_source_url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetSourceUrl"></a>

```python
def reset_source_url() -> None
```

##### `reset_zip` <a name="reset_zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.resetZip"></a>

```python
def reset_zip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList">DevopsagentAssetContentFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrl">source_url</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList">DevopsagentAssetContentSourceUrlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList">DevopsagentAssetContentZipList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fileInput">file_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zipInput">zip_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.file"></a>

```python
file: DevopsagentAssetContentFileList
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFileList">DevopsagentAssetContentFileList</a>

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrl"></a>

```python
source_url: DevopsagentAssetContentSourceUrlList
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList">DevopsagentAssetContentSourceUrlList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zip"></a>

```python
zip: DevopsagentAssetContentZipList
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList">DevopsagentAssetContentZipList</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.fileInput"></a>

```python
file_input: IResolvable | typing.List[DevopsagentAssetContentFile]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentFile">DevopsagentAssetContentFile</a>]

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: IResolvable | typing.List[DevopsagentAssetContentSourceUrl]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>]

---

##### `zip_input`<sup>Optional</sup> <a name="zip_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.zipInput"></a>

```python
zip_input: IResolvable | typing.List[DevopsagentAssetContentZip]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssetContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContent">DevopsagentAssetContent</a>

---


### DevopsagentAssetContentSourceUrlList <a name="DevopsagentAssetContentSourceUrlList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentSourceUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssetContentSourceUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssetContentSourceUrl]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>]

---


### DevopsagentAssetContentSourceUrlOutputReference <a name="DevopsagentAssetContentSourceUrlOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssetContentSourceUrl
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentSourceUrl">DevopsagentAssetContentSourceUrl</a>

---


### DevopsagentAssetContentZipList <a name="DevopsagentAssetContentZipList" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentZipList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssetContentZipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssetContentZip]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>]

---


### DevopsagentAssetContentZipOutputReference <a name="DevopsagentAssetContentZipOutputReference" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import devopsagent_asset

devopsagentAsset.DevopsagentAssetContentZipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFileInput">zip_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFile">zip_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `zip_file_input`<sup>Optional</sup> <a name="zip_file_input" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFileInput"></a>

```python
zip_file_input: str
```

- *Type:* str

---

##### `zip_file`<sup>Required</sup> <a name="zip_file" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.zipFile"></a>

```python
zip_file: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZipOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssetContentZip
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.devopsagentAsset.DevopsagentAssetContentZip">DevopsagentAssetContentZip</a>

---



