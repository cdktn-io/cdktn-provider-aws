# `dmsDataProvider` Submodule <a name="`dmsDataProvider` Submodule" id="@cdktn/provider-aws.dmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataProvider <a name="DmsDataProvider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider aws_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProvider(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  description: str = None,
  name: str = None,
  region: str = None,
  settings: IResolvable | typing.List[DmsDataProviderSettings] = None,
  tags: typing.Mapping[str] = None,
  virtual: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#description DmsDataProvider#description}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#name DmsDataProvider#name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.settings">settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]</code> | settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.virtual">virtual</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#description DmsDataProvider#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#name DmsDataProvider#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#region DmsDataProvider#region}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.settings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}.

---

##### `virtual`<sup>Optional</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.virtual"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual">reset_virtual</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings"></a>

```python
def put_settings(
  value: IResolvable | typing.List[DmsDataProviderSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_virtual` <a name="reset_virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual"></a>

```python
def reset_virtual() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsDataProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput">virtual_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual">virtual</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings"></a>

```python
settings: DmsDataProviderSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput"></a>

```python
settings_input: IResolvable | typing.List[DmsDataProviderSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_input`<sup>Optional</sup> <a name="virtual_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput"></a>

```python
virtual_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual`<sup>Required</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual"></a>

```python
virtual: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataProviderConfig <a name="DmsDataProviderConfig" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  description: str = None,
  name: str = None,
  region: str = None,
  settings: IResolvable | typing.List[DmsDataProviderSettings] = None,
  tags: typing.Mapping[str] = None,
  virtual: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#description DmsDataProvider#description}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#name DmsDataProvider#name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]</code> | settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual">virtual</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#description DmsDataProvider#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#name DmsDataProvider#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#region DmsDataProvider#region}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings"></a>

```python
settings: IResolvable | typing.List[DmsDataProviderSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}.

---

##### `virtual`<sup>Optional</sup> <a name="virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual"></a>

```python
virtual: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}.

---

### DmsDataProviderSettings <a name="DmsDataProviderSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettings(
  doc_db_settings: IResolvable | typing.List[DmsDataProviderSettingsDocDbSettings] = None,
  ibm_db2_luw_settings: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2LuwSettings] = None,
  ibm_db2_zos_settings: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2ZosSettings] = None,
  maria_db_settings: IResolvable | typing.List[DmsDataProviderSettingsMariaDbSettings] = None,
  microsoft_sql_server_settings: IResolvable | typing.List[DmsDataProviderSettingsMicrosoftSqlServerSettings] = None,
  mongo_db_settings: IResolvable | typing.List[DmsDataProviderSettingsMongoDbSettings] = None,
  mysql_settings: IResolvable | typing.List[DmsDataProviderSettingsMysqlSettings] = None,
  oracle_settings: IResolvable | typing.List[DmsDataProviderSettingsOracleSettings] = None,
  postgresql_settings: IResolvable | typing.List[DmsDataProviderSettingsPostgresqlSettings] = None,
  redshift_settings: IResolvable | typing.List[DmsDataProviderSettingsRedshiftSettings] = None,
  sybase_ase_settings: IResolvable | typing.List[DmsDataProviderSettingsSybaseAseSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings">doc_db_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>]</code> | doc_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings">ibm_db2_luw_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>]</code> | ibm_db2_luw_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings">ibm_db2_zos_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>]</code> | ibm_db2_zos_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings">maria_db_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>]</code> | maria_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings">microsoft_sql_server_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>]</code> | microsoft_sql_server_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings">mongo_db_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>]</code> | mongo_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings">mysql_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>]</code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings">oracle_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>]</code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings">postgresql_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>]</code> | postgresql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings">redshift_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>]</code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings">sybase_ase_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>]</code> | sybase_ase_settings block. |

---

##### `doc_db_settings`<sup>Optional</sup> <a name="doc_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings"></a>

```python
doc_db_settings: IResolvable | typing.List[DmsDataProviderSettingsDocDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>]

doc_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

##### `ibm_db2_luw_settings`<sup>Optional</sup> <a name="ibm_db2_luw_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings"></a>

