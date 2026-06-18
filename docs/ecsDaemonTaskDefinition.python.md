# `ecsDaemonTaskDefinition` Submodule <a name="`ecsDaemonTaskDefinition` Submodule" id="@cdktn/provider-aws.ecsDaemonTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemonTaskDefinition <a name="EcsDaemonTaskDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition aws_ecs_daemon_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  family: str,
  container_definition: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinition] = None,
  cpu: str = None,
  execution_role_arn: str = None,
  memory: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  task_role_arn: str = None,
  volume: IResolvable | typing.List[EcsDaemonTaskDefinitionVolume] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.containerDefinition">container_definition</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]</code> | container_definition block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.taskRoleArn">task_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.volume">volume</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]</code> | volume block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.family"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}.

---

##### `container_definition`<sup>Optional</sup> <a name="container_definition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.containerDefinition"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]

container_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_definition EcsDaemonTaskDefinition#container_definition}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.cpu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#region EcsDaemonTaskDefinition#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}.

---

##### `task_role_arn`<sup>Optional</sup> <a name="task_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.taskRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.volume"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#volume EcsDaemonTaskDefinition#volume}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition">put_container_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition">reset_container_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn">reset_task_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_container_definition` <a name="put_container_definition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition"></a>

```python
def put_container_definition(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]

---

##### `put_volume` <a name="put_volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume"></a>

```python
def put_volume(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionVolume]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]

---

##### `reset_container_definition` <a name="reset_container_definition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition"></a>

```python
def reset_container_definition() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_role_arn` <a name="reset_task_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn"></a>

```python
def reset_task_role_arn() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume"></a>

```python
def reset_volume() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcsDaemonTaskDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcsDaemonTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemonTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition">container_definition</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput">container_definition_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput">task_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput">volume_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `container_definition`<sup>Required</sup> <a name="container_definition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition"></a>

```python
container_definition: EcsDaemonTaskDefinitionContainerDefinitionList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume"></a>

```python
volume: EcsDaemonTaskDefinitionVolumeList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a>

---

##### `container_definition_input`<sup>Optional</sup> <a name="container_definition_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput"></a>

```python
container_definition_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_role_arn_input`<sup>Optional</sup> <a name="task_role_arn_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput"></a>

```python
task_role_arn_input: str
```

- *Type:* str

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput"></a>

```python
volume_input: IResolvable | typing.List[EcsDaemonTaskDefinitionVolume]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_role_arn`<sup>Required</sup> <a name="task_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonTaskDefinitionConfig <a name="EcsDaemonTaskDefinitionConfig" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  family: str,
  container_definition: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinition] = None,
  cpu: str = None,
  execution_role_arn: str = None,
  memory: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  task_role_arn: str = None,
  volume: IResolvable | typing.List[EcsDaemonTaskDefinitionVolume] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition">container_definition</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]</code> | container_definition block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn">task_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume">volume</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]</code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family"></a>

```python
family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}.

---

##### `container_definition`<sup>Optional</sup> <a name="container_definition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition"></a>

```python
container_definition: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]

container_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_definition EcsDaemonTaskDefinition#container_definition}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#region EcsDaemonTaskDefinition#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}.

---

##### `task_role_arn`<sup>Optional</sup> <a name="task_role_arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn"></a>

```python
task_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume"></a>

```python
volume: IResolvable | typing.List[EcsDaemonTaskDefinitionVolume]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#volume EcsDaemonTaskDefinition#volume}

---

