# `bedrockUseCaseForModelAccess` Submodule <a name="`bedrockUseCaseForModelAccess` Submodule" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockUseCaseForModelAccess <a name="BedrockUseCaseForModelAccess" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrock_use_case_for_model_access aws_bedrock_use_case_for_model_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_use_case_for_model_access

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  form_data: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.formData">form_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrock_use_case_for_model_access#form_data BedrockUseCaseForModelAccess#form_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `form_data`<sup>Required</sup> <a name="form_data" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.Initializer.parameter.formData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrock_use_case_for_model_access#form_data BedrockUseCaseForModelAccess#form_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockUseCaseForModelAccess resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isConstruct"></a>

```python
from cdktn_provider_aws import bedrock_use_case_for_model_access

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrock_use_case_for_model_access

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrock_use_case_for_model_access

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrock_use_case_for_model_access

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockUseCaseForModelAccess resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockUseCaseForModelAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockUseCaseForModelAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrock_use_case_for_model_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockUseCaseForModelAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formDataInput">form_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formData">form_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `form_data_input`<sup>Optional</sup> <a name="form_data_input" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formDataInput"></a>

```python
form_data_input: str
```

- *Type:* str

---

##### `form_data`<sup>Required</sup> <a name="form_data" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.formData"></a>

```python
form_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockUseCaseForModelAccessConfig <a name="BedrockUseCaseForModelAccessConfig" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrock_use_case_for_model_access

bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  form_data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.formData">form_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrock_use_case_for_model_access#form_data BedrockUseCaseForModelAccess#form_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `form_data`<sup>Required</sup> <a name="form_data" id="@cdktn/provider-aws.bedrockUseCaseForModelAccess.BedrockUseCaseForModelAccessConfig.property.formData"></a>

```python
form_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrock_use_case_for_model_access#form_data BedrockUseCaseForModelAccess#form_data}.

---



