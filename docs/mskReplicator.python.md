# `mskReplicator` Submodule <a name="`mskReplicator` Submodule" id="@cdktn/provider-aws.mskReplicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskReplicator <a name="MskReplicator" id="@cdktn/provider-aws.mskReplicator.MskReplicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator aws_msk_replicator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicator(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kafka_cluster: IResolvable | typing.List[MskReplicatorKafkaCluster],
  replication_info_list: MskReplicatorReplicationInfoListStruct,
  replicator_name: str,
  service_execution_role_arn: str,
  description: str = None,
  id: str = None,
  log_delivery: MskReplicatorLogDelivery = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MskReplicatorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.kafkaCluster">kafka_cluster</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]</code> | kafka_cluster block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicationInfoList">replication_info_list</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | replication_info_list block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicatorName">replicator_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#description MskReplicator#description}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#id MskReplicator#id}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.logDelivery">log_delivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags MskReplicator#tags}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.kafkaCluster"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]

kafka_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#kafka_cluster MskReplicator#kafka_cluster}

---

##### `replication_info_list`<sup>Required</sup> <a name="replication_info_list" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicationInfoList"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

replication_info_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicator_name`<sup>Required</sup> <a name="replicator_name" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicatorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}.

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#description MskReplicator#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#id MskReplicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_delivery`<sup>Optional</sup> <a name="log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.logDelivery"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#log_delivery MskReplicator#log_delivery}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#region MskReplicator#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags MskReplicator#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#timeouts MskReplicator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putKafkaCluster">put_kafka_cluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putLogDelivery">put_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList">put_replication_info_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetLogDelivery">reset_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mskReplicator.MskReplicator.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mskReplicator.MskReplicator.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.mskReplicator.MskReplicator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mskReplicator.MskReplicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.mskReplicator.MskReplicator.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kafka_cluster` <a name="put_kafka_cluster" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putKafkaCluster"></a>

```python
def put_kafka_cluster(
  value: IResolvable | typing.List[MskReplicatorKafkaCluster]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putKafkaCluster.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]

---

##### `put_log_delivery` <a name="put_log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putLogDelivery"></a>

```python
def put_log_delivery(
  replicator_log_delivery: MskReplicatorLogDeliveryReplicatorLogDelivery = None
) -> None
```

###### `replicator_log_delivery`<sup>Optional</sup> <a name="replicator_log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putLogDelivery.parameter.replicatorLogDelivery"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

replicator_log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replicator_log_delivery MskReplicator#replicator_log_delivery}

---

##### `put_replication_info_list` <a name="put_replication_info_list" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList"></a>

```python
def put_replication_info_list(
  consumer_group_replication: IResolvable | typing.List[MskReplicatorReplicationInfoListConsumerGroupReplication],
  source_kafka_cluster_arn: str,
  target_compression_type: str,
  target_kafka_cluster_arn: str,
  topic_replication: IResolvable | typing.List[MskReplicatorReplicationInfoListTopicReplication]
) -> None
```

###### `consumer_group_replication`<sup>Required</sup> <a name="consumer_group_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList.parameter.consumerGroupReplication"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]

consumer_group_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}

---

###### `source_kafka_cluster_arn`<sup>Required</sup> <a name="source_kafka_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList.parameter.sourceKafkaClusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}.

---

###### `target_compression_type`<sup>Required</sup> <a name="target_compression_type" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList.parameter.targetCompressionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}.

---

###### `target_kafka_cluster_arn`<sup>Required</sup> <a name="target_kafka_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList.parameter.targetKafkaClusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}.

---

###### `topic_replication`<sup>Required</sup> <a name="topic_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList.parameter.topicReplication"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]

topic_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#create MskReplicator#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#delete MskReplicator#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mskReplicator.MskReplicator.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#update MskReplicator#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_delivery` <a name="reset_log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetLogDelivery"></a>

