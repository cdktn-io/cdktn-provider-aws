# `mskChannel` Submodule <a name="`mskChannel` Submodule" id="@cdktn/provider-aws.mskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskChannel <a name="MskChannel" id="@cdktn/provider-aws.mskChannel.MskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel aws_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  cluster_arn: str,
  encryption_configuration: IResolvable | typing.List[MskChannelEncryptionConfiguration] = None,
  iceberg_destination: IResolvable | typing.List[MskChannelIcebergDestination] = None,
  logging_info: IResolvable | typing.List[MskChannelLoggingInfo] = None,
  region: str = None,
  s3_destination: IResolvable | typing.List[MskChannelS3Destination] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MskChannelTimeouts = None,
  topic_configuration: IResolvable | typing.List[MskChannelTopicConfiguration] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.clusterArn">cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]</code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.icebergDestination">iceberg_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]</code> | iceberg_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.loggingInfo">logging_info</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]</code> | logging_info block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.s3Destination">s3_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]</code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.topicConfiguration">topic_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]</code> | topic_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.channelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}.

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.clusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `iceberg_destination`<sup>Optional</sup> <a name="iceberg_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.icebergDestination"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]

iceberg_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#iceberg_destination MskChannel#iceberg_destination}

---

##### `logging_info`<sup>Optional</sup> <a name="logging_info" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.loggingInfo"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]

logging_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#region MskChannel#region}

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.s3Destination"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3_destination MskChannel#s3_destination}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#timeouts MskChannel#timeouts}

---

##### `topic_configuration`<sup>Optional</sup> <a name="topic_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.topicConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]

topic_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_configuration MskChannel#topic_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination">put_iceberg_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo">put_logging_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration">put_topic_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination">reset_iceberg_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo">reset_logging_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination">reset_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration">reset_topic_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mskChannel.MskChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mskChannel.MskChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.mskChannel.MskChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  value: IResolvable | typing.List[MskChannelEncryptionConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]

---

##### `put_iceberg_destination` <a name="put_iceberg_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination"></a>

```python
def put_iceberg_destination(
  value: IResolvable | typing.List[MskChannelIcebergDestination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]

---

##### `put_logging_info` <a name="put_logging_info" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo"></a>

```python
def put_logging_info(
  value: IResolvable | typing.List[MskChannelLoggingInfo]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]

---

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination"></a>

