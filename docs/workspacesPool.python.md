# `workspacesPool` Submodule <a name="`workspacesPool` Submodule" id="@cdktn/provider-aws.workspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesPool <a name="WorkspacesPool" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool aws_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_id: str,
  description: str,
  directory_id: str,
  pool_name: str,
  running_mode: str,
  application_settings: IResolvable | typing.List[WorkspacesPoolApplicationSettings] = None,
  capacity: IResolvable | typing.List[WorkspacesPoolCapacity] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkspacesPoolTimeouts = None,
  timeout_settings: IResolvable | typing.List[WorkspacesPoolTimeoutSettings] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#bundle_id WorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#description WorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#directory_id WorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.poolName">pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#pool_name WorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.runningMode">running_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#running_mode WorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.applicationSettings">application_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#application_settings WorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.capacity">capacity</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]</code> | capacity block. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#tags WorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.timeoutSettings">timeout_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeout_settings WorkspacesPool#timeout_settings}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.bundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#bundle_id WorkspacesPool#bundle_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#description WorkspacesPool#description}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#directory_id WorkspacesPool#directory_id}.

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.poolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#pool_name WorkspacesPool#pool_name}.

---

##### `running_mode`<sup>Required</sup> <a name="running_mode" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.runningMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#running_mode WorkspacesPool#running_mode}.

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.applicationSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#application_settings WorkspacesPool#application_settings}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.capacity"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#capacity WorkspacesPool#capacity}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#region WorkspacesPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#tags WorkspacesPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeouts WorkspacesPool#timeouts}

---

##### `timeout_settings`<sup>Optional</sup> <a name="timeout_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.timeoutSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeout_settings WorkspacesPool#timeout_settings}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putApplicationSettings">put_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeoutSettings">put_timeout_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetApplicationSettings">reset_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeoutSettings">reset_timeout_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_settings` <a name="put_application_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putApplicationSettings"></a>

