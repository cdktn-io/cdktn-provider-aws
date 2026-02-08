# `ec2AllowedImagesSettings` Submodule <a name="`ec2AllowedImagesSettings` Submodule" id="@cdktn/provider-aws.ec2AllowedImagesSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2AllowedImagesSettings <a name="Ec2AllowedImagesSettings" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings aws_ec2_allowed_images_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  state: str,
  image_criterion: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterion] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.imageCriterion">image_criterion</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]</code> | image_criterion block. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}.

---

##### `image_criterion`<sup>Optional</sup> <a name="image_criterion" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.imageCriterion"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]

image_criterion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#image_criterion Ec2AllowedImagesSettings#image_criterion}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#region Ec2AllowedImagesSettings#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion">put_image_criterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetImageCriterion">reset_image_criterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_image_criterion` <a name="put_image_criterion" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion"></a>

```python
def put_image_criterion(
  value: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterion]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]

---

##### `reset_image_criterion` <a name="reset_image_criterion" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetImageCriterion"></a>

```python
def reset_image_criterion() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Ec2AllowedImagesSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Ec2AllowedImagesSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2AllowedImagesSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2AllowedImagesSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2AllowedImagesSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterion">image_criterion</a></code> | <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList">Ec2AllowedImagesSettingsImageCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterionInput">image_criterion_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `image_criterion`<sup>Required</sup> <a name="image_criterion" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterion"></a>

```python
image_criterion: Ec2AllowedImagesSettingsImageCriterionList
```

- *Type:* <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList">Ec2AllowedImagesSettingsImageCriterionList</a>

---

##### `image_criterion_input`<sup>Optional</sup> <a name="image_criterion_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterionInput"></a>

```python
image_criterion_input: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterion]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2AllowedImagesSettingsConfig <a name="Ec2AllowedImagesSettingsConfig" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  state: str,
  image_criterion: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterion] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.imageCriterion">image_criterion</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]</code> | image_criterion block. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}.

---

##### `image_criterion`<sup>Optional</sup> <a name="image_criterion" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.imageCriterion"></a>

```python
image_criterion: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterion]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]

image_criterion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#image_criterion Ec2AllowedImagesSettings#image_criterion}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#region Ec2AllowedImagesSettings#region}

---

### Ec2AllowedImagesSettingsImageCriterion <a name="Ec2AllowedImagesSettingsImageCriterion" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion(
  creation_date_condition: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionCreationDateCondition] = None,
  deprecation_time_condition: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition] = None,
  image_names: typing.List[str] = None,
  image_providers: typing.List[str] = None,
  marketplace_product_codes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.creationDateCondition">creation_date_condition</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>]</code> | creation_date_condition block. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.deprecationTimeCondition">deprecation_time_condition</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>]</code> | deprecation_time_condition block. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageNames">image_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#image_names Ec2AllowedImagesSettings#image_names}. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageProviders">image_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#image_providers Ec2AllowedImagesSettings#image_providers}. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.marketplaceProductCodes">marketplace_product_codes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#marketplace_product_codes Ec2AllowedImagesSettings#marketplace_product_codes}. |

---

##### `creation_date_condition`<sup>Optional</sup> <a name="creation_date_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.creationDateCondition"></a>

```python
creation_date_condition: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionCreationDateCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>]

creation_date_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#creation_date_condition Ec2AllowedImagesSettings#creation_date_condition}

---

##### `deprecation_time_condition`<sup>Optional</sup> <a name="deprecation_time_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.deprecationTimeCondition"></a>

```python
deprecation_time_condition: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>]

deprecation_time_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#deprecation_time_condition Ec2AllowedImagesSettings#deprecation_time_condition}

---

##### `image_names`<sup>Optional</sup> <a name="image_names" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageNames"></a>

```python
image_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#image_names Ec2AllowedImagesSettings#image_names}.

---

##### `image_providers`<sup>Optional</sup> <a name="image_providers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageProviders"></a>

```python
image_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#image_providers Ec2AllowedImagesSettings#image_providers}.

---

##### `marketplace_product_codes`<sup>Optional</sup> <a name="marketplace_product_codes" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.marketplaceProductCodes"></a>

```python
marketplace_product_codes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#marketplace_product_codes Ec2AllowedImagesSettings#marketplace_product_codes}.

---

### Ec2AllowedImagesSettingsImageCriterionCreationDateCondition <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateCondition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition(
  maximum_days_since_created: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.property.maximumDaysSinceCreated">maximum_days_since_created</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_created Ec2AllowedImagesSettings#maximum_days_since_created}. |

---

##### `maximum_days_since_created`<sup>Optional</sup> <a name="maximum_days_since_created" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.property.maximumDaysSinceCreated"></a>

```python
maximum_days_since_created: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_created Ec2AllowedImagesSettings#maximum_days_since_created}.

---

### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition(
  maximum_days_since_deprecated: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.property.maximumDaysSinceDeprecated">maximum_days_since_deprecated</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_deprecated Ec2AllowedImagesSettings#maximum_days_since_deprecated}. |

---

##### `maximum_days_since_deprecated`<sup>Optional</sup> <a name="maximum_days_since_deprecated" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.property.maximumDaysSinceDeprecated"></a>

