# `resiliencehubv2ServiceFunction` Submodule <a name="`resiliencehubv2ServiceFunction` Submodule" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2ServiceFunction <a name="Resiliencehubv2ServiceFunction" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function aws_resiliencehubv2_service_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_service_function

resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  criticality: str,
  name: str,
  service_arn: str,
  description: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.criticality">criticality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#criticality Resiliencehubv2ServiceFunction#criticality}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#name Resiliencehubv2ServiceFunction#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.serviceArn">service_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#service_arn Resiliencehubv2ServiceFunction#service_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#description Resiliencehubv2ServiceFunction#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.criticality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#criticality Resiliencehubv2ServiceFunction#criticality}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#name Resiliencehubv2ServiceFunction#name}.

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.serviceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#service_arn Resiliencehubv2ServiceFunction#service_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#description Resiliencehubv2ServiceFunction#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#region Resiliencehubv2ServiceFunction#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Resiliencehubv2ServiceFunction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isConstruct"></a>

```python
from cdktn_provider_aws import resiliencehubv2_service_function

resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformElement"></a>

```python
from cdktn_provider_aws import resiliencehubv2_service_function

resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformResource"></a>

```python
from cdktn_provider_aws import resiliencehubv2_service_function

resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport"></a>

```python
from cdktn_provider_aws import resiliencehubv2_service_function

resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Resiliencehubv2ServiceFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Resiliencehubv2ServiceFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Resiliencehubv2ServiceFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2ServiceFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceFunctionId">service_function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticalityInput">criticality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArnInput">service_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticality">criticality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_function_id`<sup>Required</sup> <a name="service_function_id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceFunctionId"></a>

```python
service_function_id: str
```

- *Type:* str

---

##### `criticality_input`<sup>Optional</sup> <a name="criticality_input" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticalityInput"></a>

```python
criticality_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_arn_input`<sup>Optional</sup> <a name="service_arn_input" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArnInput"></a>

```python
service_arn_input: str
```

- *Type:* str

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticality"></a>

```python
criticality: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceFunctionConfig <a name="Resiliencehubv2ServiceFunctionConfig" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_service_function

resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  criticality: str,
  name: str,
  service_arn: str,
  description: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.criticality">criticality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#criticality Resiliencehubv2ServiceFunction#criticality}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#name Resiliencehubv2ServiceFunction#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.serviceArn">service_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#service_arn Resiliencehubv2ServiceFunction#service_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#description Resiliencehubv2ServiceFunction#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.criticality"></a>

```python
criticality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#criticality Resiliencehubv2ServiceFunction#criticality}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#name Resiliencehubv2ServiceFunction#name}.

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#service_arn Resiliencehubv2ServiceFunction#service_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#description Resiliencehubv2ServiceFunction#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#region Resiliencehubv2ServiceFunction#region}

---



