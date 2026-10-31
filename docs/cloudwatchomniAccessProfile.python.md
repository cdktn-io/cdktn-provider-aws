# `cloudwatchomniAccessProfile` Submodule <a name="`cloudwatchomniAccessProfile` Submodule" id="@cdktn/provider-aws.cloudwatchomniAccessProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniAccessProfile <a name="CloudwatchomniAccessProfile" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile aws_cloudwatchomni_access_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  space_id: str,
  description: str = None,
  region: str = None,
  timeouts: CloudwatchomniAccessProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#name CloudwatchomniAccessProfile#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#space_id CloudwatchomniAccessProfile#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#description CloudwatchomniAccessProfile#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#name CloudwatchomniAccessProfile#name}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.spaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#space_id CloudwatchomniAccessProfile#space_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#description CloudwatchomniAccessProfile#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#region CloudwatchomniAccessProfile#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#timeouts CloudwatchomniAccessProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#create CloudwatchomniAccessProfile#create}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchomniAccessProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isConstruct"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchomniAccessProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchomniAccessProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchomniAccessProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniAccessProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.assumeStatus">assume_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.profileType">profile_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference">CloudwatchomniAccessProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `assume_status`<sup>Required</sup> <a name="assume_status" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.assumeStatus"></a>

```python
assume_status: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `profile_type`<sup>Required</sup> <a name="profile_type" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.profileType"></a>

```python
profile_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.timeouts"></a>

```python
timeouts: CloudwatchomniAccessProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference">CloudwatchomniAccessProfileTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudwatchomniAccessProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniAccessProfileConfig <a name="CloudwatchomniAccessProfileConfig" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  space_id: str,
  description: str = None,
  region: str = None,
  timeouts: CloudwatchomniAccessProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#name CloudwatchomniAccessProfile#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#space_id CloudwatchomniAccessProfile#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#description CloudwatchomniAccessProfile#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#name CloudwatchomniAccessProfile#name}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#space_id CloudwatchomniAccessProfile#space_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#description CloudwatchomniAccessProfile#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#region CloudwatchomniAccessProfile#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileConfig.property.timeouts"></a>

```python
timeouts: CloudwatchomniAccessProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#timeouts CloudwatchomniAccessProfile#timeouts}

---

### CloudwatchomniAccessProfileTimeouts <a name="CloudwatchomniAccessProfileTimeouts" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_profile#create CloudwatchomniAccessProfile#create}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniAccessProfileTimeoutsOutputReference <a name="CloudwatchomniAccessProfileTimeoutsOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_access_profile

cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAccessProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessProfile.CloudwatchomniAccessProfileTimeouts">CloudwatchomniAccessProfileTimeouts</a>

---



