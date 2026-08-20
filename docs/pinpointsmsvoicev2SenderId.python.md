# `pinpointsmsvoicev2SenderId` Submodule <a name="`pinpointsmsvoicev2SenderId` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2SenderId <a name="Pinpointsmsvoicev2SenderId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id aws_pinpointsmsvoicev2_sender_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iso_country_code: str,
  sender_id: str,
  deletion_protection_enabled: bool | IResolvable = None,
  message_types: typing.List[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Pinpointsmsvoicev2SenderIdTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.isoCountryCode">iso_country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.senderId">sender_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.isoCountryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}.

---

##### `sender_id`<sup>Required</sup> <a name="sender_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.senderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}.

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}.

---

##### `message_types`<sup>Optional</sup> <a name="message_types" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.messageTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#region Pinpointsmsvoicev2SenderId#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#timeouts Pinpointsmsvoicev2SenderId#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetMessageTypes">reset_message_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#create Pinpointsmsvoicev2SenderId#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#delete Pinpointsmsvoicev2SenderId#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#update Pinpointsmsvoicev2SenderId#update}

---

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_message_types` <a name="reset_message_types" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetMessageTypes"></a>

```python
def reset_message_types() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2SenderId resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2SenderId resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pinpointsmsvoicev2SenderId to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pinpointsmsvoicev2SenderId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2SenderId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.monthlyLeasingPrice">monthly_leasing_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registered">registered</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registrationId">registration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference">Pinpointsmsvoicev2SenderIdTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCodeInput">iso_country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypesInput">message_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderIdInput">sender_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderId">sender_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `monthly_leasing_price`<sup>Required</sup> <a name="monthly_leasing_price" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.monthlyLeasingPrice"></a>

```python
monthly_leasing_price: str
```

- *Type:* str

---

##### `registered`<sup>Required</sup> <a name="registered" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registered"></a>

```python
registered: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `registration_id`<sup>Required</sup> <a name="registration_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registrationId"></a>

```python
registration_id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeouts"></a>

```python
timeouts: Pinpointsmsvoicev2SenderIdTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference">Pinpointsmsvoicev2SenderIdTimeoutsOutputReference</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iso_country_code_input`<sup>Optional</sup> <a name="iso_country_code_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCodeInput"></a>

```python
iso_country_code_input: str
```

- *Type:* str

---

##### `message_types_input`<sup>Optional</sup> <a name="message_types_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypesInput"></a>

```python
message_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sender_id_input`<sup>Optional</sup> <a name="sender_id_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderIdInput"></a>

```python
sender_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | Pinpointsmsvoicev2SenderIdTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

---

##### `message_types`<sup>Required</sup> <a name="message_types" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypes"></a>

```python
message_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sender_id`<sup>Required</sup> <a name="sender_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderId"></a>

```python
sender_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2SenderIdConfig <a name="Pinpointsmsvoicev2SenderIdConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iso_country_code: str,
  sender_id: str,
  deletion_protection_enabled: bool | IResolvable = None,
  message_types: typing.List[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Pinpointsmsvoicev2SenderIdTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.senderId">sender_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}.

---

##### `sender_id`<sup>Required</sup> <a name="sender_id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.senderId"></a>

```python
sender_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}.

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}.

---

##### `message_types`<sup>Optional</sup> <a name="message_types" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.messageTypes"></a>

```python
message_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#region Pinpointsmsvoicev2SenderId#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.timeouts"></a>

```python
timeouts: Pinpointsmsvoicev2SenderIdTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#timeouts Pinpointsmsvoicev2SenderId#timeouts}

---

### Pinpointsmsvoicev2SenderIdTimeouts <a name="Pinpointsmsvoicev2SenderIdTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#create Pinpointsmsvoicev2SenderId#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#delete Pinpointsmsvoicev2SenderId#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#update Pinpointsmsvoicev2SenderId#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2SenderIdTimeoutsOutputReference <a name="Pinpointsmsvoicev2SenderIdTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_sender_id

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Pinpointsmsvoicev2SenderIdTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---