```python
def reset_log_delivery() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicator.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isConstruct"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformElement"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformResource"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskReplicator.MskReplicator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MskReplicator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MskReplicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskReplicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.currentVersion">current_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaCluster">kafka_cluster</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList">MskReplicatorKafkaClusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDelivery">log_delivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoList">replication_info_list</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference">MskReplicatorReplicationInfoListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference">MskReplicatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaClusterInput">kafka_cluster_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDeliveryInput">log_delivery_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoListInput">replication_info_list_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorNameInput">replicator_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput">service_execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorName">replicator_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.currentVersion"></a>

```python
current_version: str
```

- *Type:* str

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaCluster"></a>

```python
kafka_cluster: MskReplicatorKafkaClusterList
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList">MskReplicatorKafkaClusterList</a>

---

##### `log_delivery`<sup>Required</sup> <a name="log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDelivery"></a>

```python
log_delivery: MskReplicatorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a>

---

##### `replication_info_list`<sup>Required</sup> <a name="replication_info_list" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoList"></a>

```python
replication_info_list: MskReplicatorReplicationInfoListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference">MskReplicatorReplicationInfoListStructOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeouts"></a>

```python
timeouts: MskReplicatorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference">MskReplicatorTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kafka_cluster_input`<sup>Optional</sup> <a name="kafka_cluster_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.kafkaClusterInput"></a>

```python
kafka_cluster_input: IResolvable | typing.List[MskReplicatorKafkaCluster]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]

---

##### `log_delivery_input`<sup>Optional</sup> <a name="log_delivery_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.logDeliveryInput"></a>

```python
log_delivery_input: MskReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replication_info_list_input`<sup>Optional</sup> <a name="replication_info_list_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicationInfoListInput"></a>

```python
replication_info_list_input: MskReplicatorReplicationInfoListStruct
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---

##### `replicator_name_input`<sup>Optional</sup> <a name="replicator_name_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorNameInput"></a>

```python
replicator_name_input: str
```

- *Type:* str

---

##### `service_execution_role_arn_input`<sup>Optional</sup> <a name="service_execution_role_arn_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput"></a>

```python
service_execution_role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MskReplicatorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replicator_name`<sup>Required</sup> <a name="replicator_name" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.replicatorName"></a>

```python
replicator_name: str
```

- *Type:* str

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mskReplicator.MskReplicator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MskReplicatorConfig <a name="MskReplicatorConfig" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kafka_cluster: IResolvable | typing.List[MskReplicatorKafkaCluster],
  replication_info_list: MskReplicatorReplicationInfoListStruct,
  replicator_name: str,
  service_execution_role_arn: str,
  description: str = None,
  id: str = None,
  log_delivery: MskReplicatorLogDelivery = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MskReplicatorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.kafkaCluster">kafka_cluster</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]</code> | kafka_cluster block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicationInfoList">replication_info_list</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | replication_info_list block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicatorName">replicator_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#description MskReplicator#description}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#id MskReplicator#id}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.logDelivery">log_delivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags MskReplicator#tags}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.kafkaCluster"></a>

```python
kafka_cluster: IResolvable | typing.List[MskReplicatorKafkaCluster]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]

kafka_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#kafka_cluster MskReplicator#kafka_cluster}

---

##### `replication_info_list`<sup>Required</sup> <a name="replication_info_list" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicationInfoList"></a>

```python
replication_info_list: MskReplicatorReplicationInfoListStruct
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

replication_info_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicator_name`<sup>Required</sup> <a name="replicator_name" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.replicatorName"></a>

```python
replicator_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}.

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#description MskReplicator#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#id MskReplicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_delivery`<sup>Optional</sup> <a name="log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.logDelivery"></a>

```python
log_delivery: MskReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#log_delivery MskReplicator#log_delivery}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#region MskReplicator#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags MskReplicator#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicatorConfig.property.timeouts"></a>

```python
timeouts: MskReplicatorTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#timeouts MskReplicator#timeouts}

---

### MskReplicatorKafkaCluster <a name="MskReplicatorKafkaCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorKafkaCluster(
  amazon_msk_cluster: MskReplicatorKafkaClusterAmazonMskCluster,
  vpc_config: MskReplicatorKafkaClusterVpcConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.amazonMskCluster">amazon_msk_cluster</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | amazon_msk_cluster block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | vpc_config block. |

