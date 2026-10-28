# `directoryservicedataGroup` Submodule <a name="`directoryservicedataGroup` Submodule" id="@cdktn/provider-aws.directoryservicedataGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryservicedataGroup <a name="DirectoryservicedataGroup" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group aws_directoryservicedata_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer"></a>

```python
from cdktn_provider_aws import directoryservicedata_group

directoryservicedataGroup.DirectoryservicedataGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_id: str,
  sam_account_name: str,
  group_scope: str = None,
  group_type: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#directory_id DirectoryservicedataGroup#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.samAccountName">sam_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#sam_account_name DirectoryservicedataGroup#sam_account_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.groupScope">group_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_scope DirectoryservicedataGroup#group_scope}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.groupType">group_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_type DirectoryservicedataGroup#group_type}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#directory_id DirectoryservicedataGroup#directory_id}.

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.samAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#sam_account_name DirectoryservicedataGroup#sam_account_name}.

---

##### `group_scope`<sup>Optional</sup> <a name="group_scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.groupScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_scope DirectoryservicedataGroup#group_scope}.

---

##### `group_type`<sup>Optional</sup> <a name="group_type" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.groupType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_type DirectoryservicedataGroup#group_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#region DirectoryservicedataGroup#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupScope">reset_group_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupType">reset_group_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_group_scope` <a name="reset_group_scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupScope"></a>

```python
def reset_group_scope() -> None
```

##### `reset_group_type` <a name="reset_group_type" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetGroupType"></a>

```python
def reset_group_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectoryservicedataGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isConstruct"></a>

```python
from cdktn_provider_aws import directoryservicedata_group

directoryservicedataGroup.DirectoryservicedataGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformElement"></a>

```python
from cdktn_provider_aws import directoryservicedata_group

directoryservicedataGroup.DirectoryservicedataGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformResource"></a>

```python
from cdktn_provider_aws import directoryservicedata_group

directoryservicedataGroup.DirectoryservicedataGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport"></a>

```python
from cdktn_provider_aws import directoryservicedata_group

directoryservicedataGroup.DirectoryservicedataGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectoryservicedataGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectoryservicedataGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectoryservicedataGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryservicedataGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.distinguishedName">distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScopeInput">group_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupTypeInput">group_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountNameInput">sam_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScope">group_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupType">group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountName">sam_account_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `distinguished_name`<sup>Required</sup> <a name="distinguished_name" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.distinguishedName"></a>

```python
distinguished_name: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `group_scope_input`<sup>Optional</sup> <a name="group_scope_input" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScopeInput"></a>

```python
group_scope_input: str
```

- *Type:* str

---

##### `group_type_input`<sup>Optional</sup> <a name="group_type_input" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupTypeInput"></a>

```python
group_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sam_account_name_input`<sup>Optional</sup> <a name="sam_account_name_input" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountNameInput"></a>

```python
sam_account_name_input: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `group_scope`<sup>Required</sup> <a name="group_scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupScope"></a>

```python
group_scope: str
```

- *Type:* str

---

##### `group_type`<sup>Required</sup> <a name="group_type" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.groupType"></a>

```python
group_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.samAccountName"></a>

```python
sam_account_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryservicedataGroupConfig <a name="DirectoryservicedataGroupConfig" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.Initializer"></a>

```python
from cdktn_provider_aws import directoryservicedata_group

directoryservicedataGroup.DirectoryservicedataGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_id: str,
  sam_account_name: str,
  group_scope: str = None,
  group_type: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#directory_id DirectoryservicedataGroup#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.samAccountName">sam_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#sam_account_name DirectoryservicedataGroup#sam_account_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupScope">group_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_scope DirectoryservicedataGroup#group_scope}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupType">group_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_type DirectoryservicedataGroup#group_type}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#directory_id DirectoryservicedataGroup#directory_id}.

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.samAccountName"></a>

```python
sam_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#sam_account_name DirectoryservicedataGroup#sam_account_name}.

---

##### `group_scope`<sup>Optional</sup> <a name="group_scope" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupScope"></a>

```python
group_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_scope DirectoryservicedataGroup#group_scope}.

---

##### `group_type`<sup>Optional</sup> <a name="group_type" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.groupType"></a>

```python
group_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#group_type DirectoryservicedataGroup#group_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataGroup.DirectoryservicedataGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directoryservicedata_group#region DirectoryservicedataGroup#region}

---



