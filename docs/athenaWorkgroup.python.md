# `athenaWorkgroup` Submodule <a name="`athenaWorkgroup` Submodule" id="@cdktn/provider-aws.athenaWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkgroup <a name="AthenaWorkgroup" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup aws_athena_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup(
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
  configuration: AthenaWorkgroupConfiguration = None,
  description: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  region: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#region AthenaWorkgroup#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration"></a>

```python
def put_configuration(
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  customer_content_encryption_configuration: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration = None,
  enable_minimum_encryption_configuration: bool | IResolvable = None,
  enforce_workgroup_configuration: bool | IResolvable = None,
  engine_version: AthenaWorkgroupConfigurationEngineVersion = None,
  execution_role: str = None,
  identity_center_configuration: AthenaWorkgroupConfigurationIdentityCenterConfiguration = None,
  managed_query_results_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration = None,
  monitoring_configuration: AthenaWorkgroupConfigurationMonitoringConfiguration = None,
  publish_cloudwatch_metrics_enabled: bool | IResolvable = None,
  requester_pays_enabled: bool | IResolvable = None,
  result_configuration: AthenaWorkgroupConfigurationResultConfiguration = None
) -> None
```

###### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.bytesScannedCutoffPerQuery"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.

---

###### `customer_content_encryption_configuration`<sup>Optional</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.customerContentEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

customer_content_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#customer_content_encryption_configuration AthenaWorkgroup#customer_content_encryption_configuration}

---

###### `enable_minimum_encryption_configuration`<sup>Optional</sup> <a name="enable_minimum_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.enableMinimumEncryptionConfiguration"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enable_minimum_encryption_configuration AthenaWorkgroup#enable_minimum_encryption_configuration}.

---

###### `enforce_workgroup_configuration`<sup>Optional</sup> <a name="enforce_workgroup_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.enforceWorkgroupConfiguration"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.

---

###### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.engineVersion"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

engine_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#engine_version AthenaWorkgroup#engine_version}

---

###### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.executionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#execution_role AthenaWorkgroup#execution_role}.

---

###### `identity_center_configuration`<sup>Optional</sup> <a name="identity_center_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.identityCenterConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

identity_center_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#identity_center_configuration AthenaWorkgroup#identity_center_configuration}

---

###### `managed_query_results_configuration`<sup>Optional</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.managedQueryResultsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

managed_query_results_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#managed_query_results_configuration AthenaWorkgroup#managed_query_results_configuration}

---

###### `monitoring_configuration`<sup>Optional</sup> <a name="monitoring_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.monitoringConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#monitoring_configuration AthenaWorkgroup#monitoring_configuration}

---

###### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.publishCloudwatchMetricsEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.

---

###### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.requesterPaysEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}.

---

###### `result_configuration`<sup>Optional</sup> <a name="result_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.resultConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

result_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AthenaWorkgroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AthenaWorkgroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AthenaWorkgroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AthenaWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AthenaWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration"></a>

```python
configuration: AthenaWorkgroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput"></a>

```python
configuration_input: AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkgroupConfig <a name="AthenaWorkgroupConfig" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  configuration: AthenaWorkgroupConfiguration = None,
  description: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  region: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration"></a>

```python
configuration: AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#region AthenaWorkgroup#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

### AthenaWorkgroupConfiguration <a name="AthenaWorkgroupConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfiguration(
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  customer_content_encryption_configuration: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration = None,
  enable_minimum_encryption_configuration: bool | IResolvable = None,
  enforce_workgroup_configuration: bool | IResolvable = None,
  engine_version: AthenaWorkgroupConfigurationEngineVersion = None,
  execution_role: str = None,
  identity_center_configuration: AthenaWorkgroupConfigurationIdentityCenterConfiguration = None,
  managed_query_results_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration = None,
  monitoring_configuration: AthenaWorkgroupConfigurationMonitoringConfiguration = None,
  publish_cloudwatch_metrics_enabled: bool | IResolvable = None,
  requester_pays_enabled: bool | IResolvable = None,
  result_configuration: AthenaWorkgroupConfigurationResultConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.customerContentEncryptionConfiguration">customer_content_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a></code> | customer_content_encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enableMinimumEncryptionConfiguration">enable_minimum_encryption_configuration</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enable_minimum_encryption_configuration AthenaWorkgroup#enable_minimum_encryption_configuration}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration">enforce_workgroup_configuration</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | engine_version block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#execution_role AthenaWorkgroup#execution_role}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.identityCenterConfiguration">identity_center_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a></code> | identity_center_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.managedQueryResultsConfiguration">managed_query_results_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a></code> | managed_query_results_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.monitoringConfiguration">monitoring_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a></code> | monitoring_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration">result_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | result_configuration block. |

---

##### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.

---

##### `customer_content_encryption_configuration`<sup>Optional</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.customerContentEncryptionConfiguration"></a>

```python
customer_content_encryption_configuration: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

