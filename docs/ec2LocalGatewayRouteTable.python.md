# `ec2LocalGatewayRouteTable` Submodule <a name="`ec2LocalGatewayRouteTable` Submodule" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTable <a name="Ec2LocalGatewayRouteTable" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table aws_ec2_local_gateway_route_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  local_gateway_id: str,
  mode: str,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Ec2LocalGatewayRouteTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#local_gateway_id Ec2LocalGatewayRouteTable#local_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#mode Ec2LocalGatewayRouteTable#mode}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#tags Ec2LocalGatewayRouteTable#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.localGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#local_gateway_id Ec2LocalGatewayRouteTable#local_gateway_id}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#mode Ec2LocalGatewayRouteTable#mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#region Ec2LocalGatewayRouteTable#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#tags Ec2LocalGatewayRouteTable#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#timeouts Ec2LocalGatewayRouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#create Ec2LocalGatewayRouteTable#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#delete Ec2LocalGatewayRouteTable#delete}

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isConstruct"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformElement"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformResource"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2LocalGatewayRouteTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2LocalGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference">Ec2LocalGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayIdInput">local_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `local_gateway_route_table_id`<sup>Required</sup> <a name="local_gateway_route_table_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayRouteTableId"></a>

```python
local_gateway_route_table_id: str
```

- *Type:* str

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.timeouts"></a>

```python
timeouts: Ec2LocalGatewayRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference">Ec2LocalGatewayRouteTableTimeoutsOutputReference</a>

---

##### `local_gateway_id_input`<sup>Optional</sup> <a name="local_gateway_id_input" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayIdInput"></a>

```python
local_gateway_id_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | Ec2LocalGatewayRouteTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a>

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableConfig <a name="Ec2LocalGatewayRouteTableConfig" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.Initializer"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  local_gateway_id: str,
  mode: str,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Ec2LocalGatewayRouteTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#local_gateway_id Ec2LocalGatewayRouteTable#local_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#mode Ec2LocalGatewayRouteTable#mode}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#tags Ec2LocalGatewayRouteTable#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#local_gateway_id Ec2LocalGatewayRouteTable#local_gateway_id}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#mode Ec2LocalGatewayRouteTable#mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#region Ec2LocalGatewayRouteTable#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#tags Ec2LocalGatewayRouteTable#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.timeouts"></a>

```python
timeouts: Ec2LocalGatewayRouteTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#timeouts Ec2LocalGatewayRouteTable#timeouts}

---

### Ec2LocalGatewayRouteTableTimeouts <a name="Ec2LocalGatewayRouteTableTimeouts" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#create Ec2LocalGatewayRouteTable#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_local_gateway_route_table#delete Ec2LocalGatewayRouteTable#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayRouteTableTimeoutsOutputReference <a name="Ec2LocalGatewayRouteTableTimeoutsOutputReference" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ec2_local_gateway_route_table

ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2LocalGatewayRouteTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTimeouts">Ec2LocalGatewayRouteTableTimeouts</a>

---



