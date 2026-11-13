# `pinpointsmsvoicev2ProtectConfiguration` Submodule <a name="`pinpointsmsvoicev2ProtectConfiguration` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2ProtectConfiguration <a name="Pinpointsmsvoicev2ProtectConfiguration" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration aws_pinpointsmsvoicev2_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_protect_configuration

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_protection_enabled: bool | IResolvable = None,
  mms_country_rules: typing.Mapping[str] = None,
  rcs_country_rules: typing.Mapping[str] = None,
  region: str = None,
  sms_country_rules: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  voice_country_rules: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.mmsCountryRules">mms_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.rcsCountryRules">rcs_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.smsCountryRules">sms_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.voiceCountryRules">voice_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}.

---

##### `mms_country_rules`<sup>Optional</sup> <a name="mms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.mmsCountryRules"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}.

---

##### `rcs_country_rules`<sup>Optional</sup> <a name="rcs_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.rcsCountryRules"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#region Pinpointsmsvoicev2ProtectConfiguration#region}

---

##### `sms_country_rules`<sup>Optional</sup> <a name="sms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.smsCountryRules"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}.

---

##### `voice_country_rules`<sup>Optional</sup> <a name="voice_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.voiceCountryRules"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetMmsCountryRules">reset_mms_country_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRcsCountryRules">reset_rcs_country_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetSmsCountryRules">reset_sms_country_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetVoiceCountryRules">reset_voice_country_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_mms_country_rules` <a name="reset_mms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetMmsCountryRules"></a>

```python
def reset_mms_country_rules() -> None
```

##### `reset_rcs_country_rules` <a name="reset_rcs_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRcsCountryRules"></a>

```python
def reset_rcs_country_rules() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sms_country_rules` <a name="reset_sms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetSmsCountryRules"></a>

```python
def reset_sms_country_rules() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_voice_country_rules` <a name="reset_voice_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetVoiceCountryRules"></a>

```python
def reset_voice_country_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_protect_configuration

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_protect_configuration

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_protect_configuration

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_protect_configuration

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pinpointsmsvoicev2ProtectConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pinpointsmsvoicev2ProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2ProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.accountDefault">account_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRulesInput">mms_country_rules_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRulesInput">rcs_country_rules_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRulesInput">sms_country_rules_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRulesInput">voice_country_rules_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRules">mms_country_rules</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRules">rcs_country_rules</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRules">sms_country_rules</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRules">voice_country_rules</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_default`<sup>Required</sup> <a name="account_default" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.accountDefault"></a>

```python
account_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mms_country_rules_input`<sup>Optional</sup> <a name="mms_country_rules_input" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRulesInput"></a>

```python
mms_country_rules_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rcs_country_rules_input`<sup>Optional</sup> <a name="rcs_country_rules_input" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRulesInput"></a>

```python
rcs_country_rules_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sms_country_rules_input`<sup>Optional</sup> <a name="sms_country_rules_input" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRulesInput"></a>

```python
sms_country_rules_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `voice_country_rules_input`<sup>Optional</sup> <a name="voice_country_rules_input" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRulesInput"></a>

```python
voice_country_rules_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mms_country_rules`<sup>Required</sup> <a name="mms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRules"></a>

```python
mms_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rcs_country_rules`<sup>Required</sup> <a name="rcs_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRules"></a>

```python
rcs_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sms_country_rules`<sup>Required</sup> <a name="sms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRules"></a>

```python
sms_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `voice_country_rules`<sup>Required</sup> <a name="voice_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRules"></a>

```python
voice_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2ProtectConfigurationConfig <a name="Pinpointsmsvoicev2ProtectConfigurationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_protect_configuration

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_protection_enabled: bool | IResolvable = None,
  mms_country_rules: typing.Mapping[str] = None,
  rcs_country_rules: typing.Mapping[str] = None,
  region: str = None,
  sms_country_rules: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  voice_country_rules: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.mmsCountryRules">mms_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.rcsCountryRules">rcs_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.smsCountryRules">sms_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.voiceCountryRules">voice_country_rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}.

---

##### `mms_country_rules`<sup>Optional</sup> <a name="mms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.mmsCountryRules"></a>

```python
mms_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}.

---

##### `rcs_country_rules`<sup>Optional</sup> <a name="rcs_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.rcsCountryRules"></a>

```python
rcs_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#region Pinpointsmsvoicev2ProtectConfiguration#region}

---

##### `sms_country_rules`<sup>Optional</sup> <a name="sms_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.smsCountryRules"></a>

```python
sms_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}.

---

##### `voice_country_rules`<sup>Optional</sup> <a name="voice_country_rules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.voiceCountryRules"></a>

```python
voice_country_rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}.

---