---

##### `amazon_msk_cluster`<sup>Required</sup> <a name="amazon_msk_cluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.amazonMskCluster"></a>

```python
amazon_msk_cluster: MskReplicatorKafkaClusterAmazonMskCluster
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

amazon_msk_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.vpcConfig"></a>

```python
vpc_config: MskReplicatorKafkaClusterVpcConfig
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}

---

### MskReplicatorKafkaClusterAmazonMskCluster <a name="MskReplicatorKafkaClusterAmazonMskCluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster(
  msk_cluster_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.property.mskClusterArn">msk_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}. |

---

##### `msk_cluster_arn`<sup>Required</sup> <a name="msk_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.property.mskClusterArn"></a>

```python
msk_cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}.

---

### MskReplicatorKafkaClusterVpcConfig <a name="MskReplicatorKafkaClusterVpcConfig" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorKafkaClusterVpcConfig(
  subnet_ids: typing.List[str],
  security_groups_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}. |

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}.

---

##### `security_groups_ids`<sup>Optional</sup> <a name="security_groups_ids" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.securityGroupsIds"></a>

```python
security_groups_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}.

---

### MskReplicatorLogDelivery <a name="MskReplicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDelivery(
  replicator_log_delivery: MskReplicatorLogDeliveryReplicatorLogDelivery = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery">replicator_log_delivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | replicator_log_delivery block. |

---

##### `replicator_log_delivery`<sup>Optional</sup> <a name="replicator_log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery"></a>

```python
replicator_log_delivery: MskReplicatorLogDeliveryReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

replicator_log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#replicator_log_delivery MskReplicator#replicator_log_delivery}

---

### MskReplicatorLogDeliveryReplicatorLogDelivery <a name="MskReplicatorLogDeliveryReplicatorLogDelivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery(
  cloudwatch_logs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs = None,
  firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose = None,
  s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | firehose block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | s3 block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#cloudwatch_logs MskReplicator#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose"></a>

```python
firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#firehose MskReplicator#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3"></a>

```python
s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#s3 MskReplicator#s3}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs(
  enabled: bool | IResolvable,
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}.

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose(
  enabled: bool | IResolvable,
  delivery_stream: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

##### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}.

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryS3 <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3(
  enabled: bool | IResolvable,
  bucket: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}.

---

### MskReplicatorReplicationInfoListConsumerGroupReplication <a name="MskReplicatorReplicationInfoListConsumerGroupReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication(
  consumer_groups_to_replicate: typing.List[str],
  consumer_groups_to_exclude: typing.List[str] = None,
  detect_and_copy_new_consumer_groups: bool | IResolvable = None,
  synchronise_consumer_group_offsets: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate">consumer_groups_to_replicate</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude">consumer_groups_to_exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups">detect_and_copy_new_consumer_groups</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets">synchronise_consumer_group_offsets</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}. |

---

##### `consumer_groups_to_replicate`<sup>Required</sup> <a name="consumer_groups_to_replicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate"></a>

```python
consumer_groups_to_replicate: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}.

---

##### `consumer_groups_to_exclude`<sup>Optional</sup> <a name="consumer_groups_to_exclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude"></a>

```python
consumer_groups_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}.

---

##### `detect_and_copy_new_consumer_groups`<sup>Optional</sup> <a name="detect_and_copy_new_consumer_groups" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups"></a>

```python
detect_and_copy_new_consumer_groups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}.

---

##### `synchronise_consumer_group_offsets`<sup>Optional</sup> <a name="synchronise_consumer_group_offsets" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets"></a>