```python
ibm_db2_luw_settings: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2LuwSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>]

ibm_db2_luw_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ibm_db2_luw_settings DmsDataProvider#ibm_db2_luw_settings}

---

##### `ibm_db2_zos_settings`<sup>Optional</sup> <a name="ibm_db2_zos_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings"></a>

```python
ibm_db2_zos_settings: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2ZosSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>]

ibm_db2_zos_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ibm_db2_zos_settings DmsDataProvider#ibm_db2_zos_settings}

---

##### `maria_db_settings`<sup>Optional</sup> <a name="maria_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings"></a>

```python
maria_db_settings: IResolvable | typing.List[DmsDataProviderSettingsMariaDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>]

maria_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

##### `microsoft_sql_server_settings`<sup>Optional</sup> <a name="microsoft_sql_server_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings"></a>

```python
microsoft_sql_server_settings: IResolvable | typing.List[DmsDataProviderSettingsMicrosoftSqlServerSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>]

microsoft_sql_server_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

##### `mongo_db_settings`<sup>Optional</sup> <a name="mongo_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings"></a>

```python
mongo_db_settings: IResolvable | typing.List[DmsDataProviderSettingsMongoDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>]

mongo_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

##### `mysql_settings`<sup>Optional</sup> <a name="mysql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings"></a>

```python
mysql_settings: IResolvable | typing.List[DmsDataProviderSettingsMysqlSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>]

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#mysql_settings DmsDataProvider#mysql_settings}

---

##### `oracle_settings`<sup>Optional</sup> <a name="oracle_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings"></a>

```python
oracle_settings: IResolvable | typing.List[DmsDataProviderSettingsOracleSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>]

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

##### `postgresql_settings`<sup>Optional</sup> <a name="postgresql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings"></a>

```python
postgresql_settings: IResolvable | typing.List[DmsDataProviderSettingsPostgresqlSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>]

postgresql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#postgresql_settings DmsDataProvider#postgresql_settings}

---

##### `redshift_settings`<sup>Optional</sup> <a name="redshift_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings"></a>

```python
redshift_settings: IResolvable | typing.List[DmsDataProviderSettingsRedshiftSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>]

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

##### `sybase_ase_settings`<sup>Optional</sup> <a name="sybase_ase_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings"></a>

```python
sybase_ase_settings: IResolvable | typing.List[DmsDataProviderSettingsSybaseAseSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>]

sybase_ase_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

### DmsDataProviderSettingsDocDbSettings <a name="DmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsDocDbSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2LuwSettings <a name="DmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings(
  certificate_arn: str = None,
  database_name: str = None,
  encryption_algorithm: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  security_mechanism: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism">security_mechanism</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `security_mechanism`<sup>Optional</sup> <a name="security_mechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism"></a>

```python
security_mechanism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2ZosSettings <a name="DmsDataProviderSettingsIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMariaDbSettings <a name="DmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMariaDbSettings(
  certificate_arn: str = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMongoDbSettings <a name="DmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMongoDbSettings(
  auth_mechanism: str = None,
  auth_source: str = None,
  auth_type: str = None,
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism">auth_mechanism</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource">auth_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `auth_mechanism`<sup>Optional</sup> <a name="auth_mechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism"></a>

```python
auth_mechanism: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

##### `auth_source`<sup>Optional</sup> <a name="auth_source" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource"></a>

```python
auth_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMysqlSettings <a name="DmsDataProviderSettingsMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMysqlSettings(
  certificate_arn: str = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsOracleSettings <a name="DmsDataProviderSettingsOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsOracleSettings(
  asm_server: str = None,
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  secrets_manager_oracle_asm_access_role_arn: str = None,
  secrets_manager_oracle_asm_secret_id: str = None,
  secrets_manager_security_db_encryption_access_role_arn: str = None,
  secrets_manager_security_db_encryption_secret_id: str = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer">asm_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">secrets_manager_oracle_asm_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId">secrets_manager_oracle_asm_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secrets_manager_security_db_encryption_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId">secrets_manager_security_db_encryption_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `asm_server`<sup>Optional</sup> <a name="asm_server" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer"></a>

```python
asm_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `secrets_manager_oracle_asm_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```python
secrets_manager_oracle_asm_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

##### `secrets_manager_oracle_asm_secret_id`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```python
secrets_manager_oracle_asm_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

##### `secrets_manager_security_db_encryption_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```python
secrets_manager_security_db_encryption_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