```python
maximum_days_since_deprecated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_deprecated Ec2AllowedImagesSettings#maximum_days_since_deprecated}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionCreationDateCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>]

---


### Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resetMaximumDaysSinceCreated">reset_maximum_days_since_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_days_since_created` <a name="reset_maximum_days_since_created" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resetMaximumDaysSinceCreated"></a>

```python
def reset_maximum_days_since_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreatedInput">maximum_days_since_created_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreated">maximum_days_since_created</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_days_since_created_input`<sup>Optional</sup> <a name="maximum_days_since_created_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreatedInput"></a>

```python
maximum_days_since_created_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_days_since_created`<sup>Required</sup> <a name="maximum_days_since_created" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreated"></a>

```python
maximum_days_since_created: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2AllowedImagesSettingsImageCriterionCreationDateCondition
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>

---


### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>]

---


### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resetMaximumDaysSinceDeprecated">reset_maximum_days_since_deprecated</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_days_since_deprecated` <a name="reset_maximum_days_since_deprecated" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resetMaximumDaysSinceDeprecated"></a>

```python
def reset_maximum_days_since_deprecated() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecatedInput">maximum_days_since_deprecated_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecated">maximum_days_since_deprecated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_days_since_deprecated_input`<sup>Optional</sup> <a name="maximum_days_since_deprecated_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecatedInput"></a>

```python
maximum_days_since_deprecated_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_days_since_deprecated`<sup>Required</sup> <a name="maximum_days_since_deprecated" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecated"></a>

```python
maximum_days_since_deprecated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>

---


### Ec2AllowedImagesSettingsImageCriterionList <a name="Ec2AllowedImagesSettingsImageCriterionList" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2AllowedImagesSettingsImageCriterionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterion]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>]

---


### Ec2AllowedImagesSettingsImageCriterionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionOutputReference" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ec2_allowed_images_settings

ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition">put_creation_date_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition">put_deprecation_time_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetCreationDateCondition">reset_creation_date_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetDeprecationTimeCondition">reset_deprecation_time_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageNames">reset_image_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageProviders">reset_image_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetMarketplaceProductCodes">reset_marketplace_product_codes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_creation_date_condition` <a name="put_creation_date_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition"></a>

```python
def put_creation_date_condition(
  value: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionCreationDateCondition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>]

---

##### `put_deprecation_time_condition` <a name="put_deprecation_time_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition"></a>

```python
def put_deprecation_time_condition(
  value: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>]

---

##### `reset_creation_date_condition` <a name="reset_creation_date_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetCreationDateCondition"></a>

```python
def reset_creation_date_condition() -> None
```

##### `reset_deprecation_time_condition` <a name="reset_deprecation_time_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetDeprecationTimeCondition"></a>

```python
def reset_deprecation_time_condition() -> None
```

##### `reset_image_names` <a name="reset_image_names" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageNames"></a>

```python
def reset_image_names() -> None
```

##### `reset_image_providers` <a name="reset_image_providers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageProviders"></a>

```python
def reset_image_providers() -> None
```

##### `reset_marketplace_product_codes` <a name="reset_marketplace_product_codes" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetMarketplaceProductCodes"></a>

```python
def reset_marketplace_product_codes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateCondition">creation_date_condition</a></code> | <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList">Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeCondition">deprecation_time_condition</a></code> | <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateConditionInput">creation_date_condition_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeConditionInput">deprecation_time_condition_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNamesInput">image_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProvidersInput">image_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodesInput">marketplace_product_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNames">image_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProviders">image_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodes">marketplace_product_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_date_condition`<sup>Required</sup> <a name="creation_date_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateCondition"></a>

```python
creation_date_condition: Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList
```

- *Type:* <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList">Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList</a>

---

##### `deprecation_time_condition`<sup>Required</sup> <a name="deprecation_time_condition" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeCondition"></a>

```python
deprecation_time_condition: Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList
```

- *Type:* <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList</a>

---

##### `creation_date_condition_input`<sup>Optional</sup> <a name="creation_date_condition_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateConditionInput"></a>

```python
creation_date_condition_input: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionCreationDateCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition">Ec2AllowedImagesSettingsImageCriterionCreationDateCondition</a>]

---

##### `deprecation_time_condition_input`<sup>Optional</sup> <a name="deprecation_time_condition_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeConditionInput"></a>

```python
deprecation_time_condition_input: IResolvable | typing.List[Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition</a>]

---

##### `image_names_input`<sup>Optional</sup> <a name="image_names_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNamesInput"></a>

```python
image_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_providers_input`<sup>Optional</sup> <a name="image_providers_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProvidersInput"></a>

```python
image_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `marketplace_product_codes_input`<sup>Optional</sup> <a name="marketplace_product_codes_input" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodesInput"></a>

```python
marketplace_product_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_names`<sup>Required</sup> <a name="image_names" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNames"></a>

```python
image_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_providers`<sup>Required</sup> <a name="image_providers" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProviders"></a>

```python
image_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `marketplace_product_codes`<sup>Required</sup> <a name="marketplace_product_codes" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodes"></a>

```python
marketplace_product_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2AllowedImagesSettingsImageCriterion
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion">Ec2AllowedImagesSettingsImageCriterion</a>

---