### EcsDaemonTaskDefinitionContainerDefinition <a name="EcsDaemonTaskDefinitionContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition(
  image: str,
  command: typing.List[str] = None,
  cpu: typing.Union[int, float] = None,
  depends_on: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionDependsOn] = None,
  entry_point: typing.List[str] = None,
  environment: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironment] = None,
  environment_file: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile] = None,
  essential: bool | IResolvable = None,
  firelens_configuration: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration] = None,
  health_check: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionHealthCheck] = None,
  interactive: bool | IResolvable = None,
  linux_parameters: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters] = None,
  log_configuration: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration] = None,
  memory: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  mount_point: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionMountPoint] = None,
  name: str = None,
  privileged: bool | IResolvable = None,
  pseudo_terminal: bool | IResolvable = None,
  readonly_root_filesystem: bool | IResolvable = None,
  repository_credentials: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials] = None,
  restart_policy: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy] = None,
  secret: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSecret] = None,
  start_timeout: typing.Union[int, float] = None,
  stop_timeout: typing.Union[int, float] = None,
  system_control: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSystemControl] = None,
  ulimit: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionUlimit] = None,
  user: str = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn">depends_on</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>]</code> | depends_on block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment">environment</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>]</code> | environment block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile">environment_file</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>]</code> | environment_file block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential">essential</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration">firelens_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>]</code> | firelens_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck">health_check</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>]</code> | health_check block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive">interactive</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters">linux_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>]</code> | linux_parameters block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration">log_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>]</code> | log_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint">mount_point</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>]</code> | mount_point block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged">privileged</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal">pseudo_terminal</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem">readonly_root_filesystem</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials">repository_credentials</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>]</code> | repository_credentials block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy">restart_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>]</code> | restart_policy block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret">secret</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>]</code> | secret block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout">start_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout">stop_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl">system_control</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>]</code> | system_control block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit">ulimit</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>]</code> | ulimit block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn"></a>

```python
depends_on: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>]

depends_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#depends_on EcsDaemonTaskDefinition#depends_on}

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment"></a>

```python
environment: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#environment EcsDaemonTaskDefinition#environment}

---

##### `environment_file`<sup>Optional</sup> <a name="environment_file" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile"></a>

```python
environment_file: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>]

environment_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#environment_file EcsDaemonTaskDefinition#environment_file}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential"></a>

```python
essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}.

---

##### `firelens_configuration`<sup>Optional</sup> <a name="firelens_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration"></a>

```python
firelens_configuration: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>]

firelens_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#firelens_configuration EcsDaemonTaskDefinition#firelens_configuration}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck"></a>

```python
health_check: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionHealthCheck]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>]

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#health_check EcsDaemonTaskDefinition#health_check}

---

##### `interactive`<sup>Optional</sup> <a name="interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive"></a>

```python
interactive: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}.

---

##### `linux_parameters`<sup>Optional</sup> <a name="linux_parameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters"></a>

```python
linux_parameters: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>]

linux_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#linux_parameters EcsDaemonTaskDefinition#linux_parameters}

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration"></a>

```python
log_configuration: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>]

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#log_configuration EcsDaemonTaskDefinition#log_configuration}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}.

---

##### `mount_point`<sup>Optional</sup> <a name="mount_point" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint"></a>

```python
mount_point: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionMountPoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>]

mount_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#mount_point EcsDaemonTaskDefinition#mount_point}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged"></a>

```python
privileged: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}.

---

##### `pseudo_terminal`<sup>Optional</sup> <a name="pseudo_terminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal"></a>

```python
pseudo_terminal: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}.

---

##### `readonly_root_filesystem`<sup>Optional</sup> <a name="readonly_root_filesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem"></a>

```python
readonly_root_filesystem: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}.

---

##### `repository_credentials`<sup>Optional</sup> <a name="repository_credentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials"></a>

```python
repository_credentials: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>]

repository_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#repository_credentials EcsDaemonTaskDefinition#repository_credentials}

---

##### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy"></a>

```python
restart_policy: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>]

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#restart_policy EcsDaemonTaskDefinition#restart_policy}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret"></a>

```python
secret: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#secret EcsDaemonTaskDefinition#secret}

---

##### `start_timeout`<sup>Optional</sup> <a name="start_timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout"></a>

```python
start_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}.

---

##### `stop_timeout`<sup>Optional</sup> <a name="stop_timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout"></a>

```python
stop_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}.

---

##### `system_control`<sup>Optional</sup> <a name="system_control" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl"></a>

```python
system_control: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSystemControl]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>]

system_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#system_control EcsDaemonTaskDefinition#system_control}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit"></a>

```python
ulimit: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionUlimit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#ulimit EcsDaemonTaskDefinition#ulimit}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}.

---