```python
def put_s3_destination(
  value: IResolvable | typing.List[MskChannelS3Destination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#create MskChannel#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delete MskChannel#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#update MskChannel#update}

---

##### `put_topic_configuration` <a name="put_topic_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration"></a>

```python
def put_topic_configuration(
  value: IResolvable | typing.List[MskChannelTopicConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]

---

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_iceberg_destination` <a name="reset_iceberg_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination"></a>

```python
def reset_iceberg_destination() -> None
```

##### `reset_logging_info` <a name="reset_logging_info" id="@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo"></a>

```python
def reset_logging_info() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.mskChannel.MskChannel.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_topic_configuration` <a name="reset_topic_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration"></a>

```python
def reset_topic_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MskChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination">iceberg_destination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration">topic_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput">iceberg_destination_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput">logging_info_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput">s3_destination_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput">topic_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mskChannel.MskChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskChannel.MskChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskChannel.MskChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mskChannel.MskChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration"></a>

```python
encryption_configuration: MskChannelEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a>

---

##### `iceberg_destination`<sup>Required</sup> <a name="iceberg_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination"></a>

```python
iceberg_destination: MskChannelIcebergDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a>

---

##### `logging_info`<sup>Required</sup> <a name="logging_info" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo"></a>

```python
logging_info: MskChannelLoggingInfoList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a>

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination"></a>

```python
s3_destination: MskChannelS3DestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts"></a>

```python
timeouts: MskChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a>

---

##### `topic_configuration`<sup>Required</sup> <a name="topic_configuration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration"></a>

```python
topic_configuration: MskChannelTopicConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a>

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | typing.List[MskChannelEncryptionConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]

---

##### `iceberg_destination_input`<sup>Optional</sup> <a name="iceberg_destination_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput"></a>

```python
iceberg_destination_input: IResolvable | typing.List[MskChannelIcebergDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]

---

##### `logging_info_input`<sup>Optional</sup> <a name="logging_info_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput"></a>

```python
logging_info_input: IResolvable | typing.List[MskChannelLoggingInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput"></a>

```python
s3_destination_input: IResolvable | typing.List[MskChannelS3Destination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MskChannelTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---

##### `topic_configuration_input`<sup>Optional</sup> <a name="topic_configuration_input" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput"></a>

```python
topic_configuration_input: IResolvable | typing.List[MskChannelTopicConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mskChannel.MskChannel.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MskChannelConfig <a name="MskChannelConfig" id="@cdktn/provider-aws.mskChannel.MskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  cluster_arn: str,
  encryption_configuration: IResolvable | typing.List[MskChannelEncryptionConfiguration] = None,
  iceberg_destination: IResolvable | typing.List[MskChannelIcebergDestination] = None,
  logging_info: IResolvable | typing.List[MskChannelLoggingInfo] = None,
  region: str = None,
  s3_destination: IResolvable | typing.List[MskChannelS3Destination] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MskChannelTimeouts = None,
  topic_configuration: IResolvable | typing.List[MskChannelTopicConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]</code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination">iceberg_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]</code> | iceberg_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo">logging_info</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]</code> | logging_info block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination">s3_destination</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]</code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration">topic_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]</code> | topic_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}.

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: IResolvable | typing.List[MskChannelEncryptionConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `iceberg_destination`<sup>Optional</sup> <a name="iceberg_destination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination"></a>

```python
iceberg_destination: IResolvable | typing.List[MskChannelIcebergDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]

iceberg_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#iceberg_destination MskChannel#iceberg_destination}

---

##### `logging_info`<sup>Optional</sup> <a name="logging_info" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo"></a>

```python
logging_info: IResolvable | typing.List[MskChannelLoggingInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]

logging_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#region MskChannel#region}

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination"></a>

```python
s3_destination: IResolvable | typing.List[MskChannelS3Destination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3_destination MskChannel#s3_destination}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts"></a>

```python
timeouts: MskChannelTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#timeouts MskChannel#timeouts}

---

##### `topic_configuration`<sup>Optional</sup> <a name="topic_configuration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration"></a>

```python
topic_configuration: IResolvable | typing.List[MskChannelTopicConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]

topic_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_configuration MskChannel#topic_configuration}

---

### MskChannelEncryptionConfiguration <a name="MskChannelEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelEncryptionConfiguration(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}.

---

### MskChannelIcebergDestination <a name="MskChannelIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestination(
  append_only: bool | IResolvable,
  service_execution_role_arn: str,
  catalog: IResolvable | typing.List[MskChannelIcebergDestinationCatalog] = None,
  compression_type: str = None,
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3: IResolvable | typing.List[MskChannelIcebergDestinationDeadLetterQueueS3] = None,
  destination_table: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTable] = None,
  schema_evolution: IResolvable | typing.List[MskChannelIcebergDestinationSchemaEvolution] = None,
  table_creation: IResolvable | typing.List[MskChannelIcebergDestinationTableCreation] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly">append_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog">catalog</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>]</code> | catalog block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType">compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>]</code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable">destination_table</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>]</code> | destination_table block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution">schema_evolution</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>]</code> | schema_evolution block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation">table_creation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>]</code> | table_creation block. |

---

##### `append_only`<sup>Required</sup> <a name="append_only" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly"></a>

```python
append_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}.

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog"></a>

```python
catalog: IResolvable | typing.List[MskChannelIcebergDestinationCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>]

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `dead_letter_queue_s3`<sup>Optional</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: IResolvable | typing.List[MskChannelIcebergDestinationDeadLetterQueueS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>]

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable"></a>

```python
destination_table: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTable]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>]

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table MskChannel#destination_table}

---

##### `schema_evolution`<sup>Optional</sup> <a name="schema_evolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution"></a>

```python
schema_evolution: IResolvable | typing.List[MskChannelIcebergDestinationSchemaEvolution]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>]

schema_evolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

##### `table_creation`<sup>Optional</sup> <a name="table_creation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation"></a>

```python
table_creation: IResolvable | typing.List[MskChannelIcebergDestinationTableCreation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>]

table_creation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

### MskChannelIcebergDestinationCatalog <a name="MskChannelIcebergDestinationCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationCatalog(
  catalog_arn: str = None,
  warehouse_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn">catalog_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation">warehouse_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}. |

---

##### `catalog_arn`<sup>Optional</sup> <a name="catalog_arn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}.

---

##### `warehouse_location`<sup>Optional</sup> <a name="warehouse_location" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation"></a>