customer_content_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#customer_content_encryption_configuration AthenaWorkgroup#customer_content_encryption_configuration}

---

##### `enable_minimum_encryption_configuration`<sup>Optional</sup> <a name="enable_minimum_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enableMinimumEncryptionConfiguration"></a>

```python
enable_minimum_encryption_configuration: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enable_minimum_encryption_configuration AthenaWorkgroup#enable_minimum_encryption_configuration}.

---

##### `enforce_workgroup_configuration`<sup>Optional</sup> <a name="enforce_workgroup_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration"></a>

```python
enforce_workgroup_configuration: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion"></a>

```python
engine_version: AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

engine_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#engine_version AthenaWorkgroup#engine_version}

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#execution_role AthenaWorkgroup#execution_role}.

---

##### `identity_center_configuration`<sup>Optional</sup> <a name="identity_center_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.identityCenterConfiguration"></a>

```python
identity_center_configuration: AthenaWorkgroupConfigurationIdentityCenterConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

identity_center_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#identity_center_configuration AthenaWorkgroup#identity_center_configuration}

---

##### `managed_query_results_configuration`<sup>Optional</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.managedQueryResultsConfiguration"></a>

```python
managed_query_results_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

managed_query_results_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#managed_query_results_configuration AthenaWorkgroup#managed_query_results_configuration}

---

##### `monitoring_configuration`<sup>Optional</sup> <a name="monitoring_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.monitoringConfiguration"></a>

```python
monitoring_configuration: AthenaWorkgroupConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#monitoring_configuration AthenaWorkgroup#monitoring_configuration}

---

##### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.

---

##### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}.

---

##### `result_configuration`<sup>Optional</sup> <a name="result_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration"></a>

```python
result_configuration: AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

result_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}

---

### AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration <a name="AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

### AthenaWorkgroupConfigurationEngineVersion <a name="AthenaWorkgroupConfigurationEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion(
  selected_engine_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}. |

---

##### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}.

---

### AthenaWorkgroupConfigurationIdentityCenterConfiguration <a name="AthenaWorkgroupConfigurationIdentityCenterConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration(
  enable_identity_center: bool | IResolvable = None,
  identity_center_instance_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.enableIdentityCenter">enable_identity_center</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enable_identity_center AthenaWorkgroup#enable_identity_center}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#identity_center_instance_arn AthenaWorkgroup#identity_center_instance_arn}. |

---

##### `enable_identity_center`<sup>Optional</sup> <a name="enable_identity_center" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.enableIdentityCenter"></a>

```python
enable_identity_center: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enable_identity_center AthenaWorkgroup#enable_identity_center}.

---

##### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#identity_center_instance_arn AthenaWorkgroup#identity_center_instance_arn}.

---

### AthenaWorkgroupConfigurationManagedQueryResultsConfiguration <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration(
  enabled: bool | IResolvable = None,
  encryption_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

### AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

### AthenaWorkgroupConfigurationMonitoringConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration(
  cloud_watch_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration = None,
  managed_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration = None,
  s3_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.cloudWatchLoggingConfiguration">cloud_watch_logging_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a></code> | cloud_watch_logging_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration">managed_logging_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | managed_logging_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration">s3_logging_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | s3_logging_configuration block. |

---

##### `cloud_watch_logging_configuration`<sup>Optional</sup> <a name="cloud_watch_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.cloudWatchLoggingConfiguration"></a>