```python
synchronise_consumer_group_offsets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}.

---

### MskReplicatorReplicationInfoListStruct <a name="MskReplicatorReplicationInfoListStruct" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListStruct(
  consumer_group_replication: IResolvable | typing.List[MskReplicatorReplicationInfoListConsumerGroupReplication],
  source_kafka_cluster_arn: str,
  target_compression_type: str,
  target_kafka_cluster_arn: str,
  topic_replication: IResolvable | typing.List[MskReplicatorReplicationInfoListTopicReplication]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication">consumer_group_replication</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]</code> | consumer_group_replication block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn">source_kafka_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType">target_compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn">target_kafka_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication">topic_replication</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]</code> | topic_replication block. |

---

##### `consumer_group_replication`<sup>Required</sup> <a name="consumer_group_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication"></a>

```python
consumer_group_replication: IResolvable | typing.List[MskReplicatorReplicationInfoListConsumerGroupReplication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]

consumer_group_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}

---

##### `source_kafka_cluster_arn`<sup>Required</sup> <a name="source_kafka_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn"></a>

```python
source_kafka_cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}.

---

##### `target_compression_type`<sup>Required</sup> <a name="target_compression_type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType"></a>

```python
target_compression_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}.

---

##### `target_kafka_cluster_arn`<sup>Required</sup> <a name="target_kafka_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn"></a>

```python
target_kafka_cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}.

---

##### `topic_replication`<sup>Required</sup> <a name="topic_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication"></a>

```python
topic_replication: IResolvable | typing.List[MskReplicatorReplicationInfoListTopicReplication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]

topic_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}

---

### MskReplicatorReplicationInfoListTopicReplication <a name="MskReplicatorReplicationInfoListTopicReplication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListTopicReplication(
  topics_to_replicate: typing.List[str],
  copy_access_control_lists_for_topics: bool | IResolvable = None,
  copy_topic_configurations: bool | IResolvable = None,
  detect_and_copy_new_topics: bool | IResolvable = None,
  starting_position: MskReplicatorReplicationInfoListTopicReplicationStartingPosition = None,
  topic_name_configuration: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration = None,
  topics_to_exclude: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate">topics_to_replicate</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics">copy_access_control_lists_for_topics</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations">copy_topic_configurations</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics">detect_and_copy_new_topics</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition">starting_position</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | starting_position block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration">topic_name_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | topic_name_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude">topics_to_exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}. |

---

##### `topics_to_replicate`<sup>Required</sup> <a name="topics_to_replicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate"></a>

```python
topics_to_replicate: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}.

---

##### `copy_access_control_lists_for_topics`<sup>Optional</sup> <a name="copy_access_control_lists_for_topics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics"></a>

```python
copy_access_control_lists_for_topics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}.

---

##### `copy_topic_configurations`<sup>Optional</sup> <a name="copy_topic_configurations" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations"></a>

```python
copy_topic_configurations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}.

---

##### `detect_and_copy_new_topics`<sup>Optional</sup> <a name="detect_and_copy_new_topics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics"></a>

```python
detect_and_copy_new_topics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}.

---

##### `starting_position`<sup>Optional</sup> <a name="starting_position" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition"></a>

```python
starting_position: MskReplicatorReplicationInfoListTopicReplicationStartingPosition
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

starting_position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#starting_position MskReplicator#starting_position}

---

##### `topic_name_configuration`<sup>Optional</sup> <a name="topic_name_configuration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration"></a>

```python
topic_name_configuration: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

topic_name_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#topic_name_configuration MskReplicator#topic_name_configuration}

---

##### `topics_to_exclude`<sup>Optional</sup> <a name="topics_to_exclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude"></a>

```python
topics_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}.

---

### MskReplicatorReplicationInfoListTopicReplicationStartingPosition <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPosition" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#type MskReplicator#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#type MskReplicator#type}.

---

### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#type MskReplicator#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#type MskReplicator#type}.

---

### MskReplicatorTimeouts <a name="MskReplicatorTimeouts" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#create MskReplicator#create}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#delete MskReplicator#delete}. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#update MskReplicator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#create MskReplicator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#delete MskReplicator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#update MskReplicator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskReplicatorKafkaClusterAmazonMskClusterOutputReference <a name="MskReplicatorKafkaClusterAmazonMskClusterOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArnInput">msk_cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArn">msk_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `msk_cluster_arn_input`<sup>Optional</sup> <a name="msk_cluster_arn_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArnInput"></a>

```python
msk_cluster_arn_input: str
```

- *Type:* str

---

##### `msk_cluster_arn`<sup>Required</sup> <a name="msk_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArn"></a>

```python
msk_cluster_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorKafkaClusterAmazonMskCluster
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---