### EcsDaemonTaskDefinitionContainerDefinitionDependsOn <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn(
  condition: str,
  container_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironment <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile(
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration(
  type: str,
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionHealthCheck <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck(
  command: typing.List[str],
  interval: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  start_period: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod">start_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}. |

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}.

---

##### `start_period`<sup>Optional</sup> <a name="start_period" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod"></a>

```python
start_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters(
  capabilities: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities] = None,
  device: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice] = None,
  init_process_enabled: bool | IResolvable = None,
  tmpfs: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities">capabilities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>]</code> | capabilities block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device">device</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>]</code> | device block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled">init_process_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs">tmpfs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>]</code> | tmpfs block. |

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities"></a>

```python
capabilities: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>]

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#capabilities EcsDaemonTaskDefinition#capabilities}

---

##### `device`<sup>Optional</sup> <a name="device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device"></a>

```python
device: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>]

device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#device EcsDaemonTaskDefinition#device}

---

##### `init_process_enabled`<sup>Optional</sup> <a name="init_process_enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled"></a>

```python
init_process_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}.

---

##### `tmpfs`<sup>Optional</sup> <a name="tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs"></a>

```python
tmpfs: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>]

tmpfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#tmpfs EcsDaemonTaskDefinition#tmpfs}

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities(
  add: typing.List[str] = None,
  drop: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add">add</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop">drop</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add"></a>

```python
add: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}.

---

##### `drop`<sup>Optional</sup> <a name="drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop"></a>

```python
drop: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice(
  host_path: str,
  container_path: str = None,
  permissions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath">host_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath">container_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}. |

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}.

---

##### `container_path`<sup>Optional</sup> <a name="container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs(
  container_path: str,
  size: typing.Union[int, float],
  mount_options: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath">container_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}. |

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration(
  log_driver: str,
  options: typing.Mapping[str] = None,
  secret_option: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver">log_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption">secret_option</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>]</code> | secret_option block. |

---

##### `log_driver`<sup>Required</sup> <a name="log_driver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver"></a>

```python
log_driver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

##### `secret_option`<sup>Optional</sup> <a name="secret_option" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption"></a>

```python
secret_option: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>]

secret_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#secret_option EcsDaemonTaskDefinition#secret_option}

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption(
  name: str,
  value_from: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom">value_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionMountPoint <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint(
  container_path: str = None,
  read_only: bool | IResolvable = None,
  source_volume: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath">container_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume">source_volume</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}. |

---

##### `container_path`<sup>Optional</sup> <a name="container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}.

---

##### `source_volume`<sup>Optional</sup> <a name="source_volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume"></a>

```python
source_volume: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials(
  credentials_parameter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter">credentials_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}. |

---

##### `credentials_parameter`<sup>Required</sup> <a name="credentials_parameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter"></a>

```python
credentials_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy(
  enabled: bool | IResolvable,
  ignored_exit_codes: typing.List[typing.Union[int, float]] = None,
  restart_attempt_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes">ignored_exit_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod">restart_attempt_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}.

---

##### `ignored_exit_codes`<sup>Optional</sup> <a name="ignored_exit_codes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes"></a>

```python
ignored_exit_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}.

---

##### `restart_attempt_period`<sup>Optional</sup> <a name="restart_attempt_period" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod"></a>

```python
restart_attempt_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSecret <a name="EcsDaemonTaskDefinitionContainerDefinitionSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret(
  name: str,
  value_from: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom">value_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSystemControl <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl(
  namespace: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionUlimit <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit(
  hard_limit: typing.Union[int, float],
  name: str,
  soft_limit: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit">hard_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit">soft_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}. |

---

##### `hard_limit`<sup>Required</sup> <a name="hard_limit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit"></a>

```python
hard_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `soft_limit`<sup>Required</sup> <a name="soft_limit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit"></a>

```python
soft_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}.

---

### EcsDaemonTaskDefinitionVolume <a name="EcsDaemonTaskDefinitionVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume(
  name: str,
  host: IResolvable | typing.List[EcsDaemonTaskDefinitionVolumeHost] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host">host</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>]</code> | host block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host"></a>

```python
host: IResolvable | typing.List[EcsDaemonTaskDefinitionVolumeHost]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#host EcsDaemonTaskDefinition#host}

---

### EcsDaemonTaskDefinitionVolumeHost <a name="EcsDaemonTaskDefinitionVolumeHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost(
  source_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath">source_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}. |

---

##### `source_path`<sup>Optional</sup> <a name="source_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonTaskDefinitionContainerDefinitionDependsOnList <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionDependsOn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionHealthCheck]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod">reset_start_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_start_period` <a name="reset_start_period" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod"></a>