```python
warehouse_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}.

---

### MskChannelIcebergDestinationDeadLetterQueueS3 <a name="MskChannelIcebergDestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3(
  bucket_arn: str,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn">bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelIcebergDestinationDestinationTable <a name="MskChannelIcebergDestinationDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTable(
  destination_database_name: str = None,
  destination_table_name: str = None,
  partition_spec: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpec] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName">destination_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName">destination_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec">partition_spec</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>]</code> | partition_spec block. |

---

##### `destination_database_name`<sup>Optional</sup> <a name="destination_database_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName"></a>

```python
destination_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}.

---

##### `destination_table_name`<sup>Optional</sup> <a name="destination_table_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName"></a>

```python
destination_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}.

---

##### `partition_spec`<sup>Optional</sup> <a name="partition_spec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec"></a>

```python
partition_spec: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>]

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpec <a name="MskChannelIcebergDestinationDestinationTablePartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec(
  partition_strategy: str,
  source: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpecSource] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy">partition_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source">source</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>]</code> | source block. |

---

##### `partition_strategy`<sup>Required</sup> <a name="partition_strategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy"></a>

```python
partition_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source"></a>

```python
source: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpecSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source MskChannel#source}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpecSource <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource(
  source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}. |

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}.

---

### MskChannelIcebergDestinationSchemaEvolution <a name="MskChannelIcebergDestinationSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationSchemaEvolution(
  enable_schema_evolution: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution">enable_schema_evolution</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}. |

---

##### `enable_schema_evolution`<sup>Optional</sup> <a name="enable_schema_evolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution"></a>

```python
enable_schema_evolution: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}.

---

### MskChannelIcebergDestinationTableCreation <a name="MskChannelIcebergDestinationTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationTableCreation(
  enable_table_creation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation">enable_table_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}. |

---

##### `enable_table_creation`<sup>Optional</sup> <a name="enable_table_creation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation"></a>

```python
enable_table_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}.

---

### MskChannelLoggingInfo <a name="MskChannelLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfo(
  cloudwatch_logs: IResolvable | typing.List[MskChannelLoggingInfoCloudwatchLogs] = None,
  firehose: IResolvable | typing.List[MskChannelLoggingInfoFirehose] = None,
  s3: IResolvable | typing.List[MskChannelLoggingInfoS3] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>]</code> | cloudwatch_logs block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose">firehose</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>]</code> | firehose block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3">s3</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>]</code> | s3 block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: IResolvable | typing.List[MskChannelLoggingInfoCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose"></a>

```python
firehose: IResolvable | typing.List[MskChannelLoggingInfoFirehose]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>]

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3"></a>

```python
s3: IResolvable | typing.List[MskChannelLoggingInfoS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

### MskChannelLoggingInfoCloudwatchLogs <a name="MskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoCloudwatchLogs(
  enabled: bool | IResolvable,
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}.

---

### MskChannelLoggingInfoFirehose <a name="MskChannelLoggingInfoFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoFirehose(
  enabled: bool | IResolvable,
  delivery_stream: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}.

---

### MskChannelLoggingInfoS3 <a name="MskChannelLoggingInfoS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoS3(
  enabled: bool | IResolvable,
  bucket: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}.

---

### MskChannelS3Destination <a name="MskChannelS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3Destination(
  service_execution_role_arn: str,
  data_freshness_in_seconds: typing.Union[int, float] = None,
  dead_letter_queue_s3: IResolvable | typing.List[MskChannelS3DestinationDeadLetterQueueS3] = None,
  storage: IResolvable | typing.List[MskChannelS3DestinationStorage] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>]</code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage">storage</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>]</code> | storage block. |

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `data_freshness_in_seconds`<sup>Optional</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `dead_letter_queue_s3`<sup>Optional</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: IResolvable | typing.List[MskChannelS3DestinationDeadLetterQueueS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>]

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage"></a>

```python
storage: IResolvable | typing.List[MskChannelS3DestinationStorage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage MskChannel#storage}

---

### MskChannelS3DestinationDeadLetterQueueS3 <a name="MskChannelS3DestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationDeadLetterQueueS3(
  bucket_arn: str,
  error_output_prefix: str = None,
  expected_bucket_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn">bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `error_output_prefix`<sup>Optional</sup> <a name="error_output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelS3DestinationStorage <a name="MskChannelS3DestinationStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationStorage(
  bucket_arn: str,
  compression_type: str,
  storage_class: str,
  expected_bucket_owner: str = None,
  output_key_template: str = None,
  output_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn">bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType">compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate">output_key_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix">output_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}. |

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

##### `output_key_template`<sup>Optional</sup> <a name="output_key_template" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate"></a>

```python
output_key_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}.

