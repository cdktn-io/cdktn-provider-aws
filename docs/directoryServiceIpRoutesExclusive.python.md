# `directoryServiceIpRoutesExclusive` Submodule <a name="`directoryServiceIpRoutesExclusive` Submodule" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceIpRoutesExclusive <a name="DirectoryServiceIpRoutesExclusive" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive aws_directory_service_ip_routes_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_id: str,
  ip_route: IResolvable | typing.List[DirectoryServiceIpRoutesExclusiveIpRoute] = None,
  region: str = None,
  timeouts: DirectoryServiceIpRoutesExclusiveTimeouts = None,
  update_security_group_for_directory_controllers: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.ipRoute">ip_route</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]</code> | ip_route block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.updateSecurityGroupForDirectoryControllers">update_security_group_for_directory_controllers</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}.

---

##### `ip_route`<sup>Optional</sup> <a name="ip_route" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.ipRoute"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]

ip_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}

---

##### `update_security_group_for_directory_controllers`<sup>Optional</sup> <a name="update_security_group_for_directory_controllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.updateSecurityGroupForDirectoryControllers"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute">put_ip_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute">reset_ip_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers">reset_update_security_group_for_directory_controllers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_route` <a name="put_ip_route" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute"></a>

```python
def put_ip_route(
  value: IResolvable | typing.List[DirectoryServiceIpRoutesExclusiveIpRoute]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#create DirectoryServiceIpRoutesExclusive#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update DirectoryServiceIpRoutesExclusive#update}

---

##### `reset_ip_route` <a name="reset_ip_route" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute"></a>

```python
def reset_ip_route() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_security_group_for_directory_controllers` <a name="reset_update_security_group_for_directory_controllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers"></a>

```python
def reset_update_security_group_for_directory_controllers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectoryServiceIpRoutesExclusive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectoryServiceIpRoutesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceIpRoutesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute">ip_route</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput">ip_route_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput">update_security_group_for_directory_controllers_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers">update_security_group_for_directory_controllers</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ip_route`<sup>Required</sup> <a name="ip_route" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute"></a>

```python
ip_route: DirectoryServiceIpRoutesExclusiveIpRouteList
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts"></a>

```python
timeouts: DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a>

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `ip_route_input`<sup>Optional</sup> <a name="ip_route_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput"></a>

```python
ip_route_input: IResolvable | typing.List[DirectoryServiceIpRoutesExclusiveIpRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DirectoryServiceIpRoutesExclusiveTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `update_security_group_for_directory_controllers_input`<sup>Optional</sup> <a name="update_security_group_for_directory_controllers_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput"></a>

```python
update_security_group_for_directory_controllers_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `update_security_group_for_directory_controllers`<sup>Required</sup> <a name="update_security_group_for_directory_controllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers"></a>

```python
update_security_group_for_directory_controllers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceIpRoutesExclusiveConfig <a name="DirectoryServiceIpRoutesExclusiveConfig" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.Initializer"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_id: str,
  ip_route: IResolvable | typing.List[DirectoryServiceIpRoutesExclusiveIpRoute] = None,
  region: str = None,
  timeouts: DirectoryServiceIpRoutesExclusiveTimeouts = None,
  update_security_group_for_directory_controllers: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute">ip_route</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]</code> | ip_route block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers">update_security_group_for_directory_controllers</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}.

---

##### `ip_route`<sup>Optional</sup> <a name="ip_route" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute"></a>

```python
ip_route: IResolvable | typing.List[DirectoryServiceIpRoutesExclusiveIpRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]

ip_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts"></a>

```python
timeouts: DirectoryServiceIpRoutesExclusiveTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}

---

##### `update_security_group_for_directory_controllers`<sup>Optional</sup> <a name="update_security_group_for_directory_controllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers"></a>

```python
update_security_group_for_directory_controllers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}.

---

### DirectoryServiceIpRoutesExclusiveIpRoute <a name="DirectoryServiceIpRoutesExclusiveIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.Initializer"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute(
  cidr_ip: str = None,
  cidr_ipv6: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp">cidr_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}. |

---

##### `cidr_ip`<sup>Optional</sup> <a name="cidr_ip" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp"></a>

```python
cidr_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}.

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}.

---

### DirectoryServiceIpRoutesExclusiveTimeouts <a name="DirectoryServiceIpRoutesExclusiveTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#create DirectoryServiceIpRoutesExclusive#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.67.0/docs/resources/directory_service_ip_routes_exclusive#update DirectoryServiceIpRoutesExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceIpRoutesExclusiveIpRouteList <a name="DirectoryServiceIpRoutesExclusiveIpRouteList" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DirectoryServiceIpRoutesExclusiveIpRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DirectoryServiceIpRoutesExclusiveIpRoute]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>]

---


### DirectoryServiceIpRoutesExclusiveIpRouteOutputReference <a name="DirectoryServiceIpRoutesExclusiveIpRouteOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp">reset_cidr_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6">reset_cidr_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_ip` <a name="reset_cidr_ip" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp"></a>

```python
def reset_cidr_ip() -> None
```

##### `reset_cidr_ipv6` <a name="reset_cidr_ipv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6"></a>

```python
def reset_cidr_ipv6() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput">cidr_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input">cidr_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp">cidr_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_ip_input`<sup>Optional</sup> <a name="cidr_ip_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput"></a>

```python
cidr_ip_input: str
```

- *Type:* str

---

##### `cidr_ipv6_input`<sup>Optional</sup> <a name="cidr_ipv6_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input"></a>

```python
cidr_ipv6_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `cidr_ip`<sup>Required</sup> <a name="cidr_ip" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp"></a>

```python
cidr_ip: str
```

- *Type:* str

---

##### `cidr_ipv6`<sup>Required</sup> <a name="cidr_ipv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectoryServiceIpRoutesExclusiveIpRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>

---


### DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference <a name="DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import directory_service_ip_routes_exclusive

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectoryServiceIpRoutesExclusiveTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---



