# `outpostsCapacityTask` Submodule <a name="`outpostsCapacityTask` Submodule" id="@cdktn/provider-aws.outpostsCapacityTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsCapacityTask <a name="OutpostsCapacityTask" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task aws_outposts_capacity_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  outpost_identifier: str,
  asset_id: str = None,
  instance_pool: IResolvable | typing.List[OutpostsCapacityTaskInstancePool] = None,
  instances_to_exclude: IResolvable | typing.List[OutpostsCapacityTaskInstancesToExclude] = None,
  order_id: str = None,
  region: str = None,
  task_action_on_blocking_instances: str = None,
  timeouts: OutpostsCapacityTaskTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.outpostIdentifier">outpost_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancePool">instance_pool</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]</code> | instance_pool block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancesToExclude">instances_to_exclude</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]</code> | instances_to_exclude block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.orderId">order_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.taskActionOnBlockingInstances">task_action_on_blocking_instances</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `outpost_identifier`<sup>Required</sup> <a name="outpost_identifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.outpostIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}.

---

##### `asset_id`<sup>Optional</sup> <a name="asset_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.assetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}.

---

##### `instance_pool`<sup>Optional</sup> <a name="instance_pool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancePool"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}

---

##### `instances_to_exclude`<sup>Optional</sup> <a name="instances_to_exclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.instancesToExclude"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]

instances_to_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.orderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}

---

##### `task_action_on_blocking_instances`<sup>Optional</sup> <a name="task_action_on_blocking_instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.taskActionOnBlockingInstances"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool">put_instance_pool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude">put_instances_to_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId">reset_asset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool">reset_instance_pool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude">reset_instances_to_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId">reset_order_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances">reset_task_action_on_blocking_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instance_pool` <a name="put_instance_pool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool"></a>

```python
def put_instance_pool(
  value: IResolvable | typing.List[OutpostsCapacityTaskInstancePool]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]

---

##### `put_instances_to_exclude` <a name="put_instances_to_exclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude"></a>

```python
def put_instances_to_exclude(
  value: IResolvable | typing.List[OutpostsCapacityTaskInstancesToExclude]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#create OutpostsCapacityTask#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#delete OutpostsCapacityTask#delete}

---

##### `reset_asset_id` <a name="reset_asset_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId"></a>

```python
def reset_asset_id() -> None
```

##### `reset_instance_pool` <a name="reset_instance_pool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool"></a>

```python
def reset_instance_pool() -> None
```

##### `reset_instances_to_exclude` <a name="reset_instances_to_exclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude"></a>

```python
def reset_instances_to_exclude() -> None
```

##### `reset_order_id` <a name="reset_order_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId"></a>

```python
def reset_order_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_task_action_on_blocking_instances` <a name="reset_task_action_on_blocking_instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances"></a>

```python
def reset_task_action_on_blocking_instances() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OutpostsCapacityTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OutpostsCapacityTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsCapacityTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId">capacity_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate">completion_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool">instance_pool</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude">instances_to_exclude</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput">instance_pool_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput">instances_to_exclude_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput">order_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput">outpost_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput">task_action_on_blocking_instances_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier">outpost_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances">task_action_on_blocking_instances</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_task_id`<sup>Required</sup> <a name="capacity_task_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId"></a>

```python
capacity_task_id: str
```

- *Type:* str

---

##### `completion_date`<sup>Required</sup> <a name="completion_date" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate"></a>

```python
completion_date: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `instance_pool`<sup>Required</sup> <a name="instance_pool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool"></a>

```python
instance_pool: OutpostsCapacityTaskInstancePoolList
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a>

---

##### `instances_to_exclude`<sup>Required</sup> <a name="instances_to_exclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude"></a>

```python
instances_to_exclude: OutpostsCapacityTaskInstancesToExcludeList
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts"></a>

```python
timeouts: OutpostsCapacityTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `instance_pool_input`<sup>Optional</sup> <a name="instance_pool_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput"></a>

```python
instance_pool_input: IResolvable | typing.List[OutpostsCapacityTaskInstancePool]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]

---

##### `instances_to_exclude_input`<sup>Optional</sup> <a name="instances_to_exclude_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput"></a>

```python
instances_to_exclude_input: IResolvable | typing.List[OutpostsCapacityTaskInstancesToExclude]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]