---

##### `output_prefix`<sup>Optional</sup> <a name="output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix"></a>

```python
output_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}.

---

### MskChannelTimeouts <a name="MskChannelTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#create MskChannel#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delete MskChannel#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#update MskChannel#update}

---

### MskChannelTopicConfiguration <a name="MskChannelTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfiguration(
  topic_arn: str,
  record_converter: IResolvable | typing.List[MskChannelTopicConfigurationRecordConverter] = None,
  record_schema: IResolvable | typing.List[MskChannelTopicConfigurationRecordSchema] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter">record_converter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>]</code> | record_converter block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema">record_schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>]</code> | record_schema block. |

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}.

---

##### `record_converter`<sup>Optional</sup> <a name="record_converter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter"></a>

```python
record_converter: IResolvable | typing.List[MskChannelTopicConfigurationRecordConverter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>]

record_converter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}

---

##### `record_schema`<sup>Optional</sup> <a name="record_schema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema"></a>

```python
record_schema: IResolvable | typing.List[MskChannelTopicConfigurationRecordSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>]

record_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}

---

### MskChannelTopicConfigurationRecordConverter <a name="MskChannelTopicConfigurationRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationRecordConverter(
  value_converter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter">value_converter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}. |

---

##### `value_converter`<sup>Required</sup> <a name="value_converter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter"></a>

```python
value_converter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}.

---

### MskChannelTopicConfigurationRecordSchema <a name="MskChannelTopicConfigurationRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationRecordSchema(
  gsr_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn">gsr_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}. |

---

##### `gsr_arn`<sup>Required</sup> <a name="gsr_arn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn"></a>

```python
gsr_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskChannelEncryptionConfigurationList <a name="MskChannelEncryptionConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelEncryptionConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>]

---


### MskChannelEncryptionConfigurationOutputReference <a name="MskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---


### MskChannelIcebergDestinationCatalogList <a name="MskChannelIcebergDestinationCatalogList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>]

---


### MskChannelIcebergDestinationCatalogOutputReference <a name="MskChannelIcebergDestinationCatalogOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn">reset_catalog_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation">reset_warehouse_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_arn` <a name="reset_catalog_arn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn"></a>

```python
def reset_catalog_arn() -> None
```

##### `reset_warehouse_location` <a name="reset_warehouse_location" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation"></a>

```python
def reset_warehouse_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput">catalog_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput">warehouse_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn">catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation">warehouse_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_arn_input`<sup>Optional</sup> <a name="catalog_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput"></a>

```python
catalog_arn_input: str
```

- *Type:* str

---

##### `warehouse_location_input`<sup>Optional</sup> <a name="warehouse_location_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput"></a>

```python
warehouse_location_input: str
```

- *Type:* str

---

##### `catalog_arn`<sup>Required</sup> <a name="catalog_arn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

---

##### `warehouse_location`<sup>Required</sup> <a name="warehouse_location" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation"></a>

```python
warehouse_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationCatalog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>

---


### MskChannelIcebergDestinationDeadLetterQueueS3List <a name="MskChannelIcebergDestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationDeadLetterQueueS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationDeadLetterQueueS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>]

---


### MskChannelIcebergDestinationDeadLetterQueueS3OutputReference <a name="MskChannelIcebergDestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">reset_error_output_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_output_prefix` <a name="reset_error_output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```python
def reset_error_output_prefix() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">error_output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `error_output_prefix_input`<sup>Optional</sup> <a name="error_output_prefix_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```python
error_output_prefix_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationDeadLetterQueueS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>

---


### MskChannelIcebergDestinationDestinationTableList <a name="MskChannelIcebergDestinationDestinationTableList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationDestinationTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTable]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>]

---


### MskChannelIcebergDestinationDestinationTableOutputReference <a name="MskChannelIcebergDestinationDestinationTableOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec">put_partition_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName">reset_destination_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName">reset_destination_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec">reset_partition_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition_spec` <a name="put_partition_spec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec"></a>

