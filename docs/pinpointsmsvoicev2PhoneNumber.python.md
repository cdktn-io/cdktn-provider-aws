# `pinpointsmsvoicev2PhoneNumber` Submodule <a name="`pinpointsmsvoicev2PhoneNumber` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2PhoneNumber <a name="Pinpointsmsvoicev2PhoneNumber" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber(
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
  message_type: str,
  number_capabilities: typing.List[str],
  number_type: str,
  deletion_protection_enabled: bool | IResolvable = None,
  opt_out_list_name: str = None,
  region: str = None,
  registration_id: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: Pinpointsmsvoicev2PhoneNumberTimeouts = None,
  two_way_channel_arn: str = None,
  two_way_channel_enabled: bool | IResolvable = None,
  two_way_channel_role: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.isoCountryCode">iso_country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.messageType">message_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.numberCapabilities">number_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.numberType">number_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.optOutListName">opt_out_list_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.registrationId">registration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.twoWayChannelEnabled">two_way_channel_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_role Pinpointsmsvoicev2PhoneNumber#two_way_channel_role}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.isoCountryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}.

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.messageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}.

---

##### `number_capabilities`<sup>Required</sup> <a name="number_capabilities" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.numberCapabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}.

---

##### `number_type`<sup>Required</sup> <a name="number_type" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.numberType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}.

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}.

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.optOutListName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#region Pinpointsmsvoicev2PhoneNumber#region}

---

##### `registration_id`<sup>Optional</sup> <a name="registration_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.registrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}.

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#timeouts Pinpointsmsvoicev2PhoneNumber#timeouts}

---

##### `two_way_channel_arn`<sup>Optional</sup> <a name="two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.twoWayChannelArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}.

---

##### `two_way_channel_enabled`<sup>Optional</sup> <a name="two_way_channel_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.twoWayChannelEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}.

---

##### `two_way_channel_role`<sup>Optional</sup> <a name="two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.Initializer.parameter.twoWayChannelRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_role Pinpointsmsvoicev2PhoneNumber#two_way_channel_role}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOptOutListName">reset_opt_out_list_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegistrationId">reset_registration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetSelfManagedOptOutsEnabled">reset_self_managed_opt_outs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelArn">reset_two_way_channel_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelEnabled">reset_two_way_channel_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelRole">reset_two_way_channel_role</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#create Pinpointsmsvoicev2PhoneNumber#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#delete Pinpointsmsvoicev2PhoneNumber#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#update Pinpointsmsvoicev2PhoneNumber#update}

---

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_opt_out_list_name` <a name="reset_opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetOptOutListName"></a>

```python
def reset_opt_out_list_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_registration_id` <a name="reset_registration_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetRegistrationId"></a>

```python
def reset_registration_id() -> None
```

##### `reset_self_managed_opt_outs_enabled` <a name="reset_self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetSelfManagedOptOutsEnabled"></a>

```python
def reset_self_managed_opt_outs_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_two_way_channel_arn` <a name="reset_two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelArn"></a>

```python
def reset_two_way_channel_arn() -> None
```

##### `reset_two_way_channel_enabled` <a name="reset_two_way_channel_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelEnabled"></a>

```python
def reset_two_way_channel_enabled() -> None
```

##### `reset_two_way_channel_role` <a name="reset_two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.resetTwoWayChannelRole"></a>

```python
def reset_two_way_channel_role() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pinpointsmsvoicev2PhoneNumber to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pinpointsmsvoicev2PhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2PhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.monthlyLeasingPrice">monthly_leasing_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference">Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCodeInput">iso_country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageTypeInput">message_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilitiesInput">number_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberTypeInput">number_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListNameInput">opt_out_list_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationIdInput">registration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabledInput">self_managed_opt_outs_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArnInput">two_way_channel_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabledInput">two_way_channel_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelRoleInput">two_way_channel_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilities">number_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberType">number_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationId">registration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabled">two_way_channel_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monthly_leasing_price`<sup>Required</sup> <a name="monthly_leasing_price" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.monthlyLeasingPrice"></a>

```python
monthly_leasing_price: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeouts"></a>

```python
timeouts: Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference">Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `iso_country_code_input`<sup>Optional</sup> <a name="iso_country_code_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCodeInput"></a>

```python
iso_country_code_input: str
```

- *Type:* str

---

##### `message_type_input`<sup>Optional</sup> <a name="message_type_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageTypeInput"></a>

```python
message_type_input: str
```

- *Type:* str

---

##### `number_capabilities_input`<sup>Optional</sup> <a name="number_capabilities_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilitiesInput"></a>

```python
number_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number_type_input`<sup>Optional</sup> <a name="number_type_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberTypeInput"></a>

```python
number_type_input: str
```

- *Type:* str

---

##### `opt_out_list_name_input`<sup>Optional</sup> <a name="opt_out_list_name_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListNameInput"></a>

```python
opt_out_list_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `registration_id_input`<sup>Optional</sup> <a name="registration_id_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationIdInput"></a>

