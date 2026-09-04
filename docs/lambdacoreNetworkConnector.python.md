# `lambdacoreNetworkConnector` Submodule <a name="`lambdacoreNetworkConnector` Submodule" id="@cdktn/provider-aws.lambdacoreNetworkConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdacoreNetworkConnector <a name="LambdacoreNetworkConnector" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector aws_lambdacore_network_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  operator_role: str,
  configuration: IResolvable | typing.List[LambdacoreNetworkConnectorConfiguration] = None,
  region: str = None,
  timeouts: LambdacoreNetworkConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#name LambdacoreNetworkConnector#name}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.operatorRole">operator_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#operator_role LambdacoreNetworkConnector#operator_role}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.configuration">configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#name LambdacoreNetworkConnector#name}.

---

##### `operator_role`<sup>Required</sup> <a name="operator_role" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.operatorRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#operator_role LambdacoreNetworkConnector#operator_role}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.configuration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#configuration LambdacoreNetworkConnector#configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#region LambdacoreNetworkConnector#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#timeouts LambdacoreNetworkConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putConfiguration"></a>

```python
def put_configuration(
  value: IResolvable | typing.List[LambdacoreNetworkConnectorConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#create LambdacoreNetworkConnector#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#delete LambdacoreNetworkConnector#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#update LambdacoreNetworkConnector#update}

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdacoreNetworkConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isConstruct"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformElement"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformResource"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdacoreNetworkConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdacoreNetworkConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdacoreNetworkConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdacoreNetworkConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList">LambdacoreNetworkConnectorConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference">LambdacoreNetworkConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRoleInput">operator_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRole">operator_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configuration"></a>

```python
configuration: LambdacoreNetworkConnectorConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList">LambdacoreNetworkConnectorConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeouts"></a>

