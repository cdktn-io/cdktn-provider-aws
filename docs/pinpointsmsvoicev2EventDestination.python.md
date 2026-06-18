# `pinpointsmsvoicev2EventDestination` Submodule <a name="`pinpointsmsvoicev2EventDestination` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2EventDestination <a name="Pinpointsmsvoicev2EventDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination aws_pinpointsmsvoicev2_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_set_name: str,
  event_destination_name: str,
  matching_event_types: typing.List[str],
  cloudwatch_logs_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination] = None,
  enabled: bool | IResolvable = None,
  kinesis_firehose_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination] = None,
  region: str = None,
  sns_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationSnsDestination] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Name of the configuration set this event destination belongs to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.eventDestinationName">event_destination_name</a></code> | <code>str</code> | Name of the event destination. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | Event types for which the destination receives records. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.cloudwatchLogsDestination">cloudwatch_logs_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]</code> | cloudwatch_logs_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the event destination is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]</code> | kinesis_firehose_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.snsDestination">sns_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]</code> | sns_destination block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.configurationSetName"></a>

- *Type:* str

Name of the configuration set this event destination belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#configuration_set_name Pinpointsmsvoicev2EventDestination#configuration_set_name}

---

##### `event_destination_name`<sup>Required</sup> <a name="event_destination_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.eventDestinationName"></a>

- *Type:* str

Name of the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#event_destination_name Pinpointsmsvoicev2EventDestination#event_destination_name}

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.matchingEventTypes"></a>

- *Type:* typing.List[str]

Event types for which the destination receives records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#matching_event_types Pinpointsmsvoicev2EventDestination#matching_event_types}

---

##### `cloudwatch_logs_destination`<sup>Optional</sup> <a name="cloudwatch_logs_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.cloudwatchLogsDestination"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]

cloudwatch_logs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#cloudwatch_logs_destination Pinpointsmsvoicev2EventDestination#cloudwatch_logs_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the event destination is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#enabled Pinpointsmsvoicev2EventDestination#enabled}

---

##### `kinesis_firehose_destination`<sup>Optional</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.kinesisFirehoseDestination"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]

kinesis_firehose_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#kinesis_firehose_destination Pinpointsmsvoicev2EventDestination#kinesis_firehose_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#region Pinpointsmsvoicev2EventDestination#region}

---

##### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.snsDestination"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#sns_destination Pinpointsmsvoicev2EventDestination#sns_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination">put_cloudwatch_logs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination">put_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination">put_sns_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetCloudwatchLogsDestination">reset_cloudwatch_logs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetKinesisFirehoseDestination">reset_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetSnsDestination">reset_sns_destination</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloudwatch_logs_destination` <a name="put_cloudwatch_logs_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination"></a>

```python
def put_cloudwatch_logs_destination(
  value: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]

---

##### `put_kinesis_firehose_destination` <a name="put_kinesis_firehose_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination"></a>

```python
def put_kinesis_firehose_destination(
  value: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]

---

##### `put_sns_destination` <a name="put_sns_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination"></a>

```python
def put_sns_destination(
  value: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationSnsDestination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]

---

##### `reset_cloudwatch_logs_destination` <a name="reset_cloudwatch_logs_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetCloudwatchLogsDestination"></a>

```python
def reset_cloudwatch_logs_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_kinesis_firehose_destination` <a name="reset_kinesis_firehose_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetKinesisFirehoseDestination"></a>

```python
def reset_kinesis_firehose_destination() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sns_destination` <a name="reset_sns_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetSnsDestination"></a>

```python
def reset_sns_destination() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2EventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2EventDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pinpointsmsvoicev2EventDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pinpointsmsvoicev2EventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2EventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestination">cloudwatch_logs_destination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetArn">configuration_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList">Pinpointsmsvoicev2EventDestinationSnsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestinationInput">cloudwatch_logs_destination_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationNameInput">event_destination_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestinationInput">kinesis_firehose_destination_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypesInput">matching_event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestinationInput">sns_destination_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationName">event_destination_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloudwatch_logs_destination`<sup>Required</sup> <a name="cloudwatch_logs_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestination"></a>

```python
cloudwatch_logs_destination: Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList</a>

---

##### `configuration_set_arn`<sup>Required</sup> <a name="configuration_set_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetArn"></a>

```python
configuration_set_arn: str
```

- *Type:* str

---

##### `kinesis_firehose_destination`<sup>Required</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList</a>

---

##### `sns_destination`<sup>Required</sup> <a name="sns_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestination"></a>

```python
sns_destination: Pinpointsmsvoicev2EventDestinationSnsDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList">Pinpointsmsvoicev2EventDestinationSnsDestinationList</a>

---