```python
registration_id_input: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled_input`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabledInput"></a>

```python
self_managed_opt_outs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | Pinpointsmsvoicev2PhoneNumberTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

---

##### `two_way_channel_arn_input`<sup>Optional</sup> <a name="two_way_channel_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArnInput"></a>

```python
two_way_channel_arn_input: str
```

- *Type:* str

---

##### `two_way_channel_enabled_input`<sup>Optional</sup> <a name="two_way_channel_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabledInput"></a>

```python
two_way_channel_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `two_way_channel_role_input`<sup>Optional</sup> <a name="two_way_channel_role_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelRoleInput"></a>

```python
two_way_channel_role_input: str
```

- *Type:* str

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `number_capabilities`<sup>Required</sup> <a name="number_capabilities" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberCapabilities"></a>

```python
number_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number_type`<sup>Required</sup> <a name="number_type" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.numberType"></a>

```python
number_type: str
```

- *Type:* str

---

##### `opt_out_list_name`<sup>Required</sup> <a name="opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `registration_id`<sup>Required</sup> <a name="registration_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.registrationId"></a>

```python
registration_id: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled`<sup>Required</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `two_way_channel_arn`<sup>Required</sup> <a name="two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelArn"></a>

```python
two_way_channel_arn: str
```

- *Type:* str

---

##### `two_way_channel_enabled`<sup>Required</sup> <a name="two_way_channel_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelEnabled"></a>

```python
two_way_channel_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `two_way_channel_role`<sup>Required</sup> <a name="two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.twoWayChannelRole"></a>

```python
two_way_channel_role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumber.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PhoneNumberConfig <a name="Pinpointsmsvoicev2PhoneNumberConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iso_country_code: str,
  message_type: str,
  number_capabilities: typing.List[str],
  number_type: str,
  deletion_protection_enabled: bool | IResolvable = None,
  opt_out_list_name: str = None,
  region: str = None,
  registration_id: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: Pinpointsmsvoicev2PhoneNumberTimeouts = None,
  two_way_channel_arn: str = None,
  two_way_channel_enabled: bool | IResolvable = None,
  two_way_channel_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.messageType">message_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberCapabilities">number_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberType">number_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.registrationId">registration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelEnabled">two_way_channel_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_role Pinpointsmsvoicev2PhoneNumber#two_way_channel_role}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}.

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}.

---

##### `number_capabilities`<sup>Required</sup> <a name="number_capabilities" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberCapabilities"></a>

```python
number_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}.

---

##### `number_type`<sup>Required</sup> <a name="number_type" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.numberType"></a>

```python
number_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}.

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}.

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#region Pinpointsmsvoicev2PhoneNumber#region}

---

##### `registration_id`<sup>Optional</sup> <a name="registration_id" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.registrationId"></a>

```python
registration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}.

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.timeouts"></a>

```python
timeouts: Pinpointsmsvoicev2PhoneNumberTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#timeouts Pinpointsmsvoicev2PhoneNumber#timeouts}

---

##### `two_way_channel_arn`<sup>Optional</sup> <a name="two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelArn"></a>

```python
two_way_channel_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}.

---

##### `two_way_channel_enabled`<sup>Optional</sup> <a name="two_way_channel_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelEnabled"></a>

```python
two_way_channel_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}.

---

##### `two_way_channel_role`<sup>Optional</sup> <a name="two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberConfig.property.twoWayChannelRole"></a>

```python
two_way_channel_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_role Pinpointsmsvoicev2PhoneNumber#two_way_channel_role}.

---

### Pinpointsmsvoicev2PhoneNumberTimeouts <a name="Pinpointsmsvoicev2PhoneNumberTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#create Pinpointsmsvoicev2PhoneNumber#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#delete Pinpointsmsvoicev2PhoneNumber#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpointsmsvoicev2_phone_number#update Pinpointsmsvoicev2PhoneNumber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference <a name="Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_phone_number

pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Pinpointsmsvoicev2PhoneNumberTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2PhoneNumber.Pinpointsmsvoicev2PhoneNumberTimeouts">Pinpointsmsvoicev2PhoneNumberTimeouts</a>

---



