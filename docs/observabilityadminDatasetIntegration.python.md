# `observabilityadminDatasetIntegration` Submodule <a name="`observabilityadminDatasetIntegration` Submodule" id="@cdktn/provider-aws.observabilityadminDatasetIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminDatasetIntegration <a name="ObservabilityadminDatasetIntegration" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration aws_observabilityadmin_dataset_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_dataset_integration

observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#role_arn ObservabilityadminDatasetIntegration#role_arn}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#tags ObservabilityadminDatasetIntegration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#role_arn ObservabilityadminDatasetIntegration#role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#region ObservabilityadminDatasetIntegration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#tags ObservabilityadminDatasetIntegration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ObservabilityadminDatasetIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isConstruct"></a>

```python
from cdktn_provider_aws import observabilityadmin_dataset_integration

observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isTerraformElement"></a>

```python
from cdktn_provider_aws import observabilityadmin_dataset_integration

observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isTerraformResource"></a>

```python
from cdktn_provider_aws import observabilityadmin_dataset_integration

observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import observabilityadmin_dataset_integration

observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ObservabilityadminDatasetIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObservabilityadminDatasetIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObservabilityadminDatasetIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminDatasetIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminDatasetIntegrationConfig <a name="ObservabilityadminDatasetIntegrationConfig" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_dataset_integration

observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#role_arn ObservabilityadminDatasetIntegration#role_arn}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#tags ObservabilityadminDatasetIntegration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#role_arn ObservabilityadminDatasetIntegration#role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#region ObservabilityadminDatasetIntegration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminDatasetIntegration.ObservabilityadminDatasetIntegrationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#tags ObservabilityadminDatasetIntegration#tags}.

---