```python
def reset_start_period() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput">start_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod">start_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_period_input`<sup>Optional</sup> <a name="start_period_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput"></a>

```python
start_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_period`<sup>Required</sup> <a name="start_period" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod"></a>

```python
start_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionHealthCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop">reset_drop</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_drop` <a name="reset_drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop"></a>

```python
def reset_drop() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput">add_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput">drop_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add">add</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop">drop</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput"></a>

```python
add_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drop_input`<sup>Optional</sup> <a name="drop_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput"></a>

```python
drop_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add"></a>

```python
add: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```python
drop: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath">reset_container_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_path` <a name="reset_container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath"></a>

```python
def reset_container_path() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput">container_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput">host_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath">host_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_path_input`<sup>Optional</sup> <a name="container_path_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput"></a>

```python
container_path_input: str
```

- *Type:* str

---

##### `host_path_input`<sup>Optional</sup> <a name="host_path_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput"></a>

```python
host_path_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities">put_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice">put_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs">put_tmpfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice">reset_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled">reset_init_process_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs">reset_tmpfs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capabilities` <a name="put_capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities"></a>

```python
def put_capabilities(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>]

---

##### `put_device` <a name="put_device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice"></a>

```python
def put_device(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>]

---

##### `put_tmpfs` <a name="put_tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs"></a>

```python
def put_tmpfs(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>]

---

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_device` <a name="reset_device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice"></a>

```python
def reset_device() -> None
```

##### `reset_init_process_enabled` <a name="reset_init_process_enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled"></a>

```python
def reset_init_process_enabled() -> None
```

##### `reset_tmpfs` <a name="reset_tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs"></a>

```python
def reset_tmpfs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device">device</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs">tmpfs</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput">capabilities_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput">device_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput">init_process_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput">tmpfs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled">init_process_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities"></a>

```python
capabilities: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a>

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device"></a>

```python
device: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a>

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs"></a>

```python
tmpfs: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput"></a>

```python
capabilities_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>]

---

##### `device_input`<sup>Optional</sup> <a name="device_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput"></a>

```python
device_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>]

---

##### `init_process_enabled_input`<sup>Optional</sup> <a name="init_process_enabled_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput"></a>

```python
init_process_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tmpfs_input`<sup>Optional</sup> <a name="tmpfs_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput"></a>

```python
tmpfs_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>]

---

##### `init_process_enabled`<sup>Required</sup> <a name="init_process_enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled"></a>

```python
init_process_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput">container_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_path_input`<sup>Optional</sup> <a name="container_path_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput"></a>

```python
container_path_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionList <a name="EcsDaemonTaskDefinitionContainerDefinitionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinition]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption">put_secret_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption">reset_secret_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_option` <a name="put_secret_option" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption"></a>

```python
def put_secret_option(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>]

---

##### `reset_options` <a name="reset_options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_secret_option` <a name="reset_secret_option" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption"></a>

```python
def reset_secret_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption">secret_option</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput">log_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput">secret_option_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver">log_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_option`<sup>Required</sup> <a name="secret_option" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption"></a>

```python
secret_option: EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a>

---

##### `log_driver_input`<sup>Optional</sup> <a name="log_driver_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput"></a>

```python
log_driver_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_option_input`<sup>Optional</sup> <a name="secret_option_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput"></a>

```python
secret_option_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>]

---

##### `log_driver`<sup>Required</sup> <a name="log_driver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver"></a>

```python
log_driver: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput">value_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom">value_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```python
value_from_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointList <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionMountPoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath">reset_container_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume">reset_source_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_path` <a name="reset_container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath"></a>

```python
def reset_container_path() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_source_volume` <a name="reset_source_volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume"></a>

```python
def reset_source_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput">container_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput">source_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume">source_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_path_input`<sup>Optional</sup> <a name="container_path_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput"></a>

```python
container_path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_volume_input`<sup>Optional</sup> <a name="source_volume_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput"></a>

```python
source_volume_input: str
```