```python
def put_partition_spec(
  value: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpec]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>]

---

##### `reset_destination_database_name` <a name="reset_destination_database_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName"></a>

```python
def reset_destination_database_name() -> None
```

##### `reset_destination_table_name` <a name="reset_destination_table_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName"></a>

```python
def reset_destination_table_name() -> None
```

##### `reset_partition_spec` <a name="reset_partition_spec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec"></a>

```python
def reset_partition_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput">destination_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput">destination_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput">partition_spec_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName">destination_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName">destination_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec"></a>

```python
partition_spec: MskChannelIcebergDestinationDestinationTablePartitionSpecList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a>

---

##### `destination_database_name_input`<sup>Optional</sup> <a name="destination_database_name_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput"></a>

```python
destination_database_name_input: str
```

- *Type:* str

---

##### `destination_table_name_input`<sup>Optional</sup> <a name="destination_table_name_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput"></a>

```python
destination_table_name_input: str
```

- *Type:* str

---

##### `partition_spec_input`<sup>Optional</sup> <a name="partition_spec_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput"></a>

```python
partition_spec_input: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>]

---

##### `destination_database_name`<sup>Required</sup> <a name="destination_database_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName"></a>

```python
destination_database_name: str
```

- *Type:* str

---

##### `destination_table_name`<sup>Required</sup> <a name="destination_table_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName"></a>

```python
destination_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationDestinationTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>]

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source` <a name="put_source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource"></a>

```python
def put_source(
  value: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpecSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>]

---

##### `reset_source` <a name="reset_source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput">partition_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy">partition_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source"></a>

```python
source: MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a>

---

##### `partition_strategy_input`<sup>Optional</sup> <a name="partition_strategy_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput"></a>

```python
partition_strategy_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput"></a>

```python
source_input: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpecSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>]

---

##### `partition_strategy`<sup>Required</sup> <a name="partition_strategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy"></a>

```python
partition_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationDestinationTablePartitionSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTablePartitionSpecSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>]

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName">reset_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_name` <a name="reset_source_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName"></a>

```python
def reset_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationDestinationTablePartitionSpecSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>

---


### MskChannelIcebergDestinationList <a name="MskChannelIcebergDestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>]

---


### MskChannelIcebergDestinationOutputReference <a name="MskChannelIcebergDestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog">put_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3">put_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable">put_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution">put_schema_evolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation">put_table_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds">reset_data_freshness_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3">reset_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable">reset_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution">reset_schema_evolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation">reset_table_creation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog` <a name="put_catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog"></a>

```python
def put_catalog(
  value: IResolvable | typing.List[MskChannelIcebergDestinationCatalog]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>]

---

##### `put_dead_letter_queue_s3` <a name="put_dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3"></a>

```python
def put_dead_letter_queue_s3(
  value: IResolvable | typing.List[MskChannelIcebergDestinationDeadLetterQueueS3]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>]

---

##### `put_destination_table` <a name="put_destination_table" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable"></a>

```python
def put_destination_table(
  value: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTable]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>]

---

##### `put_schema_evolution` <a name="put_schema_evolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution"></a>

```python
def put_schema_evolution(
  value: IResolvable | typing.List[MskChannelIcebergDestinationSchemaEvolution]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>]

---

##### `put_table_creation` <a name="put_table_creation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation"></a>

```python
def put_table_creation(
  value: IResolvable | typing.List[MskChannelIcebergDestinationTableCreation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>]

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_data_freshness_in_seconds` <a name="reset_data_freshness_in_seconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds"></a>

```python
def reset_data_freshness_in_seconds() -> None
```

##### `reset_dead_letter_queue_s3` <a name="reset_dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3"></a>

```python
def reset_dead_letter_queue_s3() -> None
```

##### `reset_destination_table` <a name="reset_destination_table" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable"></a>

```python
def reset_destination_table() -> None
```

##### `reset_schema_evolution` <a name="reset_schema_evolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution"></a>

```python
def reset_schema_evolution() -> None
```

##### `reset_table_creation` <a name="reset_table_creation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation"></a>

```python
def reset_table_creation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution">schema_evolution</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation">table_creation</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput">append_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput">catalog_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput">data_freshness_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input">dead_letter_queue_s3_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput">destination_table_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput">schema_evolution_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput">service_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput">table_creation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly">append_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog"></a>

```python
catalog: MskChannelIcebergDestinationCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a>

---

##### `dead_letter_queue_s3`<sup>Required</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: MskChannelIcebergDestinationDeadLetterQueueS3List
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a>

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable"></a>