---

##### `order_id_input`<sup>Optional</sup> <a name="order_id_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput"></a>

```python
order_id_input: str
```

- *Type:* str

---

##### `outpost_identifier_input`<sup>Optional</sup> <a name="outpost_identifier_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput"></a>

```python
outpost_identifier_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `task_action_on_blocking_instances_input`<sup>Optional</sup> <a name="task_action_on_blocking_instances_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput"></a>

```python
task_action_on_blocking_instances_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OutpostsCapacityTaskTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `outpost_identifier`<sup>Required</sup> <a name="outpost_identifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier"></a>

```python
outpost_identifier: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `task_action_on_blocking_instances`<sup>Required</sup> <a name="task_action_on_blocking_instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances"></a>

```python
task_action_on_blocking_instances: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsCapacityTaskConfig <a name="OutpostsCapacityTaskConfig" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  outpost_identifier: str,
  asset_id: str = None,
  instance_pool: IResolvable | typing.List[OutpostsCapacityTaskInstancePool] = None,
  instances_to_exclude: IResolvable | typing.List[OutpostsCapacityTaskInstancesToExclude] = None,
  order_id: str = None,
  region: str = None,
  task_action_on_blocking_instances: str = None,
  timeouts: OutpostsCapacityTaskTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier">outpost_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool">instance_pool</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]</code> | instance_pool block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude">instances_to_exclude</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]</code> | instances_to_exclude block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId">order_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances">task_action_on_blocking_instances</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `outpost_identifier`<sup>Required</sup> <a name="outpost_identifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier"></a>

```python
outpost_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}.

---

##### `asset_id`<sup>Optional</sup> <a name="asset_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}.

---

##### `instance_pool`<sup>Optional</sup> <a name="instance_pool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool"></a>

```python
instance_pool: IResolvable | typing.List[OutpostsCapacityTaskInstancePool]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}

---

##### `instances_to_exclude`<sup>Optional</sup> <a name="instances_to_exclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude"></a>

```python
instances_to_exclude: IResolvable | typing.List[OutpostsCapacityTaskInstancesToExclude]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]

instances_to_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}

---

##### `task_action_on_blocking_instances`<sup>Optional</sup> <a name="task_action_on_blocking_instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances"></a>

```python
task_action_on_blocking_instances: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts"></a>

```python
timeouts: OutpostsCapacityTaskTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}

---

### OutpostsCapacityTaskInstancePool <a name="OutpostsCapacityTaskInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskInstancePool(
  count: typing.Union[int, float],
  instance_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}.

---

### OutpostsCapacityTaskInstancesToExclude <a name="OutpostsCapacityTaskInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude(
  instances: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances">instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}.

---

### OutpostsCapacityTaskTimeouts <a name="OutpostsCapacityTaskTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#create OutpostsCapacityTask#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/outposts_capacity_task#delete OutpostsCapacityTask#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsCapacityTaskInstancePoolList <a name="OutpostsCapacityTaskInstancePoolList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OutpostsCapacityTaskInstancePoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OutpostsCapacityTaskInstancePool]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>]

---


### OutpostsCapacityTaskInstancePoolOutputReference <a name="OutpostsCapacityTaskInstancePoolOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OutpostsCapacityTaskInstancePool
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>

---


### OutpostsCapacityTaskInstancesToExcludeList <a name="OutpostsCapacityTaskInstancesToExcludeList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OutpostsCapacityTaskInstancesToExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OutpostsCapacityTaskInstancesToExclude]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>]

---


### OutpostsCapacityTaskInstancesToExcludeOutputReference <a name="OutpostsCapacityTaskInstancesToExcludeOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OutpostsCapacityTaskInstancesToExclude
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>

---


### OutpostsCapacityTaskTimeoutsOutputReference <a name="OutpostsCapacityTaskTimeoutsOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import outposts_capacity_task

outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OutpostsCapacityTaskTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---