##### `secrets_manager_security_db_encryption_secret_id`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_secret_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```python
secrets_manager_security_db_encryption_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsPostgresqlSettings <a name="DmsDataProviderSettingsPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsRedshiftSettings <a name="DmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsRedshiftSettings(
  database_name: str = None,
  port: typing.Union[int, float] = None,
  s3_access_role_arn: str = None,
  s3_path: str = None,
  server_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path">s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `s3_access_role_arn`<sup>Optional</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `s3_path`<sup>Optional</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

### DmsDataProviderSettingsSybaseAseSettings <a name="DmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings(
  certificate_arn: str = None,
  database_name: str = None,
  encrypt_password: bool | IResolvable = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword">encrypt_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `encrypt_password`<sup>Optional</sup> <a name="encrypt_password" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword"></a>

```python
encrypt_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.65.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataProviderSettingsDocDbSettingsList <a name="DmsDataProviderSettingsDocDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsDocDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsDocDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>]

---


### DmsDataProviderSettingsDocDbSettingsOutputReference <a name="DmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsDocDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

---


### DmsDataProviderSettingsIbmDb2LuwSettingsList <a name="DmsDataProviderSettingsIbmDb2LuwSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2LuwSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>]

---


### DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism">reset_security_mechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_security_mechanism` <a name="reset_security_mechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism"></a>

```python
def reset_security_mechanism() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput">security_mechanism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism">security_mechanism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `security_mechanism_input`<sup>Optional</sup> <a name="security_mechanism_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput"></a>

```python
security_mechanism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `security_mechanism`<sup>Required</sup> <a name="security_mechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism"></a>

```python
security_mechanism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

---


### DmsDataProviderSettingsIbmDb2ZosSettingsList <a name="DmsDataProviderSettingsIbmDb2ZosSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2ZosSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>]

---


### DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsIbmDb2ZosSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>

---


### DmsDataProviderSettingsList <a name="DmsDataProviderSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>]

---


### DmsDataProviderSettingsMariaDbSettingsList <a name="DmsDataProviderSettingsMariaDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsMariaDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsMariaDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>]

---


### DmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMariaDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsList <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsMicrosoftSqlServerSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>]

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---


### DmsDataProviderSettingsMongoDbSettingsList <a name="DmsDataProviderSettingsMongoDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsMongoDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsMongoDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>]

---


### DmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism">reset_auth_mechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource">reset_auth_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_mechanism` <a name="reset_auth_mechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```python
def reset_auth_mechanism() -> None
```

##### `reset_auth_source` <a name="reset_auth_source" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource"></a>

```python
def reset_auth_source() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput">auth_mechanism_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput">auth_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">auth_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">auth_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_mechanism_input`<sup>Optional</sup> <a name="auth_mechanism_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```python
auth_mechanism_input: str
```

- *Type:* str

---

##### `auth_source_input`<sup>Optional</sup> <a name="auth_source_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput"></a>

```python
auth_source_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `auth_mechanism`<sup>Required</sup> <a name="auth_mechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```python
auth_mechanism: str
```

- *Type:* str

---

##### `auth_source`<sup>Required</sup> <a name="auth_source" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```python
auth_source: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMongoDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

---


### DmsDataProviderSettingsMysqlSettingsList <a name="DmsDataProviderSettingsMysqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsMysqlSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsMysqlSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>]

---


### DmsDataProviderSettingsMysqlSettingsOutputReference <a name="DmsDataProviderSettingsMysqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMysqlSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>

---


### DmsDataProviderSettingsOracleSettingsList <a name="DmsDataProviderSettingsOracleSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsOracleSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsOracleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsOracleSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>]

---


### DmsDataProviderSettingsOracleSettingsOutputReference <a name="DmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer">reset_asm_server</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">reset_secrets_manager_oracle_asm_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">reset_secrets_manager_oracle_asm_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn">reset_secrets_manager_security_db_encryption_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId">reset_secrets_manager_security_db_encryption_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_asm_server` <a name="reset_asm_server" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer"></a>

```python
def reset_asm_server() -> None
```

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_secrets_manager_oracle_asm_access_role_arn` <a name="reset_secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```python
def reset_secrets_manager_oracle_asm_access_role_arn() -> None
```

##### `reset_secrets_manager_oracle_asm_secret_id` <a name="reset_secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```python
def reset_secrets_manager_oracle_asm_secret_id() -> None
```

##### `reset_secrets_manager_security_db_encryption_access_role_arn` <a name="reset_secrets_manager_security_db_encryption_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```python
def reset_secrets_manager_security_db_encryption_access_role_arn() -> None
```

##### `reset_secrets_manager_security_db_encryption_secret_id` <a name="reset_secrets_manager_security_db_encryption_secret_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId"></a>

```python
def reset_secrets_manager_security_db_encryption_secret_id() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput">asm_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">secrets_manager_oracle_asm_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">secrets_manager_oracle_asm_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput">secrets_manager_security_db_encryption_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput">secrets_manager_security_db_encryption_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">asm_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secrets_manager_oracle_asm_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secrets_manager_oracle_asm_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secrets_manager_security_db_encryption_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">secrets_manager_security_db_encryption_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asm_server_input`<sup>Optional</sup> <a name="asm_server_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput"></a>

```python
asm_server_input: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```python
secrets_manager_oracle_asm_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_secret_id_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```python
secrets_manager_oracle_asm_secret_id_input: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput"></a>

```python
secrets_manager_security_db_encryption_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_secret_id_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput"></a>

```python
secrets_manager_security_db_encryption_secret_id_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `asm_server`<sup>Required</sup> <a name="asm_server" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```python
asm_server: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_access_role_arn`<sup>Required</sup> <a name="secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```python
secrets_manager_oracle_asm_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_secret_id`<sup>Required</sup> <a name="secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```python
secrets_manager_oracle_asm_secret_id: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_access_role_arn`<sup>Required</sup> <a name="secrets_manager_security_db_encryption_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```python
secrets_manager_security_db_encryption_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_secret_id`<sup>Required</sup> <a name="secrets_manager_security_db_encryption_secret_id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```python
secrets_manager_security_db_encryption_secret_id: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsOracleSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

---


### DmsDataProviderSettingsOutputReference <a name="DmsDataProviderSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings">put_doc_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings">put_ibm_db2_luw_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings">put_ibm_db2_zos_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings">put_maria_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings">put_microsoft_sql_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings">put_mongo_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings">put_mysql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings">put_oracle_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings">put_postgresql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings">put_redshift_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings">put_sybase_ase_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings">reset_doc_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings">reset_ibm_db2_luw_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings">reset_ibm_db2_zos_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings">reset_maria_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings">reset_microsoft_sql_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings">reset_mongo_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings">reset_mysql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings">reset_oracle_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings">reset_postgresql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings">reset_redshift_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings">reset_sybase_ase_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_doc_db_settings` <a name="put_doc_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings"></a>

```python
def put_doc_db_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsDocDbSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>]

---

##### `put_ibm_db2_luw_settings` <a name="put_ibm_db2_luw_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings"></a>

```python
def put_ibm_db2_luw_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2LuwSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>]