### MskReplicatorKafkaClusterList <a name="MskReplicatorKafkaClusterList" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorKafkaClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskReplicatorKafkaClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskReplicatorKafkaCluster]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>]

---


### MskReplicatorKafkaClusterOutputReference <a name="MskReplicatorKafkaClusterOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorKafkaClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster">put_amazon_msk_cluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amazon_msk_cluster` <a name="put_amazon_msk_cluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster"></a>

```python
def put_amazon_msk_cluster(
  msk_cluster_arn: str
) -> None
```

###### `msk_cluster_arn`<sup>Required</sup> <a name="msk_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster.parameter.mskClusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}.

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  subnet_ids: typing.List[str],
  security_groups_ids: typing.List[str] = None
) -> None
```

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}.

---

###### `security_groups_ids`<sup>Optional</sup> <a name="security_groups_ids" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig.parameter.securityGroupsIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskCluster">amazon_msk_cluster</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference">MskReplicatorKafkaClusterAmazonMskClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference">MskReplicatorKafkaClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskClusterInput">amazon_msk_cluster_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_msk_cluster`<sup>Required</sup> <a name="amazon_msk_cluster" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskCluster"></a>

```python
amazon_msk_cluster: MskReplicatorKafkaClusterAmazonMskClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference">MskReplicatorKafkaClusterAmazonMskClusterOutputReference</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfig"></a>

```python
vpc_config: MskReplicatorKafkaClusterVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference">MskReplicatorKafkaClusterVpcConfigOutputReference</a>

---

##### `amazon_msk_cluster_input`<sup>Optional</sup> <a name="amazon_msk_cluster_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskClusterInput"></a>

```python
amazon_msk_cluster_input: MskReplicatorKafkaClusterAmazonMskCluster
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: MskReplicatorKafkaClusterVpcConfig
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskReplicatorKafkaCluster
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>

---


### MskReplicatorKafkaClusterVpcConfigOutputReference <a name="MskReplicatorKafkaClusterVpcConfigOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resetSecurityGroupsIds">reset_security_groups_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_groups_ids` <a name="reset_security_groups_ids" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resetSecurityGroupsIds"></a>

```python
def reset_security_groups_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIdsInput">security_groups_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIds">security_groups_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups_ids_input`<sup>Optional</sup> <a name="security_groups_ids_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIdsInput"></a>

```python
security_groups_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups_ids`<sup>Required</sup> <a name="security_groups_ids" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIds"></a>

```python
security_groups_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorKafkaClusterVpcConfig
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---


### MskReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery">put_replicator_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery">reset_replicator_log_delivery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_replicator_log_delivery` <a name="put_replicator_log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery"></a>

```python
def put_replicator_log_delivery(
  cloudwatch_logs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs = None,
  firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose = None,
  s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3 = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#cloudwatch_logs MskReplicator#cloudwatch_logs}

---

###### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery.parameter.firehose"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#firehose MskReplicator#firehose}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#s3 MskReplicator#s3}

---

##### `reset_replicator_log_delivery` <a name="reset_replicator_log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery"></a>

```python
def reset_replicator_log_delivery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery">replicator_log_delivery</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput">replicator_log_delivery_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replicator_log_delivery`<sup>Required</sup> <a name="replicator_log_delivery" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery"></a>

```python
replicator_log_delivery: MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a>

---

##### `replicator_log_delivery_input`<sup>Optional</sup> <a name="replicator_log_delivery_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput"></a>