- *Type:* str

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_volume`<sup>Required</sup> <a name="source_volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume"></a>

```python
source_volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionMountPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn">put_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile">put_environment_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration">put_firelens_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters">put_linux_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration">put_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint">put_mount_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials">put_repository_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy">put_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl">put_system_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit">put_ulimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint">reset_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile">reset_environment_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential">reset_essential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration">reset_firelens_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive">reset_interactive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters">reset_linux_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration">reset_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation">reset_memory_reservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint">reset_mount_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged">reset_privileged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal">reset_pseudo_terminal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem">reset_readonly_root_filesystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials">reset_repository_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy">reset_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout">reset_start_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout">reset_stop_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl">reset_system_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit">reset_ulimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser">reset_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_depends_on` <a name="put_depends_on" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn"></a>

```python
def put_depends_on(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionDependsOn]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>]

---

##### `put_environment` <a name="put_environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment"></a>

```python
def put_environment(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironment]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>]

---

##### `put_environment_file` <a name="put_environment_file" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile"></a>

```python
def put_environment_file(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>]

---

##### `put_firelens_configuration` <a name="put_firelens_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration"></a>

```python
def put_firelens_configuration(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>]

---

##### `put_health_check` <a name="put_health_check" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck"></a>

```python
def put_health_check(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionHealthCheck]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>]

---

##### `put_linux_parameters` <a name="put_linux_parameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters"></a>

```python
def put_linux_parameters(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>]

---

##### `put_log_configuration` <a name="put_log_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration"></a>

```python
def put_log_configuration(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>]

---

##### `put_mount_point` <a name="put_mount_point" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint"></a>

```python
def put_mount_point(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionMountPoint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>]

---

##### `put_repository_credentials` <a name="put_repository_credentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials"></a>

```python
def put_repository_credentials(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>]

---

##### `put_restart_policy` <a name="put_restart_policy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy"></a>

```python
def put_restart_policy(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>]

---

##### `put_secret` <a name="put_secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret"></a>

```python
def put_secret(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSecret]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>]

---

##### `put_system_control` <a name="put_system_control" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl"></a>

```python
def put_system_control(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSystemControl]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>]

---

##### `put_ulimit` <a name="put_ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit"></a>

```python
def put_ulimit(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionUlimit]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>]

---

##### `reset_command` <a name="reset_command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_entry_point` <a name="reset_entry_point" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint"></a>

```python
def reset_entry_point() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_environment_file` <a name="reset_environment_file" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile"></a>

```python
def reset_environment_file() -> None
```

##### `reset_essential` <a name="reset_essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential"></a>

```python
def reset_essential() -> None
```

##### `reset_firelens_configuration` <a name="reset_firelens_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration"></a>

```python
def reset_firelens_configuration() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_interactive` <a name="reset_interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive"></a>

```python
def reset_interactive() -> None
```

##### `reset_linux_parameters` <a name="reset_linux_parameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters"></a>

```python
def reset_linux_parameters() -> None
```

##### `reset_log_configuration` <a name="reset_log_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration"></a>

```python
def reset_log_configuration() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_memory_reservation` <a name="reset_memory_reservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation"></a>

```python
def reset_memory_reservation() -> None
```

##### `reset_mount_point` <a name="reset_mount_point" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint"></a>

```python
def reset_mount_point() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_privileged` <a name="reset_privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged"></a>

```python
def reset_privileged() -> None
```

##### `reset_pseudo_terminal` <a name="reset_pseudo_terminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal"></a>

```python
def reset_pseudo_terminal() -> None
```

##### `reset_readonly_root_filesystem` <a name="reset_readonly_root_filesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem"></a>

```python
def reset_readonly_root_filesystem() -> None
```

##### `reset_repository_credentials` <a name="reset_repository_credentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials"></a>

```python
def reset_repository_credentials() -> None
```

##### `reset_restart_policy` <a name="reset_restart_policy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy"></a>

```python
def reset_restart_policy() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_start_timeout` <a name="reset_start_timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout"></a>

```python
def reset_start_timeout() -> None
```

##### `reset_stop_timeout` <a name="reset_stop_timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout"></a>

```python
def reset_stop_timeout() -> None
```

##### `reset_system_control` <a name="reset_system_control" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl"></a>

```python
def reset_system_control() -> None
```

##### `reset_ulimit` <a name="reset_ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit"></a>

