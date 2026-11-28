# `cloudwatchomniAlert` Submodule <a name="`cloudwatchomniAlert` Submodule" id="@cdktn/provider-aws.cloudwatchomniAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniAlert <a name="CloudwatchomniAlert" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert aws_cloudwatchomni_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlert(
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
  profile_id: str,
  space_id: str,
  description: str = None,
  notification_rule: IResolvable | typing.List[CloudwatchomniAlertNotificationRule] = None,
  notifications_enabled: bool | IResolvable = None,
  region: str = None,
  rule: IResolvable | typing.List[CloudwatchomniAlertRule] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.notificationRule">notification_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]</code> | notification_rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.notificationsEnabled">notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.profileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.spaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}.

---

##### `notification_rule`<sup>Optional</sup> <a name="notification_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.notificationRule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]

notification_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notification_rule CloudwatchomniAlert#notification_rule}

---

##### `notifications_enabled`<sup>Optional</sup> <a name="notifications_enabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.notificationsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#region CloudwatchomniAlert#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#rule CloudwatchomniAlert#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule">put_notification_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationRule">reset_notification_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationsEnabled">reset_notifications_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_rule` <a name="put_notification_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule"></a>

```python
def put_notification_rule(
  value: IResolvable | typing.List[CloudwatchomniAlertNotificationRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[CloudwatchomniAlertRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_notification_rule` <a name="reset_notification_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationRule"></a>

```python
def reset_notification_rule() -> None
```

##### `reset_notifications_enabled` <a name="reset_notifications_enabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationsEnabled"></a>

```python
def reset_notifications_enabled() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchomniAlert resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchomniAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchomniAlert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchomniAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.alertId">alert_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRule">notification_rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList">CloudwatchomniAlertNotificationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList">CloudwatchomniAlertRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRuleInput">notification_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabledInput">notifications_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabled">notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alert_id`<sup>Required</sup> <a name="alert_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.alertId"></a>

```python
alert_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `notification_rule`<sup>Required</sup> <a name="notification_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRule"></a>

```python
notification_rule: CloudwatchomniAlertNotificationRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList">CloudwatchomniAlertNotificationRuleList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.rule"></a>

```python
rule: CloudwatchomniAlertRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList">CloudwatchomniAlertRuleList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_rule_input`<sup>Optional</sup> <a name="notification_rule_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRuleInput"></a>

```python
notification_rule_input: IResolvable | typing.List[CloudwatchomniAlertNotificationRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]

---

##### `notifications_enabled_input`<sup>Optional</sup> <a name="notifications_enabled_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabledInput"></a>

```python
notifications_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[CloudwatchomniAlertRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications_enabled`<sup>Required</sup> <a name="notifications_enabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabled"></a>

```python
notifications_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniAlertConfig <a name="CloudwatchomniAlertConfig" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  profile_id: str,
  space_id: str,
  description: str = None,
  notification_rule: IResolvable | typing.List[CloudwatchomniAlertNotificationRule] = None,
  notifications_enabled: bool | IResolvable = None,
  region: str = None,
  rule: IResolvable | typing.List[CloudwatchomniAlertRule] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationRule">notification_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]</code> | notification_rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationsEnabled">notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}.

---

##### `notification_rule`<sup>Optional</sup> <a name="notification_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationRule"></a>

```python
notification_rule: IResolvable | typing.List[CloudwatchomniAlertNotificationRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]

notification_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notification_rule CloudwatchomniAlert#notification_rule}

---

##### `notifications_enabled`<sup>Optional</sup> <a name="notifications_enabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationsEnabled"></a>

```python
notifications_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#region CloudwatchomniAlert#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.rule"></a>

```python
rule: IResolvable | typing.List[CloudwatchomniAlertRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#rule CloudwatchomniAlert#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}.

---

### CloudwatchomniAlertNotificationRule <a name="CloudwatchomniAlertNotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRule(
  target: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTarget] = None,
  trigger: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTrigger] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.target">target</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>]</code> | target block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.trigger">trigger</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>]</code> | trigger block. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.target"></a>

```python
target: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#target CloudwatchomniAlert#target}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.trigger"></a>

```python
trigger: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTrigger]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#trigger CloudwatchomniAlert#trigger}

---

### CloudwatchomniAlertNotificationRuleTarget <a name="CloudwatchomniAlertNotificationRuleTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget(
  arn: str,
  type: str,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#arn CloudwatchomniAlert#arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#type CloudwatchomniAlert#type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#metadata CloudwatchomniAlert#metadata}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#arn CloudwatchomniAlert#arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#type CloudwatchomniAlert#type}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#metadata CloudwatchomniAlert#metadata}.

---

### CloudwatchomniAlertNotificationRuleTrigger <a name="CloudwatchomniAlertNotificationRuleTrigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger(
  state_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.property.stateValues">state_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#state_values CloudwatchomniAlert#state_values}. |

---

##### `state_values`<sup>Optional</sup> <a name="state_values" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.property.stateValues"></a>

```python
state_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#state_values CloudwatchomniAlert#state_values}.