```python
replicator_log_delivery_input: MskReplicatorLogDeliveryReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream">reset_delivery_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream` <a name="reset_delivery_stream" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```python
def reset_delivery_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">delivery_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_input`<sup>Optional</sup> <a name="delivery_stream_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```python
delivery_stream_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose">put_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose">reset_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  enabled: bool | IResolvable,
  log_group: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs.parameter.logGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}.

---

##### `put_firehose` <a name="put_firehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose"></a>

```python
def put_firehose(
  enabled: bool | IResolvable,
  delivery_stream: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

###### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose.parameter.deliveryStream"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}.

---

##### `put_s3` <a name="put_s3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3"></a>

```python
def put_s3(
  enabled: bool | IResolvable,
  bucket: str = None,
  prefix: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}.

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_firehose` <a name="reset_firehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose"></a>

```python
def reset_firehose() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput">firehose_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose"></a>

```python
firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3"></a>

```python
s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `firehose_input`<sup>Optional</sup> <a name="firehose_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput"></a>

```python
firehose_input: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input"></a>

```python
s3_input: MskReplicatorLogDeliveryReplicatorLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorLogDeliveryReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorLogDeliveryReplicatorLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationList <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationList" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskReplicatorReplicationInfoListConsumerGroupReplication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude">reset_consumer_groups_to_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups">reset_detect_and_copy_new_consumer_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets">reset_synchronise_consumer_group_offsets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_consumer_groups_to_exclude` <a name="reset_consumer_groups_to_exclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude"></a>

```python
def reset_consumer_groups_to_exclude() -> None
```

##### `reset_detect_and_copy_new_consumer_groups` <a name="reset_detect_and_copy_new_consumer_groups" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups"></a>

```python
def reset_detect_and_copy_new_consumer_groups() -> None
```

##### `reset_synchronise_consumer_group_offsets` <a name="reset_synchronise_consumer_group_offsets" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets"></a>

```python
def reset_synchronise_consumer_group_offsets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput">consumer_groups_to_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput">consumer_groups_to_replicate_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput">detect_and_copy_new_consumer_groups_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput">synchronise_consumer_group_offsets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude">consumer_groups_to_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate">consumer_groups_to_replicate</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups">detect_and_copy_new_consumer_groups</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets">synchronise_consumer_group_offsets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_groups_to_exclude_input`<sup>Optional</sup> <a name="consumer_groups_to_exclude_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput"></a>

```python
consumer_groups_to_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_groups_to_replicate_input`<sup>Optional</sup> <a name="consumer_groups_to_replicate_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput"></a>

```python
consumer_groups_to_replicate_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `detect_and_copy_new_consumer_groups_input`<sup>Optional</sup> <a name="detect_and_copy_new_consumer_groups_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput"></a>

```python
detect_and_copy_new_consumer_groups_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synchronise_consumer_group_offsets_input`<sup>Optional</sup> <a name="synchronise_consumer_group_offsets_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput"></a>

```python
synchronise_consumer_group_offsets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `consumer_groups_to_exclude`<sup>Required</sup> <a name="consumer_groups_to_exclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude"></a>

```python
consumer_groups_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_groups_to_replicate`<sup>Required</sup> <a name="consumer_groups_to_replicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate"></a>

```python
consumer_groups_to_replicate: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `detect_and_copy_new_consumer_groups`<sup>Required</sup> <a name="detect_and_copy_new_consumer_groups" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups"></a>

```python
detect_and_copy_new_consumer_groups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synchronise_consumer_group_offsets`<sup>Required</sup> <a name="synchronise_consumer_group_offsets" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets"></a>

```python
synchronise_consumer_group_offsets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---


### MskReplicatorReplicationInfoListStructOutputReference <a name="MskReplicatorReplicationInfoListStructOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication">put_consumer_group_replication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication">put_topic_replication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_consumer_group_replication` <a name="put_consumer_group_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication"></a>

