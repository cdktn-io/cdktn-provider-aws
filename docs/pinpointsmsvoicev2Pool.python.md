# `pinpointsmsvoicev2Pool` Submodule <a name="`pinpointsmsvoicev2Pool` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Pool <a name="Pinpointsmsvoicev2Pool" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool aws_pinpointsmsvoicev2_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message_type: str,
  origination_identities: typing.List[str],
  deletion_protection_enabled: bool | IResolvable = None,
  iso_country_code: str = None,
  opt_out_list_name: str = None,
  region: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  shared_routes_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: Pinpointsmsvoicev2PoolTimeouts = None,
  two_way_channel_arn: str = None,
  two_way_channel_role: str = None,
  two_way_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.messageType">message_type</a></code> | <code>str</code> | Type of message. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.originationIdentities">origination_identities</a></code> | <code>typing.List[str]</code> | Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether deletion protection is enabled. When `true`, the pool cannot be deleted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.isoCountryCode">iso_country_code</a></code> | <code>str</code> | Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.optOutListName">opt_out_list_name</a></code> | <code>str</code> | Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the pool relies on self-managed opt-out handling. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.sharedRoutesEnabled">shared_routes_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | ARN of the two-way channel that receives inbound messages. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayEnabled">two_way_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether inbound message reception is enabled for the pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.messageType"></a>

- *Type:* str

Type of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}

---

##### `origination_identities`<sup>Required</sup> <a name="origination_identities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.originationIdentities"></a>

- *Type:* typing.List[str]

Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether deletion protection is enabled. When `true`, the pool cannot be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}

---

##### `iso_country_code`<sup>Optional</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.isoCountryCode"></a>

- *Type:* str

Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool.

This field is optional for origination identity types that are not country-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.optOutListName"></a>

- *Type:* str

Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the pool relies on self-managed opt-out handling.

When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}

---

##### `shared_routes_enabled`<sup>Optional</sup> <a name="shared_routes_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.sharedRoutesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether shared routes are enabled for the pool.

When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}

---

##### `two_way_channel_arn`<sup>Optional</sup> <a name="two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelArn"></a>

- *Type:* str

ARN of the two-way channel that receives inbound messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}

---

##### `two_way_channel_role`<sup>Optional</sup> <a name="two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelRole"></a>

- *Type:* str

ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}

---

##### `two_way_enabled`<sup>Optional</sup> <a name="two_way_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether inbound message reception is enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode">reset_iso_country_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName">reset_opt_out_list_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled">reset_self_managed_opt_outs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled">reset_shared_routes_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn">reset_two_way_channel_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole">reset_two_way_channel_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled">reset_two_way_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#create Pinpointsmsvoicev2Pool#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#delete Pinpointsmsvoicev2Pool#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#update Pinpointsmsvoicev2Pool#update}

---

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_iso_country_code` <a name="reset_iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode"></a>

```python
def reset_iso_country_code() -> None
```

##### `reset_opt_out_list_name` <a name="reset_opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName"></a>

```python
def reset_opt_out_list_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_self_managed_opt_outs_enabled` <a name="reset_self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled"></a>

```python
def reset_self_managed_opt_outs_enabled() -> None
```

##### `reset_shared_routes_enabled` <a name="reset_shared_routes_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled"></a>

```python
def reset_shared_routes_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_two_way_channel_arn` <a name="reset_two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn"></a>

```python
def reset_two_way_channel_arn() -> None
```

##### `reset_two_way_channel_role` <a name="reset_two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole"></a>

```python
def reset_two_way_channel_role() -> None
```

##### `reset_two_way_enabled` <a name="reset_two_way_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled"></a>

```python
def reset_two_way_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pinpointsmsvoicev2Pool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pinpointsmsvoicev2Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput">iso_country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput">message_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput">opt_out_list_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput">origination_identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput">self_managed_opt_outs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput">shared_routes_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput">two_way_channel_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput">two_way_channel_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput">two_way_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities">origination_identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled">shared_routes_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled">two_way_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts"></a>

```python
timeouts: Pinpointsmsvoicev2PoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iso_country_code_input`<sup>Optional</sup> <a name="iso_country_code_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput"></a>

```python
iso_country_code_input: str
```

- *Type:* str

---

##### `message_type_input`<sup>Optional</sup> <a name="message_type_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput"></a>