---

##### `put_ibm_db2_zos_settings` <a name="put_ibm_db2_zos_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings"></a>

```python
def put_ibm_db2_zos_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2ZosSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>]

---

##### `put_maria_db_settings` <a name="put_maria_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings"></a>

```python
def put_maria_db_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsMariaDbSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>]

---

##### `put_microsoft_sql_server_settings` <a name="put_microsoft_sql_server_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings"></a>

```python
def put_microsoft_sql_server_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsMicrosoftSqlServerSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>]

---

##### `put_mongo_db_settings` <a name="put_mongo_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings"></a>

```python
def put_mongo_db_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsMongoDbSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>]

---

##### `put_mysql_settings` <a name="put_mysql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings"></a>

```python
def put_mysql_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsMysqlSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>]

---

##### `put_oracle_settings` <a name="put_oracle_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings"></a>

```python
def put_oracle_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsOracleSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>]

---

##### `put_postgresql_settings` <a name="put_postgresql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings"></a>

```python
def put_postgresql_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsPostgresqlSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>]

---

##### `put_redshift_settings` <a name="put_redshift_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings"></a>

```python
def put_redshift_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsRedshiftSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>]

---

##### `put_sybase_ase_settings` <a name="put_sybase_ase_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings"></a>