##### `cloudwatch_logs_destination_input`<sup>Optional</sup> <a name="cloudwatch_logs_destination_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestinationInput"></a>

```python
cloudwatch_logs_destination_input: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_destination_name_input`<sup>Optional</sup> <a name="event_destination_name_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationNameInput"></a>

```python
event_destination_name_input: str
```

- *Type:* str

---

##### `kinesis_firehose_destination_input`<sup>Optional</sup> <a name="kinesis_firehose_destination_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestinationInput"></a>

```python
kinesis_firehose_destination_input: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]

---

##### `matching_event_types_input`<sup>Optional</sup> <a name="matching_event_types_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypesInput"></a>

```python
matching_event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sns_destination_input`<sup>Optional</sup> <a name="sns_destination_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestinationInput"></a>

```python
sns_destination_input: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationSnsDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_destination_name`<sup>Required</sup> <a name="event_destination_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationName"></a>

```python
event_destination_name: str
```

- *Type:* str

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination(
  iam_role_arn: str,
  log_group_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | ARN of the IAM role that End User Messaging SMS assumes to write to the log group. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | ARN of the Amazon CloudWatch log group that receives the events. |

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

ARN of the IAM role that End User Messaging SMS assumes to write to the log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

ARN of the Amazon CloudWatch log group that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#log_group_arn Pinpointsmsvoicev2EventDestination#log_group_arn}

---

### Pinpointsmsvoicev2EventDestinationConfig <a name="Pinpointsmsvoicev2EventDestinationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_set_name: str,
  event_destination_name: str,
  matching_event_types: typing.List[str],
  cloudwatch_logs_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination] = None,
  enabled: bool | IResolvable = None,
  kinesis_firehose_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination] = None,
  region: str = None,
  sns_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationSnsDestination] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Name of the configuration set this event destination belongs to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.eventDestinationName">event_destination_name</a></code> | <code>str</code> | Name of the event destination. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | Event types for which the destination receives records. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.cloudwatchLogsDestination">cloudwatch_logs_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]</code> | cloudwatch_logs_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the event destination is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]</code> | kinesis_firehose_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.snsDestination">sns_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]</code> | sns_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

Name of the configuration set this event destination belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#configuration_set_name Pinpointsmsvoicev2EventDestination#configuration_set_name}

---

##### `event_destination_name`<sup>Required</sup> <a name="event_destination_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.eventDestinationName"></a>

```python
event_destination_name: str
```

- *Type:* str

Name of the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#event_destination_name Pinpointsmsvoicev2EventDestination#event_destination_name}

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

Event types for which the destination receives records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#matching_event_types Pinpointsmsvoicev2EventDestination#matching_event_types}

---

##### `cloudwatch_logs_destination`<sup>Optional</sup> <a name="cloudwatch_logs_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.cloudwatchLogsDestination"></a>

```python
cloudwatch_logs_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]

cloudwatch_logs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#cloudwatch_logs_destination Pinpointsmsvoicev2EventDestination#cloudwatch_logs_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the event destination is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#enabled Pinpointsmsvoicev2EventDestination#enabled}

---

##### `kinesis_firehose_destination`<sup>Optional</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]

kinesis_firehose_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#kinesis_firehose_destination Pinpointsmsvoicev2EventDestination#kinesis_firehose_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#region Pinpointsmsvoicev2EventDestination#region}

---

##### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.snsDestination"></a>

```python
sns_destination: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationSnsDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#sns_destination Pinpointsmsvoicev2EventDestination#sns_destination}

---

### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination(
  delivery_stream_arn: str,
  iam_role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | ARN of the Amazon Data Firehose delivery stream that receives the events. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream. |

---

##### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

ARN of the Amazon Data Firehose delivery stream that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#delivery_stream_arn Pinpointsmsvoicev2EventDestination#delivery_stream_arn}

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}

---

### Pinpointsmsvoicev2EventDestinationSnsDestination <a name="Pinpointsmsvoicev2EventDestinationSnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination(
  topic_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.property.topicArn">topic_arn</a></code> | <code>str</code> | ARN of the Amazon SNS topic that receives the events. |

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

ARN of the Amazon SNS topic that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/pinpointsmsvoicev2_event_destination#topic_arn Pinpointsmsvoicev2EventDestination#topic_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>]

---


### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>

---


### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>]

---


### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">delivery_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_arn_input`<sup>Optional</sup> <a name="delivery_stream_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```python
delivery_stream_arn_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>

---


### Pinpointsmsvoicev2EventDestinationSnsDestinationList <a name="Pinpointsmsvoicev2EventDestinationSnsDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Pinpointsmsvoicev2EventDestinationSnsDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>]

---


### Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pinpointsmsvoicev2_event_destination

pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Pinpointsmsvoicev2EventDestinationSnsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>

---