```python
def reset_ulimit() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser"></a>

```python
def reset_user() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn">depends_on</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile">environment_file</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration">firelens_configuration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters">linux_parameters</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint">mount_point</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials">repository_credentials</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy">restart_policy</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl">system_control</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit">ulimit</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput">entry_point_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput">environment_file_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput">environment_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput">essential_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput">firelens_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput">health_check_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput">interactive_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput">linux_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput">log_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput">memory_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput">privileged_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput">pseudo_terminal_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput">readonly_root_filesystem_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput">repository_credentials_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput">restart_policy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput">secret_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput">start_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput">stop_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput">system_control_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput">ulimit_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential">essential</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive">interactive</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged">privileged</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal">pseudo_terminal</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem">readonly_root_filesystem</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout">start_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout">stop_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn"></a>

```python
depends_on: EcsDaemonTaskDefinitionContainerDefinitionDependsOnList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment"></a>

```python
environment: EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a>

---

##### `environment_file`<sup>Required</sup> <a name="environment_file" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile"></a>

```python
environment_file: EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a>

---

##### `firelens_configuration`<sup>Required</sup> <a name="firelens_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration"></a>

```python
firelens_configuration: EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a>

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck"></a>

```python
health_check: EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a>

---

##### `linux_parameters`<sup>Required</sup> <a name="linux_parameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters"></a>

```python
linux_parameters: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a>

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration"></a>

```python
log_configuration: EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a>

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint"></a>

```python
mount_point: EcsDaemonTaskDefinitionContainerDefinitionMountPointList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a>

---

##### `repository_credentials`<sup>Required</sup> <a name="repository_credentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials"></a>

```python
repository_credentials: EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a>

---

##### `restart_policy`<sup>Required</sup> <a name="restart_policy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy"></a>

```python
restart_policy: EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret"></a>

```python
secret: EcsDaemonTaskDefinitionContainerDefinitionSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a>

---

##### `system_control`<sup>Required</sup> <a name="system_control" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl"></a>

```python
system_control: EcsDaemonTaskDefinitionContainerDefinitionSystemControlList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a>

---

##### `ulimit`<sup>Required</sup> <a name="ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit"></a>

```python
ulimit: EcsDaemonTaskDefinitionContainerDefinitionUlimitList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a>

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionDependsOn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>]

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput"></a>

```python
entry_point_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_file_input`<sup>Optional</sup> <a name="environment_file_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput"></a>

```python
environment_file_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput"></a>

```python
environment_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionEnvironment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>]

---

##### `essential_input`<sup>Optional</sup> <a name="essential_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput"></a>

```python
essential_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `firelens_configuration_input`<sup>Optional</sup> <a name="firelens_configuration_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput"></a>

```python
firelens_configuration_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>]

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput"></a>

```python
health_check_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionHealthCheck]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `interactive_input`<sup>Optional</sup> <a name="interactive_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput"></a>

```python
interactive_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `linux_parameters_input`<sup>Optional</sup> <a name="linux_parameters_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput"></a>

```python
linux_parameters_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>]

---

##### `log_configuration_input`<sup>Optional</sup> <a name="log_configuration_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput"></a>

```python
log_configuration_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_input`<sup>Optional</sup> <a name="memory_reservation_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput"></a>

```python
memory_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput"></a>

```python
mount_point_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionMountPoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `privileged_input`<sup>Optional</sup> <a name="privileged_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput"></a>

```python
privileged_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pseudo_terminal_input`<sup>Optional</sup> <a name="pseudo_terminal_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput"></a>

```python
pseudo_terminal_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `readonly_root_filesystem_input`<sup>Optional</sup> <a name="readonly_root_filesystem_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput"></a>

```python
readonly_root_filesystem_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `repository_credentials_input`<sup>Optional</sup> <a name="repository_credentials_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput"></a>

```python
repository_credentials_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>]

---

##### `restart_policy_input`<sup>Optional</sup> <a name="restart_policy_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput"></a>

```python
restart_policy_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput"></a>

```python
secret_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>]

---

##### `start_timeout_input`<sup>Optional</sup> <a name="start_timeout_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput"></a>

```python
start_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_timeout_input`<sup>Optional</sup> <a name="stop_timeout_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput"></a>

```python
stop_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_control_input`<sup>Optional</sup> <a name="system_control_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput"></a>

```python
system_control_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSystemControl]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>]

