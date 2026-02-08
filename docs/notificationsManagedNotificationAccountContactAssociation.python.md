# `notificationsManagedNotificationAccountContactAssociation` Submodule <a name="`notificationsManagedNotificationAccountContactAssociation` Submodule" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsManagedNotificationAccountContactAssociation <a name="NotificationsManagedNotificationAccountContactAssociation" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association aws_notifications_managed_notification_account_contact_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer"></a>

```python
from cdktn_provider_aws import notifications_managed_notification_account_contact_association

notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  contact_identifier: str,
  managed_notification_configuration_arn: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.contactIdentifier">contact_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#contact_identifier NotificationsManagedNotificationAccountContactAssociation#contact_identifier}. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.managedNotificationConfigurationArn">managed_notification_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#managed_notification_configuration_arn NotificationsManagedNotificationAccountContactAssociation#managed_notification_configuration_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `contact_identifier`<sup>Required</sup> <a name="contact_identifier" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.contactIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#contact_identifier NotificationsManagedNotificationAccountContactAssociation#contact_identifier}.

---

##### `managed_notification_configuration_arn`<sup>Required</sup> <a name="managed_notification_configuration_arn" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.Initializer.parameter.managedNotificationConfigurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#managed_notification_configuration_arn NotificationsManagedNotificationAccountContactAssociation#managed_notification_configuration_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationsManagedNotificationAccountContactAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isConstruct"></a>

```python
from cdktn_provider_aws import notifications_managed_notification_account_contact_association

notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isTerraformElement"></a>

```python
from cdktn_provider_aws import notifications_managed_notification_account_contact_association

notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isTerraformResource"></a>

```python
from cdktn_provider_aws import notifications_managed_notification_account_contact_association

notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_aws import notifications_managed_notification_account_contact_association

notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationsManagedNotificationAccountContactAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationsManagedNotificationAccountContactAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationsManagedNotificationAccountContactAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsManagedNotificationAccountContactAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.contactIdentifierInput">contact_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.managedNotificationConfigurationArnInput">managed_notification_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.contactIdentifier">contact_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.managedNotificationConfigurationArn">managed_notification_configuration_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `contact_identifier_input`<sup>Optional</sup> <a name="contact_identifier_input" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.contactIdentifierInput"></a>

```python
contact_identifier_input: str
```

- *Type:* str

---

##### `managed_notification_configuration_arn_input`<sup>Optional</sup> <a name="managed_notification_configuration_arn_input" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.managedNotificationConfigurationArnInput"></a>

```python
managed_notification_configuration_arn_input: str
```

- *Type:* str

---

##### `contact_identifier`<sup>Required</sup> <a name="contact_identifier" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.contactIdentifier"></a>

```python
contact_identifier: str
```

- *Type:* str

---

##### `managed_notification_configuration_arn`<sup>Required</sup> <a name="managed_notification_configuration_arn" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.managedNotificationConfigurationArn"></a>

```python
managed_notification_configuration_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsManagedNotificationAccountContactAssociationConfig <a name="NotificationsManagedNotificationAccountContactAssociationConfig" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.Initializer"></a>

```python
from cdktn_provider_aws import notifications_managed_notification_account_contact_association

notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  contact_identifier: str,
  managed_notification_configuration_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.contactIdentifier">contact_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#contact_identifier NotificationsManagedNotificationAccountContactAssociation#contact_identifier}. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.managedNotificationConfigurationArn">managed_notification_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#managed_notification_configuration_arn NotificationsManagedNotificationAccountContactAssociation#managed_notification_configuration_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `contact_identifier`<sup>Required</sup> <a name="contact_identifier" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.contactIdentifier"></a>

```python
contact_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#contact_identifier NotificationsManagedNotificationAccountContactAssociation#contact_identifier}.

---

##### `managed_notification_configuration_arn`<sup>Required</sup> <a name="managed_notification_configuration_arn" id="@cdktn/provider-aws.notificationsManagedNotificationAccountContactAssociation.NotificationsManagedNotificationAccountContactAssociationConfig.property.managedNotificationConfigurationArn"></a>

```python
managed_notification_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_account_contact_association#managed_notification_configuration_arn NotificationsManagedNotificationAccountContactAssociation#managed_notification_configuration_arn}.

---