```python
destination_table: MskChannelIcebergDestinationDestinationTableList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a>

---

##### `schema_evolution`<sup>Required</sup> <a name="schema_evolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution"></a>

```python
schema_evolution: MskChannelIcebergDestinationSchemaEvolutionList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a>

---

##### `table_creation`<sup>Required</sup> <a name="table_creation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation"></a>

```python
table_creation: MskChannelIcebergDestinationTableCreationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a>

---

##### `append_only_input`<sup>Optional</sup> <a name="append_only_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput"></a>

```python
append_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput"></a>

```python
catalog_input: IResolvable | typing.List[MskChannelIcebergDestinationCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>]

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `data_freshness_in_seconds_input`<sup>Optional</sup> <a name="data_freshness_in_seconds_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```python
data_freshness_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_input`<sup>Optional</sup> <a name="dead_letter_queue_s3_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input"></a>

```python
dead_letter_queue_s3_input: IResolvable | typing.List[MskChannelIcebergDestinationDeadLetterQueueS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>]

---

##### `destination_table_input`<sup>Optional</sup> <a name="destination_table_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput"></a>

```python
destination_table_input: IResolvable | typing.List[MskChannelIcebergDestinationDestinationTable]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>]

---

##### `schema_evolution_input`<sup>Optional</sup> <a name="schema_evolution_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput"></a>

```python
schema_evolution_input: IResolvable | typing.List[MskChannelIcebergDestinationSchemaEvolution]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>]

---

##### `service_execution_role_arn_input`<sup>Optional</sup> <a name="service_execution_role_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```python
service_execution_role_arn_input: str
```

- *Type:* str

---

##### `table_creation_input`<sup>Optional</sup> <a name="table_creation_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput"></a>

```python
table_creation_input: IResolvable | typing.List[MskChannelIcebergDestinationTableCreation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>]

---

##### `append_only`<sup>Required</sup> <a name="append_only" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly"></a>

```python
append_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>

---


### MskChannelIcebergDestinationSchemaEvolutionList <a name="MskChannelIcebergDestinationSchemaEvolutionList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationSchemaEvolutionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationSchemaEvolutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationSchemaEvolution]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>]

---


### MskChannelIcebergDestinationSchemaEvolutionOutputReference <a name="MskChannelIcebergDestinationSchemaEvolutionOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution">reset_enable_schema_evolution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_schema_evolution` <a name="reset_enable_schema_evolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution"></a>

```python
def reset_enable_schema_evolution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput">enable_schema_evolution_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution">enable_schema_evolution</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_schema_evolution_input`<sup>Optional</sup> <a name="enable_schema_evolution_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput"></a>

```python
enable_schema_evolution_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_schema_evolution`<sup>Required</sup> <a name="enable_schema_evolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```python
enable_schema_evolution: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationSchemaEvolution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>

---


### MskChannelIcebergDestinationTableCreationList <a name="MskChannelIcebergDestinationTableCreationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationTableCreationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelIcebergDestinationTableCreationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelIcebergDestinationTableCreation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>]

---


### MskChannelIcebergDestinationTableCreationOutputReference <a name="MskChannelIcebergDestinationTableCreationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelIcebergDestinationTableCreationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation">reset_enable_table_creation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_table_creation` <a name="reset_enable_table_creation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation"></a>

```python
def reset_enable_table_creation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput">enable_table_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation">enable_table_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_table_creation_input`<sup>Optional</sup> <a name="enable_table_creation_input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput"></a>

```python
enable_table_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_table_creation`<sup>Required</sup> <a name="enable_table_creation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation"></a>

```python
enable_table_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelIcebergDestinationTableCreation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>

---


### MskChannelLoggingInfoCloudwatchLogsList <a name="MskChannelLoggingInfoCloudwatchLogsList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoCloudwatchLogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelLoggingInfoCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelLoggingInfoCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>]

---


### MskChannelLoggingInfoCloudwatchLogsOutputReference <a name="MskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfoCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---


### MskChannelLoggingInfoFirehoseList <a name="MskChannelLoggingInfoFirehoseList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoFirehoseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelLoggingInfoFirehoseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelLoggingInfoFirehose]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>]

---


### MskChannelLoggingInfoFirehoseOutputReference <a name="MskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream">reset_delivery_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream` <a name="reset_delivery_stream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream"></a>