```python
cloud_watch_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

cloud_watch_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#cloud_watch_logging_configuration AthenaWorkgroup#cloud_watch_logging_configuration}

---

##### `managed_logging_configuration`<sup>Optional</sup> <a name="managed_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```python
managed_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

managed_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#managed_logging_configuration AthenaWorkgroup#managed_logging_configuration}

---

##### `s3_logging_configuration`<sup>Optional</sup> <a name="s3_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```python
s3_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

s3_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#s3_logging_configuration AthenaWorkgroup#s3_logging_configuration}

---

### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration(
  enabled: bool | IResolvable,
  log_group: str = None,
  log_stream_name_prefix: str = None,
  log_type: IResolvable | typing.List[AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_group AthenaWorkgroup#log_group}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logStreamNamePrefix">log_stream_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_stream_name_prefix AthenaWorkgroup#log_stream_name_prefix}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logType">log_type</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]</code> | log_type block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_group AthenaWorkgroup#log_group}.

---

##### `log_stream_name_prefix`<sup>Optional</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```python
log_stream_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_stream_name_prefix AthenaWorkgroup#log_stream_name_prefix}.

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logType"></a>

```python
log_type: IResolvable | typing.List[AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]

log_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_type AthenaWorkgroup#log_type}

---

### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#key AthenaWorkgroup#key}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#values AthenaWorkgroup#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#key AthenaWorkgroup#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#values AthenaWorkgroup#values}.

---

### AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration(
  enabled: bool | IResolvable,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

### AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration(
  enabled: bool | IResolvable,
  kms_key: str = None,
  log_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation">log_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_location AthenaWorkgroup#log_location}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

##### `log_location`<sup>Optional</sup> <a name="log_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```python
log_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_location AthenaWorkgroup#log_location}.

---

### AthenaWorkgroupConfigurationResultConfiguration <a name="AthenaWorkgroupConfigurationResultConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration(
  acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration = None,
  encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation">output_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#output_location AthenaWorkgroup#output_location}. |

---

##### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}.

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#output_location AthenaWorkgroup#output_location}.

---

### AthenaWorkgroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration(
  s3_acl_option: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}. |

---

##### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}.

---

### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration(
  encryption_option: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">encryption_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}. |

---

##### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationEngineVersionOutputReference <a name="AthenaWorkgroupConfigurationEngineVersionOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">reset_selected_engine_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_selected_engine_version` <a name="reset_selected_engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```python
def reset_selected_engine_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">effective_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">selected_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_engine_version`<sup>Required</sup> <a name="effective_engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```python
effective_engine_version: str
```

- *Type:* str

---

##### `selected_engine_version_input`<sup>Optional</sup> <a name="selected_engine_version_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```python
selected_engine_version_input: str
```

- *Type:* str

---

##### `selected_engine_version`<sup>Required</sup> <a name="selected_engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---


### AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference <a name="AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetEnableIdentityCenter">reset_enable_identity_center</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetIdentityCenterInstanceArn">reset_identity_center_instance_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_identity_center` <a name="reset_enable_identity_center" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetEnableIdentityCenter"></a>

```python
def reset_enable_identity_center() -> None
```

##### `reset_identity_center_instance_arn` <a name="reset_identity_center_instance_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetIdentityCenterInstanceArn"></a>

```python
def reset_identity_center_instance_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenterInput">enable_identity_center_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput">identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenter">enable_identity_center</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_identity_center_input`<sup>Optional</sup> <a name="enable_identity_center_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenterInput"></a>

```python
enable_identity_center_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `identity_center_instance_arn_input`<sup>Optional</sup> <a name="identity_center_instance_arn_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput"></a>

```python
identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `enable_identity_center`<sup>Required</sup> <a name="enable_identity_center" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenter"></a>

```python
enable_identity_center: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationIdentityCenterConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

---


### AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]

---


### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.putLogType">put_log_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">reset_log_stream_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogType">reset_log_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_type` <a name="put_log_type" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.putLogType"></a>

```python
def put_log_type(
  value: IResolvable | typing.List[AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.putLogType.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]

---

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_log_stream_name_prefix` <a name="reset_log_stream_name_prefix" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```python
def reset_log_stream_name_prefix() -> None
```

##### `reset_log_type` <a name="reset_log_type" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogType"></a>