```python
timeouts: LambdacoreNetworkConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference">LambdacoreNetworkConnectorTimeoutsOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.configurationInput"></a>

```python
configuration_input: IResolvable | typing.List[LambdacoreNetworkConnectorConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_role_input`<sup>Optional</sup> <a name="operator_role_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRoleInput"></a>

```python
operator_role_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LambdacoreNetworkConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator_role`<sup>Required</sup> <a name="operator_role" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.operatorRole"></a>

```python
operator_role: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdacoreNetworkConnectorConfig <a name="LambdacoreNetworkConnectorConfig" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  operator_role: str,
  configuration: IResolvable | typing.List[LambdacoreNetworkConnectorConfiguration] = None,
  region: str = None,
  timeouts: LambdacoreNetworkConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#name LambdacoreNetworkConnector#name}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.operatorRole">operator_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#operator_role LambdacoreNetworkConnector#operator_role}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.configuration">configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#name LambdacoreNetworkConnector#name}.

---

##### `operator_role`<sup>Required</sup> <a name="operator_role" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.operatorRole"></a>

```python
operator_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#operator_role LambdacoreNetworkConnector#operator_role}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.configuration"></a>

```python
configuration: IResolvable | typing.List[LambdacoreNetworkConnectorConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#configuration LambdacoreNetworkConnector#configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#region LambdacoreNetworkConnector#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfig.property.timeouts"></a>

```python
timeouts: LambdacoreNetworkConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#timeouts LambdacoreNetworkConnector#timeouts}

---

### LambdacoreNetworkConnectorConfiguration <a name="LambdacoreNetworkConnectorConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration(
  vpc_egress_configuration: IResolvable | typing.List[LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration.property.vpcEgressConfiguration">vpc_egress_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>]</code> | vpc_egress_configuration block. |

---

##### `vpc_egress_configuration`<sup>Optional</sup> <a name="vpc_egress_configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration.property.vpcEgressConfiguration"></a>

```python
vpc_egress_configuration: IResolvable | typing.List[LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>]

vpc_egress_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#vpc_egress_configuration LambdacoreNetworkConnector#vpc_egress_configuration}

---

### LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration <a name="LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration(
  associated_compute_resource_types: typing.List[str],
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  network_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.associatedComputeResourceTypes">associated_compute_resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#associated_compute_resource_types LambdacoreNetworkConnector#associated_compute_resource_types}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#security_group_ids LambdacoreNetworkConnector#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#subnet_ids LambdacoreNetworkConnector#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.networkProtocol">network_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#network_protocol LambdacoreNetworkConnector#network_protocol}. |

---

##### `associated_compute_resource_types`<sup>Required</sup> <a name="associated_compute_resource_types" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.associatedComputeResourceTypes"></a>

```python
associated_compute_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#associated_compute_resource_types LambdacoreNetworkConnector#associated_compute_resource_types}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#security_group_ids LambdacoreNetworkConnector#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#subnet_ids LambdacoreNetworkConnector#subnet_ids}.

---

##### `network_protocol`<sup>Optional</sup> <a name="network_protocol" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration.property.networkProtocol"></a>

```python
network_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#network_protocol LambdacoreNetworkConnector#network_protocol}.

---

### LambdacoreNetworkConnectorTimeouts <a name="LambdacoreNetworkConnectorTimeouts" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#create LambdacoreNetworkConnector#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#delete LambdacoreNetworkConnector#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdacore_network_connector#update LambdacoreNetworkConnector#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdacoreNetworkConnectorConfigurationList <a name="LambdacoreNetworkConnectorConfigurationList" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdacoreNetworkConnectorConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdacoreNetworkConnectorConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>]

---


### LambdacoreNetworkConnectorConfigurationOutputReference <a name="LambdacoreNetworkConnectorConfigurationOutputReference" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration">put_vpc_egress_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resetVpcEgressConfiguration">reset_vpc_egress_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_egress_configuration` <a name="put_vpc_egress_configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration"></a>

```python
def put_vpc_egress_configuration(
  value: IResolvable | typing.List[LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>]

---

##### `reset_vpc_egress_configuration` <a name="reset_vpc_egress_configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.resetVpcEgressConfiguration"></a>

```python
def reset_vpc_egress_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration">vpc_egress_configuration</a></code> | <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList">LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfigurationInput">vpc_egress_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_egress_configuration`<sup>Required</sup> <a name="vpc_egress_configuration" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration"></a>

```python
vpc_egress_configuration: LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList">LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList</a>

---

##### `vpc_egress_configuration_input`<sup>Optional</sup> <a name="vpc_egress_configuration_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.vpcEgressConfigurationInput"></a>

```python
vpc_egress_configuration_input: IResolvable | typing.List[LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdacoreNetworkConnectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfiguration">LambdacoreNetworkConnectorConfiguration</a>

---


### LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList <a name="LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>]

---


### LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference <a name="LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetNetworkProtocol">reset_network_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_protocol` <a name="reset_network_protocol" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetNetworkProtocol"></a>

```python
def reset_network_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypesInput">associated_compute_resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocolInput">network_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes">associated_compute_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol">network_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_compute_resource_types_input`<sup>Optional</sup> <a name="associated_compute_resource_types_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypesInput"></a>

```python
associated_compute_resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_protocol_input`<sup>Optional</sup> <a name="network_protocol_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocolInput"></a>

```python
network_protocol_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_compute_resource_types`<sup>Required</sup> <a name="associated_compute_resource_types" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes"></a>

```python
associated_compute_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_protocol`<sup>Required</sup> <a name="network_protocol" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol"></a>

```python
network_protocol: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration">LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration</a>

---


### LambdacoreNetworkConnectorTimeoutsOutputReference <a name="LambdacoreNetworkConnectorTimeoutsOutputReference" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdacore_network_connector

lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdacoreNetworkConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdacoreNetworkConnector.LambdacoreNetworkConnectorTimeouts">LambdacoreNetworkConnectorTimeouts</a>

---



