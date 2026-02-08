# `notificationsOrganizationsAccess` Submodule <a name="`notificationsOrganizationsAccess` Submodule" id="@cdktn/provider-aws.notificationsOrganizationsAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsOrganizationsAccess <a name="NotificationsOrganizationsAccess" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access aws_notifications_organizations_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccess(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  timeouts: NotificationsOrganizationsAccessTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#enabled NotificationsOrganizationsAccess#enabled}. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#enabled NotificationsOrganizationsAccess#enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#timeouts NotificationsOrganizationsAccess#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#create NotificationsOrganizationsAccess#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#delete NotificationsOrganizationsAccess#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#update NotificationsOrganizationsAccess#update}

---

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationsOrganizationsAccess resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isConstruct"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isTerraformElement"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isTerraformResource"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.generateConfigForImport"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationsOrganizationsAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationsOrganizationsAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationsOrganizationsAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsOrganizationsAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference">NotificationsOrganizationsAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.timeouts"></a>

```python
timeouts: NotificationsOrganizationsAccessTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference">NotificationsOrganizationsAccessTimeoutsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NotificationsOrganizationsAccessTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsOrganizationsAccessConfig <a name="NotificationsOrganizationsAccessConfig" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.Initializer"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  timeouts: NotificationsOrganizationsAccessTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#enabled NotificationsOrganizationsAccess#enabled}. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#enabled NotificationsOrganizationsAccess#enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessConfig.property.timeouts"></a>

```python
timeouts: NotificationsOrganizationsAccessTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#timeouts NotificationsOrganizationsAccess#timeouts}

---

### NotificationsOrganizationsAccessTimeouts <a name="NotificationsOrganizationsAccessTimeouts" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#create NotificationsOrganizationsAccess#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#delete NotificationsOrganizationsAccess#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizations_access#update NotificationsOrganizationsAccess#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationsOrganizationsAccessTimeoutsOutputReference <a name="NotificationsOrganizationsAccessTimeoutsOutputReference" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import notifications_organizations_access

notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NotificationsOrganizationsAccessTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.notificationsOrganizationsAccess.NotificationsOrganizationsAccessTimeouts">NotificationsOrganizationsAccessTimeouts</a>

---



