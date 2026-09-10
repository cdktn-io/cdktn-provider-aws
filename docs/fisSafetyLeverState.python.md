# `fisSafetyLeverState` Submodule <a name="`fisSafetyLeverState` Submodule" id="@cdktn/provider-aws.fisSafetyLeverState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisSafetyLeverState <a name="FisSafetyLeverState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state aws_fis_safety_lever_state}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverState(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None,
  state: IResolvable | typing.List[FisSafetyLeverStateState] = None,
  timeouts: FisSafetyLeverStateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.state">state</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]</code> | state block. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#region FisSafetyLeverState#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.state"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]

state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#state FisSafetyLeverState#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#timeouts FisSafetyLeverState#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState">put_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_state` <a name="put_state" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState"></a>

```python
def put_state(
  value: IResolvable | typing.List[FisSafetyLeverStateState]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#create FisSafetyLeverState#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#update FisSafetyLeverState#update}

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FisSafetyLeverState resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverState.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverState.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverState.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverState.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FisSafetyLeverState resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FisSafetyLeverState to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FisSafetyLeverState that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FisSafetyLeverState to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.state">state</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList">FisSafetyLeverStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference">FisSafetyLeverStateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.stateInput">state_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.state"></a>

```python
state: FisSafetyLeverStateStateList
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList">FisSafetyLeverStateStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeouts"></a>

```python
timeouts: FisSafetyLeverStateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference">FisSafetyLeverStateTimeoutsOutputReference</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.stateInput"></a>

```python
state_input: IResolvable | typing.List[FisSafetyLeverStateState]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FisSafetyLeverStateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FisSafetyLeverStateConfig <a name="FisSafetyLeverStateConfig" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.Initializer"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverStateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None,
  state: IResolvable | typing.List[FisSafetyLeverStateState] = None,
  timeouts: FisSafetyLeverStateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.state">state</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]</code> | state block. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#region FisSafetyLeverState#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.state"></a>

```python
state: IResolvable | typing.List[FisSafetyLeverStateState]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]

state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#state FisSafetyLeverState#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.timeouts"></a>

```python
timeouts: FisSafetyLeverStateTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#timeouts FisSafetyLeverState#timeouts}

---

### FisSafetyLeverStateState <a name="FisSafetyLeverStateState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.Initializer"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverStateState(
  reason: str,
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.reason">reason</a></code> | <code>str</code> | Reason for the current status of the safety lever. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.status">status</a></code> | <code>str</code> | State of the safety lever. Valid values: engaged, disengaged. |

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.reason"></a>

```python
reason: str
```

- *Type:* str

Reason for the current status of the safety lever.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#reason FisSafetyLeverState#reason}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.status"></a>

```python
status: str
```

- *Type:* str

State of the safety lever. Valid values: engaged, disengaged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#status FisSafetyLeverState#status}

---

### FisSafetyLeverStateTimeouts <a name="FisSafetyLeverStateTimeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverStateTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#create FisSafetyLeverState#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#update FisSafetyLeverState#update}

---

## Classes <a name="Classes" id="Classes"></a>

### FisSafetyLeverStateStateList <a name="FisSafetyLeverStateStateList" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverStateStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FisSafetyLeverStateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FisSafetyLeverStateState]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>]

---


### FisSafetyLeverStateStateOutputReference <a name="FisSafetyLeverStateStateOutputReference" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverStateStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisSafetyLeverStateState
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>

---


### FisSafetyLeverStateTimeoutsOutputReference <a name="FisSafetyLeverStateTimeoutsOutputReference" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import fis_safety_lever_state

fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FisSafetyLeverStateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---