```python
def put_application_settings(
  value: IResolvable | typing.List[WorkspacesPoolApplicationSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putApplicationSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]

---

##### `put_capacity` <a name="put_capacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putCapacity"></a>

```python
def put_capacity(
  value: IResolvable | typing.List[WorkspacesPoolCapacity]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putCapacity.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#create WorkspacesPool#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#delete WorkspacesPool#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#update WorkspacesPool#update}

---

##### `put_timeout_settings` <a name="put_timeout_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeoutSettings"></a>

```python
def put_timeout_settings(
  value: IResolvable | typing.List[WorkspacesPoolTimeoutSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeoutSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]

---

##### `reset_application_settings` <a name="reset_application_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetApplicationSettings"></a>

```python
def reset_application_settings() -> None
```

##### `reset_capacity` <a name="reset_capacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timeout_settings` <a name="reset_timeout_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeoutSettings"></a>

```python
def reset_timeout_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isConstruct"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformElement"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformResource"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspacesPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList">WorkspacesPoolApplicationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList">WorkspacesPoolCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityStatus">capacity_status</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList">WorkspacesPoolCapacityStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolArn">pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference">WorkspacesPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettings">timeout_settings</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList">WorkspacesPoolTimeoutSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettingsInput">application_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityInput">capacity_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolNameInput">pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningModeInput">running_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettingsInput">timeout_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolName">pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningMode">running_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_settings`<sup>Required</sup> <a name="application_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettings"></a>

```python
application_settings: WorkspacesPoolApplicationSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList">WorkspacesPoolApplicationSettingsList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacity"></a>

```python
capacity: WorkspacesPoolCapacityList
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList">WorkspacesPoolCapacityList</a>

---

##### `capacity_status`<sup>Required</sup> <a name="capacity_status" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityStatus"></a>

```python
capacity_status: WorkspacesPoolCapacityStatusList
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList">WorkspacesPoolCapacityStatusList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `pool_arn`<sup>Required</sup> <a name="pool_arn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolArn"></a>

```python
pool_arn: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeouts"></a>

```python
timeouts: WorkspacesPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference">WorkspacesPoolTimeoutsOutputReference</a>

---

##### `timeout_settings`<sup>Required</sup> <a name="timeout_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettings"></a>

```python
timeout_settings: WorkspacesPoolTimeoutSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList">WorkspacesPoolTimeoutSettingsList</a>

---

##### `application_settings_input`<sup>Optional</sup> <a name="application_settings_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettingsInput"></a>

```python
application_settings_input: IResolvable | typing.List[WorkspacesPoolApplicationSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityInput"></a>

```python
capacity_input: IResolvable | typing.List[WorkspacesPoolCapacity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `pool_name_input`<sup>Optional</sup> <a name="pool_name_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolNameInput"></a>

```python
pool_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `running_mode_input`<sup>Optional</sup> <a name="running_mode_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningModeInput"></a>

```python
running_mode_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_settings_input`<sup>Optional</sup> <a name="timeout_settings_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettingsInput"></a>

```python
timeout_settings_input: IResolvable | typing.List[WorkspacesPoolTimeoutSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WorkspacesPoolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `running_mode`<sup>Required</sup> <a name="running_mode" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesPoolApplicationSettings <a name="WorkspacesPoolApplicationSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolApplicationSettings(
  settings_group: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.settingsGroup">settings_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#settings_group WorkspacesPool#settings_group}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#status WorkspacesPool#status}. |

---

##### `settings_group`<sup>Optional</sup> <a name="settings_group" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#settings_group WorkspacesPool#settings_group}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#status WorkspacesPool#status}.

---

### WorkspacesPoolCapacity <a name="WorkspacesPoolCapacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolCapacity(
  desired_user_sessions: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity.property.desiredUserSessions">desired_user_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#desired_user_sessions WorkspacesPool#desired_user_sessions}. |

---

##### `desired_user_sessions`<sup>Required</sup> <a name="desired_user_sessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity.property.desiredUserSessions"></a>

```python
desired_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#desired_user_sessions WorkspacesPool#desired_user_sessions}.

---

### WorkspacesPoolCapacityStatus <a name="WorkspacesPoolCapacityStatus" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolCapacityStatus()
```


### WorkspacesPoolConfig <a name="WorkspacesPoolConfig" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_id: str,
  description: str,
  directory_id: str,
  pool_name: str,
  running_mode: str,
  application_settings: IResolvable | typing.List[WorkspacesPoolApplicationSettings] = None,
  capacity: IResolvable | typing.List[WorkspacesPoolCapacity] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkspacesPoolTimeouts = None,
  timeout_settings: IResolvable | typing.List[WorkspacesPoolTimeoutSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#bundle_id WorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#description WorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#directory_id WorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.poolName">pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#pool_name WorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.runningMode">running_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#running_mode WorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.applicationSettings">application_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#application_settings WorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.capacity">capacity</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]</code> | capacity block. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#tags WorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeoutSettings">timeout_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeout_settings WorkspacesPool#timeout_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#bundle_id WorkspacesPool#bundle_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#description WorkspacesPool#description}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#directory_id WorkspacesPool#directory_id}.

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#pool_name WorkspacesPool#pool_name}.

---

##### `running_mode`<sup>Required</sup> <a name="running_mode" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#running_mode WorkspacesPool#running_mode}.

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.applicationSettings"></a>

```python
application_settings: IResolvable | typing.List[WorkspacesPoolApplicationSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#application_settings WorkspacesPool#application_settings}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.capacity"></a>

```python
capacity: IResolvable | typing.List[WorkspacesPoolCapacity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#capacity WorkspacesPool#capacity}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#region WorkspacesPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#tags WorkspacesPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeouts"></a>

```python
timeouts: WorkspacesPoolTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeouts WorkspacesPool#timeouts}

---

##### `timeout_settings`<sup>Optional</sup> <a name="timeout_settings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeoutSettings"></a>

```python
timeout_settings: IResolvable | typing.List[WorkspacesPoolTimeoutSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeout_settings WorkspacesPool#timeout_settings}.

---

### WorkspacesPoolTimeouts <a name="WorkspacesPoolTimeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#create WorkspacesPool#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#delete WorkspacesPool#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#update WorkspacesPool#update}

---

### WorkspacesPoolTimeoutSettings <a name="WorkspacesPoolTimeoutSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolTimeoutSettings(
  disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  idle_disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  max_user_duration_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#disconnect_timeout_in_seconds WorkspacesPool#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesPool#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#max_user_duration_in_seconds WorkspacesPool#max_user_duration_in_seconds}. |

---

##### `disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds"></a>

```python
disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#disconnect_timeout_in_seconds WorkspacesPool#disconnect_timeout_in_seconds}.

---

##### `idle_disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds"></a>

```python
idle_disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

##### `max_user_duration_in_seconds`<sup>Optional</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds"></a>

```python
max_user_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#max_user_duration_in_seconds WorkspacesPool#max_user_duration_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesPoolApplicationSettingsList <a name="WorkspacesPoolApplicationSettingsList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolApplicationSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesPoolApplicationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesPoolApplicationSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>]

---


### WorkspacesPoolApplicationSettingsOutputReference <a name="WorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolApplicationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup">reset_settings_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_settings_group` <a name="reset_settings_group" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup"></a>

```python
def reset_settings_group() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput">settings_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">settings_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings_group_input`<sup>Optional</sup> <a name="settings_group_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```python
settings_group_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `settings_group`<sup>Required</sup> <a name="settings_group" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesPoolApplicationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>

---


### WorkspacesPoolCapacityList <a name="WorkspacesPoolCapacityList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolCapacityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesPoolCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesPoolCapacity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>]

---


### WorkspacesPoolCapacityOutputReference <a name="WorkspacesPoolCapacityOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput">desired_user_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessions">desired_user_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_user_sessions_input`<sup>Optional</sup> <a name="desired_user_sessions_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput"></a>

```python
desired_user_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_user_sessions`<sup>Required</sup> <a name="desired_user_sessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```python
desired_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesPoolCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>

---


### WorkspacesPoolCapacityStatusList <a name="WorkspacesPoolCapacityStatusList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolCapacityStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesPoolCapacityStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkspacesPoolCapacityStatusOutputReference <a name="WorkspacesPoolCapacityStatusOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolCapacityStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.activeUserSessions">active_user_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.actualUserSessions">actual_user_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.availableUserSessions">available_user_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.desiredUserSessions">desired_user_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus">WorkspacesPoolCapacityStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_user_sessions`<sup>Required</sup> <a name="active_user_sessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.activeUserSessions"></a>

```python
active_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `actual_user_sessions`<sup>Required</sup> <a name="actual_user_sessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.actualUserSessions"></a>

```python
actual_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_user_sessions`<sup>Required</sup> <a name="available_user_sessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.availableUserSessions"></a>

```python
available_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_user_sessions`<sup>Required</sup> <a name="desired_user_sessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.desiredUserSessions"></a>

```python
desired_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesPoolCapacityStatus
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus">WorkspacesPoolCapacityStatus</a>

---


### WorkspacesPoolTimeoutSettingsList <a name="WorkspacesPoolTimeoutSettingsList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolTimeoutSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesPoolTimeoutSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesPoolTimeoutSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>]

---


### WorkspacesPoolTimeoutSettingsOutputReference <a name="WorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds">reset_disconnect_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds">reset_idle_disconnect_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds">reset_max_user_duration_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disconnect_timeout_in_seconds` <a name="reset_disconnect_timeout_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds"></a>

```python
def reset_disconnect_timeout_in_seconds() -> None
```

##### `reset_idle_disconnect_timeout_in_seconds` <a name="reset_idle_disconnect_timeout_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds"></a>

```python
def reset_idle_disconnect_timeout_in_seconds() -> None
```

##### `reset_max_user_duration_in_seconds` <a name="reset_max_user_duration_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds"></a>

```python
def reset_max_user_duration_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput">disconnect_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput">idle_disconnect_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput">max_user_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect_timeout_in_seconds_input`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput"></a>

```python
disconnect_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_disconnect_timeout_in_seconds_input`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput"></a>

```python
idle_disconnect_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_duration_in_seconds_input`<sup>Optional</sup> <a name="max_user_duration_in_seconds_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput"></a>

```python
max_user_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disconnect_timeout_in_seconds`<sup>Required</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```python
disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_disconnect_timeout_in_seconds`<sup>Required</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```python
idle_disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_duration_in_seconds`<sup>Required</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```python
max_user_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesPoolTimeoutSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>

---


### WorkspacesPoolTimeoutsOutputReference <a name="WorkspacesPoolTimeoutsOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import workspaces_pool

workspacesPool.WorkspacesPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesPoolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

---