```python
def put_sybase_ase_settings(
  value: IResolvable | typing.List[DmsDataProviderSettingsSybaseAseSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>]

---

##### `reset_doc_db_settings` <a name="reset_doc_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings"></a>

```python
def reset_doc_db_settings() -> None
```

##### `reset_ibm_db2_luw_settings` <a name="reset_ibm_db2_luw_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings"></a>

```python
def reset_ibm_db2_luw_settings() -> None
```

##### `reset_ibm_db2_zos_settings` <a name="reset_ibm_db2_zos_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings"></a>

```python
def reset_ibm_db2_zos_settings() -> None
```

##### `reset_maria_db_settings` <a name="reset_maria_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings"></a>

```python
def reset_maria_db_settings() -> None
```

##### `reset_microsoft_sql_server_settings` <a name="reset_microsoft_sql_server_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings"></a>

```python
def reset_microsoft_sql_server_settings() -> None
```

##### `reset_mongo_db_settings` <a name="reset_mongo_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings"></a>

```python
def reset_mongo_db_settings() -> None
```

##### `reset_mysql_settings` <a name="reset_mysql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings"></a>

```python
def reset_mysql_settings() -> None
```

##### `reset_oracle_settings` <a name="reset_oracle_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings"></a>

```python
def reset_oracle_settings() -> None
```

##### `reset_postgresql_settings` <a name="reset_postgresql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings"></a>

```python
def reset_postgresql_settings() -> None
```

##### `reset_redshift_settings` <a name="reset_redshift_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings"></a>

```python
def reset_redshift_settings() -> None
```

##### `reset_sybase_ase_settings` <a name="reset_sybase_ase_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings"></a>

```python
def reset_sybase_ase_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings">doc_db_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">ibm_db2_luw_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings">ibm_db2_zos_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings">maria_db_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">microsoft_sql_server_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings">mongo_db_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings">mysql_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings">oracle_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings">postgresql_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings">redshift_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings">sybase_ase_settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput">doc_db_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput">ibm_db2_luw_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput">ibm_db2_zos_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput">maria_db_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput">microsoft_sql_server_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput">mongo_db_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput">mysql_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput">oracle_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput">postgresql_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput">redshift_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput">sybase_ase_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_db_settings`<sup>Required</sup> <a name="doc_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```python
doc_db_settings: DmsDataProviderSettingsDocDbSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a>

---

##### `ibm_db2_luw_settings`<sup>Required</sup> <a name="ibm_db2_luw_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```python
ibm_db2_luw_settings: DmsDataProviderSettingsIbmDb2LuwSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a>

---

##### `ibm_db2_zos_settings`<sup>Required</sup> <a name="ibm_db2_zos_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings"></a>

```python
ibm_db2_zos_settings: DmsDataProviderSettingsIbmDb2ZosSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a>

---

##### `maria_db_settings`<sup>Required</sup> <a name="maria_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```python
maria_db_settings: DmsDataProviderSettingsMariaDbSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a>

---

##### `microsoft_sql_server_settings`<sup>Required</sup> <a name="microsoft_sql_server_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```python
microsoft_sql_server_settings: DmsDataProviderSettingsMicrosoftSqlServerSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a>

---

##### `mongo_db_settings`<sup>Required</sup> <a name="mongo_db_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```python
mongo_db_settings: DmsDataProviderSettingsMongoDbSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a>

---

##### `mysql_settings`<sup>Required</sup> <a name="mysql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings"></a>

```python
mysql_settings: DmsDataProviderSettingsMysqlSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a>

---

##### `oracle_settings`<sup>Required</sup> <a name="oracle_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```python
oracle_settings: DmsDataProviderSettingsOracleSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a>

---

##### `postgresql_settings`<sup>Required</sup> <a name="postgresql_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings"></a>

```python
postgresql_settings: DmsDataProviderSettingsPostgresqlSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a>

---

##### `redshift_settings`<sup>Required</sup> <a name="redshift_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```python
redshift_settings: DmsDataProviderSettingsRedshiftSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a>

---

##### `sybase_ase_settings`<sup>Required</sup> <a name="sybase_ase_settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```python
sybase_ase_settings: DmsDataProviderSettingsSybaseAseSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a>

---

##### `doc_db_settings_input`<sup>Optional</sup> <a name="doc_db_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput"></a>

```python
doc_db_settings_input: IResolvable | typing.List[DmsDataProviderSettingsDocDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>]

---

##### `ibm_db2_luw_settings_input`<sup>Optional</sup> <a name="ibm_db2_luw_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput"></a>

```python
ibm_db2_luw_settings_input: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2LuwSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>]