```python
def reset_log_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logType">log_type</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">log_stream_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logTypeInput">log_type_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">log_stream_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logType"></a>

```python
log_type: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_stream_name_prefix_input`<sup>Optional</sup> <a name="log_stream_name_prefix_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```python
log_stream_name_prefix_input: str
```

- *Type:* str

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logTypeInput"></a>

```python
log_type_input: IResolvable | typing.List[AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream_name_prefix`<sup>Required</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```python
log_stream_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration">put_cloud_watch_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">put_managed_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration">put_s3_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetCloudWatchLoggingConfiguration">reset_cloud_watch_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">reset_managed_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">reset_s3_logging_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_watch_logging_configuration` <a name="put_cloud_watch_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration"></a>

```python
def put_cloud_watch_logging_configuration(
  enabled: bool | IResolvable,
  log_group: str = None,
  log_stream_name_prefix: str = None,
  log_type: IResolvable | typing.List[AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration.parameter.logGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_group AthenaWorkgroup#log_group}.

---

###### `log_stream_name_prefix`<sup>Optional</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration.parameter.logStreamNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_stream_name_prefix AthenaWorkgroup#log_stream_name_prefix}.

---

###### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration.parameter.logType"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>]

log_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_type AthenaWorkgroup#log_type}

---

##### `put_managed_logging_configuration` <a name="put_managed_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```python
def put_managed_logging_configuration(
  enabled: bool | IResolvable,
  kms_key: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

##### `put_s3_logging_configuration` <a name="put_s3_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```python
def put_s3_logging_configuration(
  enabled: bool | IResolvable,
  kms_key: str = None,
  log_location: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

###### `log_location`<sup>Optional</sup> <a name="log_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.logLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#log_location AthenaWorkgroup#log_location}.

---

##### `reset_cloud_watch_logging_configuration` <a name="reset_cloud_watch_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetCloudWatchLoggingConfiguration"></a>

```python
def reset_cloud_watch_logging_configuration() -> None
```

##### `reset_managed_logging_configuration` <a name="reset_managed_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```python
def reset_managed_logging_configuration() -> None
```

##### `reset_s3_logging_configuration` <a name="reset_s3_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```python
def reset_s3_logging_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfiguration">cloud_watch_logging_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managed_logging_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3_logging_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfigurationInput">cloud_watch_logging_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managed_logging_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3_logging_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_logging_configuration`<sup>Required</sup> <a name="cloud_watch_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfiguration"></a>

```python
cloud_watch_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference</a>

---

##### `managed_logging_configuration`<sup>Required</sup> <a name="managed_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```python
managed_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3_logging_configuration`<sup>Required</sup> <a name="s3_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```python
s3_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloud_watch_logging_configuration_input`<sup>Optional</sup> <a name="cloud_watch_logging_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfigurationInput"></a>

```python
cloud_watch_logging_configuration_input: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

---

##### `managed_logging_configuration_input`<sup>Optional</sup> <a name="managed_logging_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```python
managed_logging_configuration_input: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3_logging_configuration_input`<sup>Optional</sup> <a name="s3_logging_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```python
s3_logging_configuration_input: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">reset_log_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_log_location` <a name="reset_log_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```python
def reset_log_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">log_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">log_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `log_location_input`<sup>Optional</sup> <a name="log_location_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```python
log_location_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `log_location`<sup>Required</sup> <a name="log_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```python
log_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkgroupConfigurationOutputReference <a name="AthenaWorkgroupConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration">put_customer_content_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion">put_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putIdentityCenterConfiguration">put_identity_center_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putManagedQueryResultsConfiguration">put_managed_query_results_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration">put_monitoring_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration">put_result_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">reset_bytes_scanned_cutoff_per_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration">reset_customer_content_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnableMinimumEncryptionConfiguration">reset_enable_minimum_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration">reset_enforce_workgroup_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetIdentityCenterConfiguration">reset_identity_center_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetManagedQueryResultsConfiguration">reset_managed_query_results_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetMonitoringConfiguration">reset_monitoring_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">reset_publish_cloudwatch_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled">reset_requester_pays_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration">reset_result_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_content_encryption_configuration` <a name="put_customer_content_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration"></a>

```python
def put_customer_content_encryption_configuration(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

##### `put_engine_version` <a name="put_engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion"></a>

```python
def put_engine_version(
  selected_engine_version: str = None
) -> None
```

###### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion.parameter.selectedEngineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}.

---

##### `put_identity_center_configuration` <a name="put_identity_center_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putIdentityCenterConfiguration"></a>

```python
def put_identity_center_configuration(
  enable_identity_center: bool | IResolvable = None,
  identity_center_instance_arn: str = None
) -> None
```

###### `enable_identity_center`<sup>Optional</sup> <a name="enable_identity_center" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putIdentityCenterConfiguration.parameter.enableIdentityCenter"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enable_identity_center AthenaWorkgroup#enable_identity_center}.

---

###### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putIdentityCenterConfiguration.parameter.identityCenterInstanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#identity_center_instance_arn AthenaWorkgroup#identity_center_instance_arn}.

---

##### `put_managed_query_results_configuration` <a name="put_managed_query_results_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putManagedQueryResultsConfiguration"></a>

```python
def put_managed_query_results_configuration(
  enabled: bool | IResolvable = None,
  encryption_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

##### `put_monitoring_configuration` <a name="put_monitoring_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration"></a>

```python
def put_monitoring_configuration(
  cloud_watch_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration = None,
  managed_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration = None,
  s3_logging_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration = None
) -> None
```

###### `cloud_watch_logging_configuration`<sup>Optional</sup> <a name="cloud_watch_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration.parameter.cloudWatchLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

cloud_watch_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#cloud_watch_logging_configuration AthenaWorkgroup#cloud_watch_logging_configuration}

---

###### `managed_logging_configuration`<sup>Optional</sup> <a name="managed_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration.parameter.managedLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

managed_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#managed_logging_configuration AthenaWorkgroup#managed_logging_configuration}

---

###### `s3_logging_configuration`<sup>Optional</sup> <a name="s3_logging_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration.parameter.s3LoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

s3_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#s3_logging_configuration AthenaWorkgroup#s3_logging_configuration}

---

##### `put_result_configuration` <a name="put_result_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration"></a>

```python
def put_result_configuration(
  acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration = None,
  encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None
) -> None
```

###### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.aclConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}.

---

###### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.outputLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#output_location AthenaWorkgroup#output_location}.

---

##### `reset_bytes_scanned_cutoff_per_query` <a name="reset_bytes_scanned_cutoff_per_query" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```python
def reset_bytes_scanned_cutoff_per_query() -> None
```

##### `reset_customer_content_encryption_configuration` <a name="reset_customer_content_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```python
def reset_customer_content_encryption_configuration() -> None
```

##### `reset_enable_minimum_encryption_configuration` <a name="reset_enable_minimum_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnableMinimumEncryptionConfiguration"></a>

```python
def reset_enable_minimum_encryption_configuration() -> None
```

##### `reset_enforce_workgroup_configuration` <a name="reset_enforce_workgroup_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration"></a>

```python
def reset_enforce_workgroup_configuration() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_identity_center_configuration` <a name="reset_identity_center_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetIdentityCenterConfiguration"></a>

```python
def reset_identity_center_configuration() -> None
```

##### `reset_managed_query_results_configuration` <a name="reset_managed_query_results_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetManagedQueryResultsConfiguration"></a>

```python
def reset_managed_query_results_configuration() -> None
```

##### `reset_monitoring_configuration` <a name="reset_monitoring_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetMonitoringConfiguration"></a>

```python
def reset_monitoring_configuration() -> None
```

##### `reset_publish_cloudwatch_metrics_enabled` <a name="reset_publish_cloudwatch_metrics_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```python
def reset_publish_cloudwatch_metrics_enabled() -> None
```

##### `reset_requester_pays_enabled` <a name="reset_requester_pays_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```python
def reset_requester_pays_enabled() -> None
```

##### `reset_result_configuration` <a name="reset_result_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration"></a>

```python
def reset_result_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfiguration">customer_content_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfiguration">identity_center_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference">AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfiguration">managed_query_results_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfiguration">monitoring_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration">result_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">bytes_scanned_cutoff_per_query_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput">customer_content_encryption_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfigurationInput">enable_minimum_encryption_configuration_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput">enforce_workgroup_configuration_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput">engine_version_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfigurationInput">identity_center_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput">managed_query_results_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfigurationInput">monitoring_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">publish_cloudwatch_metrics_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput">requester_pays_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput">result_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfiguration">enable_minimum_encryption_configuration</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration">enforce_workgroup_configuration</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_content_encryption_configuration`<sup>Required</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfiguration"></a>

```python
customer_content_encryption_configuration: AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion"></a>

```python
engine_version: AthenaWorkgroupConfigurationEngineVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a>

---

##### `identity_center_configuration`<sup>Required</sup> <a name="identity_center_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfiguration"></a>

```python
identity_center_configuration: AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference">AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference</a>

---

##### `managed_query_results_configuration`<sup>Required</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfiguration"></a>

```python
managed_query_results_configuration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoring_configuration`<sup>Required</sup> <a name="monitoring_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfiguration"></a>

```python
monitoring_configuration: AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference</a>

---

##### `result_configuration`<sup>Required</sup> <a name="result_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration"></a>

```python
result_configuration: AthenaWorkgroupConfigurationResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a>

---

##### `bytes_scanned_cutoff_per_query_input`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```python
bytes_scanned_cutoff_per_query_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_content_encryption_configuration_input`<sup>Optional</sup> <a name="customer_content_encryption_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```python
customer_content_encryption_configuration_input: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `enable_minimum_encryption_configuration_input`<sup>Optional</sup> <a name="enable_minimum_encryption_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfigurationInput"></a>

```python
enable_minimum_encryption_configuration_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enforce_workgroup_configuration_input`<sup>Optional</sup> <a name="enforce_workgroup_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput"></a>

```python
enforce_workgroup_configuration_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput"></a>

```python
engine_version_input: AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `identity_center_configuration_input`<sup>Optional</sup> <a name="identity_center_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfigurationInput"></a>

```python
identity_center_configuration_input: AthenaWorkgroupConfigurationIdentityCenterConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

---

##### `managed_query_results_configuration_input`<sup>Optional</sup> <a name="managed_query_results_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput"></a>

```python
managed_query_results_configuration_input: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `monitoring_configuration_input`<sup>Optional</sup> <a name="monitoring_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```python
monitoring_configuration_input: AthenaWorkgroupConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

---

##### `publish_cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```python
publish_cloudwatch_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `requester_pays_enabled_input`<sup>Optional</sup> <a name="requester_pays_enabled_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```python
requester_pays_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `result_configuration_input`<sup>Optional</sup> <a name="result_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```python
result_configuration_input: AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `bytes_scanned_cutoff_per_query`<sup>Required</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_minimum_encryption_configuration`<sup>Required</sup> <a name="enable_minimum_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfiguration"></a>

```python
enable_minimum_encryption_configuration: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enforce_workgroup_configuration`<sup>Required</sup> <a name="enforce_workgroup_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration"></a>

```python
enforce_workgroup_configuration: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `publish_cloudwatch_metrics_enabled`<sup>Required</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `requester_pays_enabled`<sup>Required</sup> <a name="requester_pays_enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">s3_acl_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_acl_option_input`<sup>Optional</sup> <a name="s3_acl_option_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```python
s3_acl_option_input: str
```

- *Type:* str

---

##### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">reset_encryption_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_option` <a name="reset_encryption_option" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```python
def reset_encryption_option() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryption_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">encryption_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_option_input`<sup>Optional</sup> <a name="encryption_option_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```python
encryption_option_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `encryption_option`<sup>Required</sup> <a name="encryption_option" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import athena_workgroup

athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration">put_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">reset_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation">reset_output_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acl_configuration` <a name="put_acl_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```python
def put_acl_configuration(
  s3_acl_option: str
) -> None
```

###### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.s3AclOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}.

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  encryption_option: str = None,
  kms_key_arn: str = None
) -> None
```

###### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.encryptionOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}.

---

##### `reset_acl_configuration` <a name="reset_acl_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```python
def reset_acl_configuration() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">acl_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">output_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation">output_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acl_configuration`<sup>Required</sup> <a name="acl_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `acl_configuration_input`<sup>Optional</sup> <a name="acl_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```python
acl_configuration_input: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```python
output_location_input: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---