```python
message_type_input: str
```

- *Type:* str

---

##### `opt_out_list_name_input`<sup>Optional</sup> <a name="opt_out_list_name_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput"></a>

```python
opt_out_list_name_input: str
```

- *Type:* str

---

##### `origination_identities_input`<sup>Optional</sup> <a name="origination_identities_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput"></a>

```python
origination_identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled_input`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput"></a>

```python
self_managed_opt_outs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `shared_routes_enabled_input`<sup>Optional</sup> <a name="shared_routes_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput"></a>

```python
shared_routes_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | Pinpointsmsvoicev2PoolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `two_way_channel_arn_input`<sup>Optional</sup> <a name="two_way_channel_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput"></a>

```python
two_way_channel_arn_input: str
```

- *Type:* str

---

##### `two_way_channel_role_input`<sup>Optional</sup> <a name="two_way_channel_role_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput"></a>

```python
two_way_channel_role_input: str
```

- *Type:* str

---

##### `two_way_enabled_input`<sup>Optional</sup> <a name="two_way_enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput"></a>

```python
two_way_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `opt_out_list_name`<sup>Required</sup> <a name="opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

---

##### `origination_identities`<sup>Required</sup> <a name="origination_identities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities"></a>

```python
origination_identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled`<sup>Required</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `shared_routes_enabled`<sup>Required</sup> <a name="shared_routes_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled"></a>

```python
shared_routes_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `two_way_channel_arn`<sup>Required</sup> <a name="two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn"></a>

```python
two_way_channel_arn: str
```

- *Type:* str

---

##### `two_way_channel_role`<sup>Required</sup> <a name="two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole"></a>

```python
two_way_channel_role: str
```

- *Type:* str

---

##### `two_way_enabled`<sup>Required</sup> <a name="two_way_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled"></a>

```python
two_way_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PoolConfig <a name="Pinpointsmsvoicev2PoolConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message_type: str,
  origination_identities: typing.List[str],
  deletion_protection_enabled: bool | IResolvable = None,
  iso_country_code: str = None,
  opt_out_list_name: str = None,
  region: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  shared_routes_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: Pinpointsmsvoicev2PoolTimeouts = None,
  two_way_channel_arn: str = None,
  two_way_channel_role: str = None,
  two_way_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType">message_type</a></code> | <code>str</code> | Type of message. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities">origination_identities</a></code> | <code>typing.List[str]</code> | Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether deletion protection is enabled. When `true`, the pool cannot be deleted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the pool relies on self-managed opt-out handling. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled">shared_routes_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | ARN of the two-way channel that receives inbound messages. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled">two_way_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether inbound message reception is enabled for the pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

Type of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}

---

##### `origination_identities`<sup>Required</sup> <a name="origination_identities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities"></a>

```python
origination_identities: typing.List[str]
```

- *Type:* typing.List[str]

Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether deletion protection is enabled. When `true`, the pool cannot be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}

---

##### `iso_country_code`<sup>Optional</sup> <a name="iso_country_code" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool.

This field is optional for origination identity types that are not country-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the pool relies on self-managed opt-out handling.

When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}

---

##### `shared_routes_enabled`<sup>Optional</sup> <a name="shared_routes_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled"></a>

```python
shared_routes_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether shared routes are enabled for the pool.

When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts"></a>

```python
timeouts: Pinpointsmsvoicev2PoolTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}

---

##### `two_way_channel_arn`<sup>Optional</sup> <a name="two_way_channel_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn"></a>

```python
two_way_channel_arn: str
```

- *Type:* str

ARN of the two-way channel that receives inbound messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}

---

##### `two_way_channel_role`<sup>Optional</sup> <a name="two_way_channel_role" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole"></a>

```python
two_way_channel_role: str
```

- *Type:* str

ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}

---

##### `two_way_enabled`<sup>Optional</sup> <a name="two_way_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled"></a>

```python
two_way_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether inbound message reception is enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}

---

### Pinpointsmsvoicev2PoolTimeouts <a name="Pinpointsmsvoicev2PoolTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#create Pinpointsmsvoicev2Pool#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#delete Pinpointsmsvoicev2Pool#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#update Pinpointsmsvoicev2Pool#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PoolTimeoutsOutputReference <a name="Pinpointsmsvoicev2PoolTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_pool

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Pinpointsmsvoicev2PoolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---