---

### CloudwatchomniAlertRule <a name="CloudwatchomniAlertRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRule(
  telemetry_rule: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.property.telemetryRule">telemetry_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>]</code> | telemetry_rule block. |

---

##### `telemetry_rule`<sup>Optional</sup> <a name="telemetry_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.property.telemetryRule"></a>

```python
telemetry_rule: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>]

telemetry_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#telemetry_rule CloudwatchomniAlert#telemetry_rule}

---

### CloudwatchomniAlertRuleTelemetryRule <a name="CloudwatchomniAlertRuleTelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule(
  condition: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleCondition] = None,
  evaluation: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleEvaluation] = None,
  no_data: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleNoData] = None,
  query: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleQuery] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.condition">condition</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.evaluation">evaluation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>]</code> | evaluation block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.noData">no_data</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>]</code> | no_data block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.query">query</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>]</code> | query block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.condition"></a>

```python
condition: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleCondition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#condition CloudwatchomniAlert#condition}

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.evaluation"></a>

```python
evaluation: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleEvaluation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>]

evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#evaluation CloudwatchomniAlert#evaluation}

---

##### `no_data`<sup>Optional</sup> <a name="no_data" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.noData"></a>

```python
no_data: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleNoData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>]

no_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#no_data CloudwatchomniAlert#no_data}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.query"></a>

```python
query: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#query CloudwatchomniAlert#query}

---

### CloudwatchomniAlertRuleTelemetryRuleCondition <a name="CloudwatchomniAlertRuleTelemetryRuleCondition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition(
  comparator: str,
  threshold_mode: str,
  critical_threshold: typing.Union[int, float] = None,
  threshold_field: str = None,
  warning_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.comparator">comparator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#comparator CloudwatchomniAlert#comparator}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdMode">threshold_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_mode CloudwatchomniAlert#threshold_mode}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.criticalThreshold">critical_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#critical_threshold CloudwatchomniAlert#critical_threshold}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdField">threshold_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_field CloudwatchomniAlert#threshold_field}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#warning_threshold CloudwatchomniAlert#warning_threshold}. |

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.comparator"></a>

```python
comparator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#comparator CloudwatchomniAlert#comparator}.

---

##### `threshold_mode`<sup>Required</sup> <a name="threshold_mode" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdMode"></a>

```python
threshold_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_mode CloudwatchomniAlert#threshold_mode}.

---

##### `critical_threshold`<sup>Optional</sup> <a name="critical_threshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.criticalThreshold"></a>

```python
critical_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#critical_threshold CloudwatchomniAlert#critical_threshold}.

---

##### `threshold_field`<sup>Optional</sup> <a name="threshold_field" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdField"></a>

```python
threshold_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_field CloudwatchomniAlert#threshold_field}.

---

##### `warning_threshold`<sup>Optional</sup> <a name="warning_threshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.warningThreshold"></a>

```python
warning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#warning_threshold CloudwatchomniAlert#warning_threshold}.

---

### CloudwatchomniAlertRuleTelemetryRuleEvaluation <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation(
  interval_seconds: typing.Union[int, float],
  pending_duration_seconds: typing.Union[int, float] = None,
  recovery_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#interval_seconds CloudwatchomniAlert#interval_seconds}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds">pending_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#pending_duration_seconds CloudwatchomniAlert#pending_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds">recovery_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#recovery_duration_seconds CloudwatchomniAlert#recovery_duration_seconds}. |

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#interval_seconds CloudwatchomniAlert#interval_seconds}.

---

##### `pending_duration_seconds`<sup>Optional</sup> <a name="pending_duration_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds"></a>

```python
pending_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#pending_duration_seconds CloudwatchomniAlert#pending_duration_seconds}.

---

##### `recovery_duration_seconds`<sup>Optional</sup> <a name="recovery_duration_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds"></a>

```python
recovery_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#recovery_duration_seconds CloudwatchomniAlert#recovery_duration_seconds}.

---

### CloudwatchomniAlertRuleTelemetryRuleNoData <a name="CloudwatchomniAlertRuleTelemetryRuleNoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData(
  treat_as: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.property.treatAs">treat_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#treat_as CloudwatchomniAlert#treat_as}. |

---

##### `treat_as`<sup>Required</sup> <a name="treat_as" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.property.treatAs"></a>