```python
def put_consumer_group_replication(
  value: IResolvable | typing.List[MskReplicatorReplicationInfoListConsumerGroupReplication]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]

---

##### `put_topic_replication` <a name="put_topic_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication"></a>

```python
def put_topic_replication(
  value: IResolvable | typing.List[MskReplicatorReplicationInfoListTopicReplication]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication">consumer_group_replication</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList">MskReplicatorReplicationInfoListConsumerGroupReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterAlias">source_kafka_cluster_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterAlias">target_kafka_cluster_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication">topic_replication</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList">MskReplicatorReplicationInfoListTopicReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput">consumer_group_replication_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput">source_kafka_cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput">target_compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput">target_kafka_cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput">topic_replication_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn">source_kafka_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType">target_compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn">target_kafka_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_group_replication`<sup>Required</sup> <a name="consumer_group_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication"></a>

```python
consumer_group_replication: MskReplicatorReplicationInfoListConsumerGroupReplicationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList">MskReplicatorReplicationInfoListConsumerGroupReplicationList</a>

---

##### `source_kafka_cluster_alias`<sup>Required</sup> <a name="source_kafka_cluster_alias" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterAlias"></a>

```python
source_kafka_cluster_alias: str
```

- *Type:* str

---

##### `target_kafka_cluster_alias`<sup>Required</sup> <a name="target_kafka_cluster_alias" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterAlias"></a>

```python
target_kafka_cluster_alias: str
```

- *Type:* str

---

##### `topic_replication`<sup>Required</sup> <a name="topic_replication" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication"></a>

```python
topic_replication: MskReplicatorReplicationInfoListTopicReplicationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList">MskReplicatorReplicationInfoListTopicReplicationList</a>

---

##### `consumer_group_replication_input`<sup>Optional</sup> <a name="consumer_group_replication_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput"></a>

```python
consumer_group_replication_input: IResolvable | typing.List[MskReplicatorReplicationInfoListConsumerGroupReplication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>]

---

##### `source_kafka_cluster_arn_input`<sup>Optional</sup> <a name="source_kafka_cluster_arn_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput"></a>

```python
source_kafka_cluster_arn_input: str
```

- *Type:* str

---

##### `target_compression_type_input`<sup>Optional</sup> <a name="target_compression_type_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput"></a>

```python
target_compression_type_input: str
```

- *Type:* str

---

##### `target_kafka_cluster_arn_input`<sup>Optional</sup> <a name="target_kafka_cluster_arn_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput"></a>

```python
target_kafka_cluster_arn_input: str
```

- *Type:* str

---

##### `topic_replication_input`<sup>Optional</sup> <a name="topic_replication_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput"></a>

```python
topic_replication_input: IResolvable | typing.List[MskReplicatorReplicationInfoListTopicReplication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]

---

##### `source_kafka_cluster_arn`<sup>Required</sup> <a name="source_kafka_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn"></a>

```python
source_kafka_cluster_arn: str
```

- *Type:* str

---

##### `target_compression_type`<sup>Required</sup> <a name="target_compression_type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType"></a>

```python
target_compression_type: str
```

- *Type:* str

---

##### `target_kafka_cluster_arn`<sup>Required</sup> <a name="target_kafka_cluster_arn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn"></a>

```python
target_kafka_cluster_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorReplicationInfoListStruct
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---


### MskReplicatorReplicationInfoListTopicReplicationList <a name="MskReplicatorReplicationInfoListTopicReplicationList" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MskReplicatorReplicationInfoListTopicReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MskReplicatorReplicationInfoListTopicReplication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>]

---


### MskReplicatorReplicationInfoListTopicReplicationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition">put_starting_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration">put_topic_name_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics">reset_copy_access_control_lists_for_topics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations">reset_copy_topic_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics">reset_detect_and_copy_new_topics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition">reset_starting_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration">reset_topic_name_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude">reset_topics_to_exclude</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_starting_position` <a name="put_starting_position" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition"></a>

```python
def put_starting_position(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#type MskReplicator#type}.

---

##### `put_topic_name_configuration` <a name="put_topic_name_configuration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration"></a>

```python
def put_topic_name_configuration(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/msk_replicator#type MskReplicator#type}.

---

##### `reset_copy_access_control_lists_for_topics` <a name="reset_copy_access_control_lists_for_topics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics"></a>

```python
def reset_copy_access_control_lists_for_topics() -> None
```

##### `reset_copy_topic_configurations` <a name="reset_copy_topic_configurations" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations"></a>

```python
def reset_copy_topic_configurations() -> None
```

##### `reset_detect_and_copy_new_topics` <a name="reset_detect_and_copy_new_topics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics"></a>

```python
def reset_detect_and_copy_new_topics() -> None
```

##### `reset_starting_position` <a name="reset_starting_position" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition"></a>

```python
def reset_starting_position() -> None
```

##### `reset_topic_name_configuration` <a name="reset_topic_name_configuration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration"></a>

```python
def reset_topic_name_configuration() -> None
```

##### `reset_topics_to_exclude` <a name="reset_topics_to_exclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude"></a>

```python
def reset_topics_to_exclude() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition">starting_position</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration">topic_name_configuration</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput">copy_access_control_lists_for_topics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput">copy_topic_configurations_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput">detect_and_copy_new_topics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput">starting_position_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput">topic_name_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput">topics_to_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput">topics_to_replicate_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics">copy_access_control_lists_for_topics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations">copy_topic_configurations</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics">detect_and_copy_new_topics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude">topics_to_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate">topics_to_replicate</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `starting_position`<sup>Required</sup> <a name="starting_position" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition"></a>

```python
starting_position: MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a>

---

##### `topic_name_configuration`<sup>Required</sup> <a name="topic_name_configuration" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration"></a>

```python
topic_name_configuration: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a>

---

##### `copy_access_control_lists_for_topics_input`<sup>Optional</sup> <a name="copy_access_control_lists_for_topics_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput"></a>

```python
copy_access_control_lists_for_topics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `copy_topic_configurations_input`<sup>Optional</sup> <a name="copy_topic_configurations_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput"></a>

```python
copy_topic_configurations_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detect_and_copy_new_topics_input`<sup>Optional</sup> <a name="detect_and_copy_new_topics_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput"></a>

```python
detect_and_copy_new_topics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `starting_position_input`<sup>Optional</sup> <a name="starting_position_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput"></a>

```python
starting_position_input: MskReplicatorReplicationInfoListTopicReplicationStartingPosition
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `topic_name_configuration_input`<sup>Optional</sup> <a name="topic_name_configuration_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput"></a>

```python
topic_name_configuration_input: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `topics_to_exclude_input`<sup>Optional</sup> <a name="topics_to_exclude_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput"></a>

```python
topics_to_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `topics_to_replicate_input`<sup>Optional</sup> <a name="topics_to_replicate_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput"></a>

```python
topics_to_replicate_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `copy_access_control_lists_for_topics`<sup>Required</sup> <a name="copy_access_control_lists_for_topics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics"></a>

```python
copy_access_control_lists_for_topics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `copy_topic_configurations`<sup>Required</sup> <a name="copy_topic_configurations" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations"></a>

```python
copy_topic_configurations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detect_and_copy_new_topics`<sup>Required</sup> <a name="detect_and_copy_new_topics" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics"></a>

```python
detect_and_copy_new_topics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `topics_to_exclude`<sup>Required</sup> <a name="topics_to_exclude" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude"></a>

```python
topics_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `topics_to_replicate`<sup>Required</sup> <a name="topics_to_replicate" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate"></a>

```python
topics_to_replicate: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskReplicatorReplicationInfoListTopicReplication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---


### MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorReplicationInfoListTopicReplicationStartingPosition
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---


### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---


### MskReplicatorTimeoutsOutputReference <a name="MskReplicatorTimeoutsOutputReference" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import msk_replicator

mskReplicator.MskReplicatorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MskReplicatorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---