---

##### `ulimit_input`<sup>Optional</sup> <a name="ulimit_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput"></a>

```python
ulimit_input: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionUlimit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential"></a>

```python
essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `interactive`<sup>Required</sup> <a name="interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive"></a>

```python
interactive: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation`<sup>Required</sup> <a name="memory_reservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged"></a>

```python
privileged: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pseudo_terminal`<sup>Required</sup> <a name="pseudo_terminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal"></a>

```python
pseudo_terminal: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `readonly_root_filesystem`<sup>Required</sup> <a name="readonly_root_filesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem"></a>

```python
readonly_root_filesystem: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `start_timeout`<sup>Required</sup> <a name="start_timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout"></a>

```python
start_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_timeout`<sup>Required</sup> <a name="stop_timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout"></a>

```python
stop_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput">credentials_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter">credentials_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials_parameter_input`<sup>Optional</sup> <a name="credentials_parameter_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```python
credentials_parameter_input: str
```

- *Type:* str

---

##### `credentials_parameter`<sup>Required</sup> <a name="credentials_parameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```python
credentials_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes">reset_ignored_exit_codes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod">reset_restart_attempt_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignored_exit_codes` <a name="reset_ignored_exit_codes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes"></a>

```python
def reset_ignored_exit_codes() -> None
```

##### `reset_restart_attempt_period` <a name="reset_restart_attempt_period" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod"></a>

```python
def reset_restart_attempt_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput">ignored_exit_codes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput">restart_attempt_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes">ignored_exit_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod">restart_attempt_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignored_exit_codes_input`<sup>Optional</sup> <a name="ignored_exit_codes_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput"></a>

```python
ignored_exit_codes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `restart_attempt_period_input`<sup>Optional</sup> <a name="restart_attempt_period_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput"></a>

```python
restart_attempt_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignored_exit_codes`<sup>Required</sup> <a name="ignored_exit_codes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```python
ignored_exit_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `restart_attempt_period`<sup>Required</sup> <a name="restart_attempt_period" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```python
restart_attempt_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretList <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSecret]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput">value_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom">value_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput"></a>

```python
value_from_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlList <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionSystemControl]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSystemControl
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitList <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionContainerDefinitionUlimit]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>]

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput">hard_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput">soft_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit">hard_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit">soft_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hard_limit_input`<sup>Optional</sup> <a name="hard_limit_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput"></a>

```python
hard_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `soft_limit_input`<sup>Optional</sup> <a name="soft_limit_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput"></a>

```python
soft_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hard_limit`<sup>Required</sup> <a name="hard_limit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit"></a>

```python
hard_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `soft_limit`<sup>Required</sup> <a name="soft_limit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit"></a>

```python
soft_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionUlimit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>

---


### EcsDaemonTaskDefinitionVolumeHostList <a name="EcsDaemonTaskDefinitionVolumeHostList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionVolumeHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionVolumeHost]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>]

---


### EcsDaemonTaskDefinitionVolumeHostOutputReference <a name="EcsDaemonTaskDefinitionVolumeHostOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath">reset_source_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_path` <a name="reset_source_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath"></a>

```python
def reset_source_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput">source_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath">source_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_path_input`<sup>Optional</sup> <a name="source_path_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput"></a>

```python
source_path_input: str
```

- *Type:* str

---

##### `source_path`<sup>Required</sup> <a name="source_path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionVolumeHost
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>

---


### EcsDaemonTaskDefinitionVolumeList <a name="EcsDaemonTaskDefinitionVolumeList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTaskDefinitionVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTaskDefinitionVolume]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>]

---


### EcsDaemonTaskDefinitionVolumeOutputReference <a name="EcsDaemonTaskDefinitionVolumeOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ecs_daemon_task_definition

ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost">put_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost">reset_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_host` <a name="put_host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost"></a>

```python
def put_host(
  value: IResolvable | typing.List[EcsDaemonTaskDefinitionVolumeHost]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>]

---

##### `reset_host` <a name="reset_host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host">host</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput">host_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host"></a>

```python
host: EcsDaemonTaskDefinitionVolumeHostList
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput"></a>

```python
host_input: IResolvable | typing.List[EcsDaemonTaskDefinitionVolumeHost]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTaskDefinitionVolume
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>

---