```python
treat_as: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#treat_as CloudwatchomniAlert#treat_as}.

---

### CloudwatchomniAlertRuleTelemetryRuleQuery <a name="CloudwatchomniAlertRuleTelemetryRuleQuery" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery(
  expression: str,
  language: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#expression CloudwatchomniAlert#expression}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#language CloudwatchomniAlert#language}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#expression CloudwatchomniAlert#expression}.

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#language CloudwatchomniAlert#language}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniAlertNotificationRuleList <a name="CloudwatchomniAlertNotificationRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertNotificationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertNotificationRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>]

---


### CloudwatchomniAlertNotificationRuleOutputReference <a name="CloudwatchomniAlertNotificationRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTrigger">reset_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget"></a>

```python
def put_target(
  value: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTarget]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>]

---

##### `put_trigger` <a name="put_trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger"></a>

```python
def put_trigger(
  value: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTrigger]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>]

---

##### `reset_target` <a name="reset_target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_trigger` <a name="reset_trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTrigger"></a>

```python
def reset_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList">CloudwatchomniAlertNotificationRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList">CloudwatchomniAlertNotificationRuleTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.targetInput">target_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.triggerInput">trigger_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.target"></a>

```python
target: CloudwatchomniAlertNotificationRuleTargetList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList">CloudwatchomniAlertNotificationRuleTargetList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.trigger"></a>

```python
trigger: CloudwatchomniAlertNotificationRuleTriggerList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList">CloudwatchomniAlertNotificationRuleTriggerList</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.targetInput"></a>

```python
target_input: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>]

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.triggerInput"></a>

```python
trigger_input: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTrigger]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertNotificationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>

---


### CloudwatchomniAlertNotificationRuleTargetList <a name="CloudwatchomniAlertNotificationRuleTargetList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertNotificationRuleTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>]

---


### CloudwatchomniAlertNotificationRuleTargetOutputReference <a name="CloudwatchomniAlertNotificationRuleTargetOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertNotificationRuleTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>

---


### CloudwatchomniAlertNotificationRuleTriggerList <a name="CloudwatchomniAlertNotificationRuleTriggerList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertNotificationRuleTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertNotificationRuleTrigger]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>]

---


### CloudwatchomniAlertNotificationRuleTriggerOutputReference <a name="CloudwatchomniAlertNotificationRuleTriggerOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resetStateValues">reset_state_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state_values` <a name="reset_state_values" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resetStateValues"></a>

```python
def reset_state_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValuesInput">state_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValues">state_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_values_input`<sup>Optional</sup> <a name="state_values_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValuesInput"></a>

```python
state_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_values`<sup>Required</sup> <a name="state_values" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValues"></a>

```python
state_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertNotificationRuleTrigger
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>

---


### CloudwatchomniAlertRuleList <a name="CloudwatchomniAlertRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>]

---


### CloudwatchomniAlertRuleOutputReference <a name="CloudwatchomniAlertRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule">put_telemetry_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resetTelemetryRule">reset_telemetry_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_telemetry_rule` <a name="put_telemetry_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule"></a>

```python
def put_telemetry_rule(
  value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>]

---

##### `reset_telemetry_rule` <a name="reset_telemetry_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resetTelemetryRule"></a>

```python
def reset_telemetry_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRule">telemetry_rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList">CloudwatchomniAlertRuleTelemetryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRuleInput">telemetry_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `telemetry_rule`<sup>Required</sup> <a name="telemetry_rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRule"></a>

```python
telemetry_rule: CloudwatchomniAlertRuleTelemetryRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList">CloudwatchomniAlertRuleTelemetryRuleList</a>

---

##### `telemetry_rule_input`<sup>Optional</sup> <a name="telemetry_rule_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRuleInput"></a>

```python
telemetry_rule_input: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>

---


### CloudwatchomniAlertRuleTelemetryRuleConditionList <a name="CloudwatchomniAlertRuleTelemetryRuleConditionList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleCondition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>]

---


### CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold">reset_critical_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField">reset_threshold_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold">reset_warning_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_critical_threshold` <a name="reset_critical_threshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold"></a>

```python
def reset_critical_threshold() -> None
```

##### `reset_threshold_field` <a name="reset_threshold_field" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField"></a>

```python
def reset_threshold_field() -> None
```

##### `reset_warning_threshold` <a name="reset_warning_threshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold"></a>

```python
def reset_warning_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput">comparator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput">critical_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput">threshold_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput">threshold_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput">warning_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparator">comparator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">critical_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">threshold_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">threshold_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparator_input`<sup>Optional</sup> <a name="comparator_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput"></a>

```python
comparator_input: str
```

- *Type:* str

---

##### `critical_threshold_input`<sup>Optional</sup> <a name="critical_threshold_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput"></a>

```python
critical_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_field_input`<sup>Optional</sup> <a name="threshold_field_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput"></a>

```python
threshold_field_input: str
```

- *Type:* str

---

##### `threshold_mode_input`<sup>Optional</sup> <a name="threshold_mode_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput"></a>

```python
threshold_mode_input: str
```

- *Type:* str

---