---

##### `ibm_db2_zos_settings_input`<sup>Optional</sup> <a name="ibm_db2_zos_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput"></a>

```python
ibm_db2_zos_settings_input: IResolvable | typing.List[DmsDataProviderSettingsIbmDb2ZosSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings">DmsDataProviderSettingsIbmDb2ZosSettings</a>]

---

##### `maria_db_settings_input`<sup>Optional</sup> <a name="maria_db_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput"></a>

```python
maria_db_settings_input: IResolvable | typing.List[DmsDataProviderSettingsMariaDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>]

---

##### `microsoft_sql_server_settings_input`<sup>Optional</sup> <a name="microsoft_sql_server_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput"></a>

```python
microsoft_sql_server_settings_input: IResolvable | typing.List[DmsDataProviderSettingsMicrosoftSqlServerSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>]

---

##### `mongo_db_settings_input`<sup>Optional</sup> <a name="mongo_db_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput"></a>

```python
mongo_db_settings_input: IResolvable | typing.List[DmsDataProviderSettingsMongoDbSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>]

---

##### `mysql_settings_input`<sup>Optional</sup> <a name="mysql_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput"></a>

```python
mysql_settings_input: IResolvable | typing.List[DmsDataProviderSettingsMysqlSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings">DmsDataProviderSettingsMysqlSettings</a>]

---

##### `oracle_settings_input`<sup>Optional</sup> <a name="oracle_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput"></a>

```python
oracle_settings_input: IResolvable | typing.List[DmsDataProviderSettingsOracleSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>]

---

##### `postgresql_settings_input`<sup>Optional</sup> <a name="postgresql_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput"></a>

```python
postgresql_settings_input: IResolvable | typing.List[DmsDataProviderSettingsPostgresqlSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>]

---

##### `redshift_settings_input`<sup>Optional</sup> <a name="redshift_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput"></a>

```python
redshift_settings_input: IResolvable | typing.List[DmsDataProviderSettingsRedshiftSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>]

---

##### `sybase_ase_settings_input`<sup>Optional</sup> <a name="sybase_ase_settings_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput"></a>

```python
sybase_ase_settings_input: IResolvable | typing.List[DmsDataProviderSettingsSybaseAseSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

---


### DmsDataProviderSettingsPostgresqlSettingsList <a name="DmsDataProviderSettingsPostgresqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsPostgresqlSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsPostgresqlSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>]

---


### DmsDataProviderSettingsPostgresqlSettingsOutputReference <a name="DmsDataProviderSettingsPostgresqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsPostgresqlSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings">DmsDataProviderSettingsPostgresqlSettings</a>

---


### DmsDataProviderSettingsRedshiftSettingsList <a name="DmsDataProviderSettingsRedshiftSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsRedshiftSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsRedshiftSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>]

---


### DmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn">reset_s3_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path">reset_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_s3_access_role_arn` <a name="reset_s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn"></a>

```python
def reset_s3_access_role_arn() -> None
```

##### `reset_s3_path` <a name="reset_s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path"></a>

```python
def reset_s3_path() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput">s3_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput">s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn">s3_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path">s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn_input`<sup>Optional</sup> <a name="s3_access_role_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```python
s3_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_path_input`<sup>Optional</sup> <a name="s3_path_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput"></a>

```python
s3_path_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_access_role_arn`<sup>Required</sup> <a name="s3_access_role_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn"></a>

```python
s3_access_role_arn: str
```

- *Type:* str

---

##### `s3_path`<sup>Required</sup> <a name="s3_path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path"></a>

```python
s3_path: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsRedshiftSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

---


### DmsDataProviderSettingsSybaseAseSettingsList <a name="DmsDataProviderSettingsSybaseAseSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderSettingsSybaseAseSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderSettingsSybaseAseSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>]

---


### DmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword">reset_encrypt_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_encrypt_password` <a name="reset_encrypt_password" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword"></a>

```python
def reset_encrypt_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput">encrypt_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">encrypt_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `encrypt_password_input`<sup>Optional</sup> <a name="encrypt_password_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput"></a>

```python
encrypt_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `encrypt_password`<sup>Required</sup> <a name="encrypt_password" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```python
encrypt_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsSybaseAseSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

---