```python
def reset_delivery_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput">delivery_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_input`<sup>Optional</sup> <a name="delivery_stream_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput"></a>

```python
delivery_stream_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfoFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---


### MskChannelLoggingInfoList <a name="MskChannelLoggingInfoList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelLoggingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelLoggingInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>]

---


### MskChannelLoggingInfoOutputReference <a name="MskChannelLoggingInfoOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose">put_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose">reset_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  value: IResolvable | typing.List[MskChannelLoggingInfoCloudwatchLogs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>]

---

##### `put_firehose` <a name="put_firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose"></a>

```python
def put_firehose(
  value: IResolvable | typing.List[MskChannelLoggingInfoFirehose]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>]

---

##### `put_s3` <a name="put_s3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3"></a>

```python
def put_s3(
  value: IResolvable | typing.List[MskChannelLoggingInfoS3]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>]

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_firehose` <a name="reset_firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose"></a>

```python
def reset_firehose() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput">firehose_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: MskChannelLoggingInfoCloudwatchLogsList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose"></a>

```python
firehose: MskChannelLoggingInfoFirehoseList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3"></a>

```python
s3: MskChannelLoggingInfoS3List
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | typing.List[MskChannelLoggingInfoCloudwatchLogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>]

---

##### `firehose_input`<sup>Optional</sup> <a name="firehose_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput"></a>

```python
firehose_input: IResolvable | typing.List[MskChannelLoggingInfoFirehose]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>]

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | typing.List[MskChannelLoggingInfoS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---


### MskChannelLoggingInfoS3List <a name="MskChannelLoggingInfoS3List" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelLoggingInfoS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelLoggingInfoS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>]

---


### MskChannelLoggingInfoS3OutputReference <a name="MskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelLoggingInfoS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelLoggingInfoS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---


### MskChannelS3DestinationDeadLetterQueueS3List <a name="MskChannelS3DestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationDeadLetterQueueS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelS3DestinationDeadLetterQueueS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelS3DestinationDeadLetterQueueS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>]

---


### MskChannelS3DestinationDeadLetterQueueS3OutputReference <a name="MskChannelS3DestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">reset_error_output_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_output_prefix` <a name="reset_error_output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```python
def reset_error_output_prefix() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">error_output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `error_output_prefix_input`<sup>Optional</sup> <a name="error_output_prefix_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```python
error_output_prefix_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelS3DestinationDeadLetterQueueS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>

---


### MskChannelS3DestinationList <a name="MskChannelS3DestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelS3DestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelS3Destination]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>]

---


### MskChannelS3DestinationOutputReference <a name="MskChannelS3DestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3">put_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds">reset_data_freshness_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3">reset_dead_letter_queue_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage">reset_storage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dead_letter_queue_s3` <a name="put_dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3"></a>

```python
def put_dead_letter_queue_s3(
  value: IResolvable | typing.List[MskChannelS3DestinationDeadLetterQueueS3]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>]

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage"></a>

```python
def put_storage(
  value: IResolvable | typing.List[MskChannelS3DestinationStorage]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>]

---

##### `reset_data_freshness_in_seconds` <a name="reset_data_freshness_in_seconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds"></a>

```python
def reset_data_freshness_in_seconds() -> None
```

##### `reset_dead_letter_queue_s3` <a name="reset_dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3"></a>

```python
def reset_dead_letter_queue_s3() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage"></a>

```python
def reset_storage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3">dead_letter_queue_s3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput">data_freshness_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input">dead_letter_queue_s3_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput">service_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput">storage_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_queue_s3`<sup>Required</sup> <a name="dead_letter_queue_s3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3"></a>

```python
dead_letter_queue_s3: MskChannelS3DestinationDeadLetterQueueS3List
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage"></a>

```python
storage: MskChannelS3DestinationStorageList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a>

---

##### `data_freshness_in_seconds_input`<sup>Optional</sup> <a name="data_freshness_in_seconds_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```python
data_freshness_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_input`<sup>Optional</sup> <a name="dead_letter_queue_s3_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input"></a>

```python
dead_letter_queue_s3_input: IResolvable | typing.List[MskChannelS3DestinationDeadLetterQueueS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>]

---

##### `service_execution_role_arn_input`<sup>Optional</sup> <a name="service_execution_role_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```python
service_execution_role_arn_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput"></a>

```python
storage_input: IResolvable | typing.List[MskChannelS3DestinationStorage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>]

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelS3Destination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>

---


### MskChannelS3DestinationStorageList <a name="MskChannelS3DestinationStorageList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelS3DestinationStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelS3DestinationStorage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>]

---


### MskChannelS3DestinationStorageOutputReference <a name="MskChannelS3DestinationStorageOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelS3DestinationStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate">reset_output_key_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix">reset_output_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_output_key_template` <a name="reset_output_key_template" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate"></a>

```python
def reset_output_key_template() -> None
```

##### `reset_output_prefix` <a name="reset_output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix"></a>

```python
def reset_output_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput">output_key_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput">output_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate">output_key_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix">output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `output_key_template_input`<sup>Optional</sup> <a name="output_key_template_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput"></a>

```python
output_key_template_input: str
```

- *Type:* str

---

##### `output_prefix_input`<sup>Optional</sup> <a name="output_prefix_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput"></a>

```python
output_prefix_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_key_template`<sup>Required</sup> <a name="output_key_template" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate"></a>

```python
output_key_template: str
```

- *Type:* str

---

##### `output_prefix`<sup>Required</sup> <a name="output_prefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix"></a>

```python
output_prefix: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelS3DestinationStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>

---


### MskChannelTimeoutsOutputReference <a name="MskChannelTimeoutsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---


### MskChannelTopicConfigurationList <a name="MskChannelTopicConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelTopicConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelTopicConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>]

---


### MskChannelTopicConfigurationOutputReference <a name="MskChannelTopicConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter">put_record_converter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema">put_record_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter">reset_record_converter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema">reset_record_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_record_converter` <a name="put_record_converter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter"></a>

```python
def put_record_converter(
  value: IResolvable | typing.List[MskChannelTopicConfigurationRecordConverter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>]

---

##### `put_record_schema` <a name="put_record_schema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema"></a>

```python
def put_record_schema(
  value: IResolvable | typing.List[MskChannelTopicConfigurationRecordSchema]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>]

---

##### `reset_record_converter` <a name="reset_record_converter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter"></a>

```python
def reset_record_converter() -> None
```

##### `reset_record_schema` <a name="reset_record_schema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema"></a>

```python
def reset_record_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter">record_converter</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema">record_schema</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput">record_converter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput">record_schema_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_converter`<sup>Required</sup> <a name="record_converter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter"></a>

```python
record_converter: MskChannelTopicConfigurationRecordConverterList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a>

---

##### `record_schema`<sup>Required</sup> <a name="record_schema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema"></a>

```python
record_schema: MskChannelTopicConfigurationRecordSchemaList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a>

---

##### `record_converter_input`<sup>Optional</sup> <a name="record_converter_input" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput"></a>

```python
record_converter_input: IResolvable | typing.List[MskChannelTopicConfigurationRecordConverter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>]

---

##### `record_schema_input`<sup>Optional</sup> <a name="record_schema_input" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput"></a>

```python
record_schema_input: IResolvable | typing.List[MskChannelTopicConfigurationRecordSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>]

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelTopicConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>

---


### MskChannelTopicConfigurationRecordConverterList <a name="MskChannelTopicConfigurationRecordConverterList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationRecordConverterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelTopicConfigurationRecordConverterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelTopicConfigurationRecordConverter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>]

---


### MskChannelTopicConfigurationRecordConverterOutputReference <a name="MskChannelTopicConfigurationRecordConverterOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput">value_converter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter">value_converter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_converter_input`<sup>Optional</sup> <a name="value_converter_input" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput"></a>

```python
value_converter_input: str
```

- *Type:* str

---

##### `value_converter`<sup>Required</sup> <a name="value_converter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter"></a>

```python
value_converter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelTopicConfigurationRecordConverter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>

---


### MskChannelTopicConfigurationRecordSchemaList <a name="MskChannelTopicConfigurationRecordSchemaList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationRecordSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskChannelTopicConfigurationRecordSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskChannelTopicConfigurationRecordSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>]

---


### MskChannelTopicConfigurationRecordSchemaOutputReference <a name="MskChannelTopicConfigurationRecordSchemaOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_channel

mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput">gsr_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn">gsr_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gsr_arn_input`<sup>Optional</sup> <a name="gsr_arn_input" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput"></a>

```python
gsr_arn_input: str
```

- *Type:* str

---

##### `gsr_arn`<sup>Required</sup> <a name="gsr_arn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn"></a>

```python
gsr_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskChannelTopicConfigurationRecordSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>

---