##### `warning_threshold_input`<sup>Optional</sup> <a name="warning_threshold_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput"></a>

```python
warning_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```python
comparator: str
```

- *Type:* str

---

##### `critical_threshold`<sup>Required</sup> <a name="critical_threshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```python
critical_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_field`<sup>Required</sup> <a name="threshold_field" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```python
threshold_field: str
```

- *Type:* str

---

##### `threshold_mode`<sup>Required</sup> <a name="threshold_mode" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```python
threshold_mode: str
```

- *Type:* str

---

##### `warning_threshold`<sup>Required</sup> <a name="warning_threshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```python
warning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>

---


### CloudwatchomniAlertRuleTelemetryRuleEvaluationList <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluationList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleEvaluation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>]

---


### CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds">reset_pending_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds">reset_recovery_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pending_duration_seconds` <a name="reset_pending_duration_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds"></a>

```python
def reset_pending_duration_seconds() -> None
```

##### `reset_recovery_duration_seconds` <a name="reset_recovery_duration_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds"></a>

```python
def reset_recovery_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput">pending_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput">recovery_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">pending_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">recovery_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_duration_seconds_input`<sup>Optional</sup> <a name="pending_duration_seconds_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput"></a>

```python
pending_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_duration_seconds_input`<sup>Optional</sup> <a name="recovery_duration_seconds_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput"></a>

```python
recovery_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_duration_seconds`<sup>Required</sup> <a name="pending_duration_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```python
pending_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_duration_seconds`<sup>Required</sup> <a name="recovery_duration_seconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```python
recovery_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleEvaluation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>

---


### CloudwatchomniAlertRuleTelemetryRuleList <a name="CloudwatchomniAlertRuleTelemetryRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertRuleTelemetryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>]

---


### CloudwatchomniAlertRuleTelemetryRuleNoDataList <a name="CloudwatchomniAlertRuleTelemetryRuleNoDataList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleNoData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>]

---


### CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput">treat_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">treat_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `treat_as_input`<sup>Optional</sup> <a name="treat_as_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput"></a>

```python
treat_as_input: str
```

- *Type:* str

---

##### `treat_as`<sup>Required</sup> <a name="treat_as" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```python
treat_as: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleNoData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>

---


### CloudwatchomniAlertRuleTelemetryRuleOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation">put_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData">put_no_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetEvaluation">reset_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetNoData">reset_no_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition"></a>

```python
def put_condition(
  value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleCondition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>]

---

##### `put_evaluation` <a name="put_evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation"></a>

```python
def put_evaluation(
  value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleEvaluation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>]

---

##### `put_no_data` <a name="put_no_data" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData"></a>

```python
def put_no_data(
  value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleNoData]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>]

---

##### `put_query` <a name="put_query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery"></a>

```python
def put_query(
  value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>]

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_evaluation` <a name="reset_evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetEvaluation"></a>

```python
def reset_evaluation() -> None
```

##### `reset_no_data` <a name="reset_no_data" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetNoData"></a>

```python
def reset_no_data() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList">CloudwatchomniAlertRuleTelemetryRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList">CloudwatchomniAlertRuleTelemetryRuleEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noData">no_data</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList">CloudwatchomniAlertRuleTelemetryRuleNoDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList">CloudwatchomniAlertRuleTelemetryRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.conditionInput">condition_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluationInput">evaluation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noDataInput">no_data_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.queryInput">query_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```python
condition: CloudwatchomniAlertRuleTelemetryRuleConditionList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList">CloudwatchomniAlertRuleTelemetryRuleConditionList</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```python
evaluation: CloudwatchomniAlertRuleTelemetryRuleEvaluationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList">CloudwatchomniAlertRuleTelemetryRuleEvaluationList</a>

---

##### `no_data`<sup>Required</sup> <a name="no_data" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```python
no_data: CloudwatchomniAlertRuleTelemetryRuleNoDataList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList">CloudwatchomniAlertRuleTelemetryRuleNoDataList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.query"></a>

```python
query: CloudwatchomniAlertRuleTelemetryRuleQueryList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList">CloudwatchomniAlertRuleTelemetryRuleQueryList</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.conditionInput"></a>

```python
condition_input: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleCondition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>]

---

##### `evaluation_input`<sup>Optional</sup> <a name="evaluation_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluationInput"></a>

```python
evaluation_input: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleEvaluation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>]

---

##### `no_data_input`<sup>Optional</sup> <a name="no_data_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noDataInput"></a>

```python
no_data_input: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleNoData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.queryInput"></a>

```python
query_input: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertRuleTelemetryRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>

---


### CloudwatchomniAlertRuleTelemetryRuleQueryList <a name="CloudwatchomniAlertRuleTelemetryRuleQueryList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchomniAlertRuleTelemetryRuleQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>]

---


### CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatchomni_alert

cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleQuery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>

---



