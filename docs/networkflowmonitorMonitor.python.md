# `networkflowmonitorMonitor` Submodule <a name="`networkflowmonitorMonitor` Submodule" id="@cdktf/provider-aws.networkflowmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorMonitor <a name="NetworkflowmonitorMonitor" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor aws_networkflowmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  monitor_name: str,
  scope_arn: str,
  local_resource: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResource] = None,
  region: str = None,
  remote_resource: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResource] = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkflowmonitorMonitorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.monitorName">monitor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scopeArn">scope_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.localResource">local_resource</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]</code> | local_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.remoteResource">remote_resource</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]</code> | remote_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.monitorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}.

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scopeArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}.

---

##### `local_resource`<sup>Optional</sup> <a name="local_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.localResource"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]

local_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#local_resource NetworkflowmonitorMonitor#local_resource}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#region NetworkflowmonitorMonitor#region}

---

##### `remote_resource`<sup>Optional</sup> <a name="remote_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.remoteResource"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]

remote_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#remote_resource NetworkflowmonitorMonitor#remote_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#timeouts NetworkflowmonitorMonitor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource">put_local_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource">put_remote_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetLocalResource">reset_local_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResource">reset_remote_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_local_resource` <a name="put_local_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource"></a>

```python
def put_local_resource(
  value: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]

---

##### `put_remote_resource` <a name="put_remote_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource"></a>

```python
def put_remote_resource(
  value: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#create NetworkflowmonitorMonitor#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#delete NetworkflowmonitorMonitor#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#update NetworkflowmonitorMonitor#update}

---

##### `reset_local_resource` <a name="reset_local_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetLocalResource"></a>

```python
def reset_local_resource() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_remote_resource` <a name="reset_remote_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResource"></a>

```python
def reset_remote_resource() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkflowmonitorMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkflowmonitorMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkflowmonitorMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkflowmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResource">local_resource</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList">NetworkflowmonitorMonitorLocalResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorArn">monitor_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResource">remote_resource</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList">NetworkflowmonitorMonitorRemoteResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference">NetworkflowmonitorMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourceInput">local_resource_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput">monitor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourceInput">remote_resource_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput">scope_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn">scope_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `local_resource`<sup>Required</sup> <a name="local_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResource"></a>

```python
local_resource: NetworkflowmonitorMonitorLocalResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList">NetworkflowmonitorMonitorLocalResourceList</a>

---

##### `monitor_arn`<sup>Required</sup> <a name="monitor_arn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorArn"></a>

```python
monitor_arn: str
```

- *Type:* str

---

##### `remote_resource`<sup>Required</sup> <a name="remote_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResource"></a>

```python
remote_resource: NetworkflowmonitorMonitorRemoteResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList">NetworkflowmonitorMonitorRemoteResourceList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeouts"></a>

```python
timeouts: NetworkflowmonitorMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference">NetworkflowmonitorMonitorTimeoutsOutputReference</a>

---

##### `local_resource_input`<sup>Optional</sup> <a name="local_resource_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourceInput"></a>

```python
local_resource_input: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]

---

##### `monitor_name_input`<sup>Optional</sup> <a name="monitor_name_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput"></a>

```python
monitor_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `remote_resource_input`<sup>Optional</sup> <a name="remote_resource_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourceInput"></a>

```python
remote_resource_input: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]

---

##### `scope_arn_input`<sup>Optional</sup> <a name="scope_arn_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput"></a>

```python
scope_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkflowmonitorMonitorTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorMonitorConfig <a name="NetworkflowmonitorMonitorConfig" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  monitor_name: str,
  scope_arn: str,
  local_resource: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResource] = None,
  region: str = None,
  remote_resource: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResource] = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkflowmonitorMonitorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName">monitor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn">scope_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResource">local_resource</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]</code> | local_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResource">remote_resource</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]</code> | remote_resource block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}.

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}.

---

##### `local_resource`<sup>Optional</sup> <a name="local_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResource"></a>

```python
local_resource: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]

local_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#local_resource NetworkflowmonitorMonitor#local_resource}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#region NetworkflowmonitorMonitor#region}

---

##### `remote_resource`<sup>Optional</sup> <a name="remote_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResource"></a>

```python
remote_resource: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]

remote_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#remote_resource NetworkflowmonitorMonitor#remote_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.timeouts"></a>

```python
timeouts: NetworkflowmonitorMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#timeouts NetworkflowmonitorMonitor#timeouts}

---

### NetworkflowmonitorMonitorLocalResource <a name="NetworkflowmonitorMonitorLocalResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource(
  identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}.

---

### NetworkflowmonitorMonitorRemoteResource <a name="NetworkflowmonitorMonitorRemoteResource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource(
  identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}.

---

### NetworkflowmonitorMonitorTimeouts <a name="NetworkflowmonitorMonitorTimeouts" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#create NetworkflowmonitorMonitor#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#delete NetworkflowmonitorMonitor#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_monitor#update NetworkflowmonitorMonitor#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorMonitorLocalResourceList <a name="NetworkflowmonitorMonitorLocalResourceList" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkflowmonitorMonitorLocalResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>]

---


### NetworkflowmonitorMonitorLocalResourceOutputReference <a name="NetworkflowmonitorMonitorLocalResourceOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorMonitorLocalResource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResource">NetworkflowmonitorMonitorLocalResource</a>

---


### NetworkflowmonitorMonitorRemoteResourceList <a name="NetworkflowmonitorMonitorRemoteResourceList" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkflowmonitorMonitorRemoteResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>]

---


### NetworkflowmonitorMonitorRemoteResourceOutputReference <a name="NetworkflowmonitorMonitorRemoteResourceOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorMonitorRemoteResource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResource">NetworkflowmonitorMonitorRemoteResource</a>

---


### NetworkflowmonitorMonitorTimeoutsOutputReference <a name="NetworkflowmonitorMonitorTimeoutsOutputReference" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorMonitorTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkflowmonitorMonitor.NetworkflowmonitorMonitorTimeouts">NetworkflowmonitorMonitorTimeouts</a>

---



