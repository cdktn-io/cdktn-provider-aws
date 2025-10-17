# `bedrockagentcoreCodeInterpreter` Submodule <a name="`bedrockagentcoreCodeInterpreter` Submodule" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCodeInterpreter <a name="BedrockagentcoreCodeInterpreter" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter aws_bedrockagentcore_code_interpreter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter(
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
  description: str = None,
  execution_role_arn: str = None,
  network_configuration: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreCodeInterpreterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.networkConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#network_configuration BedrockagentcoreCodeInterpreter#network_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#region BedrockagentcoreCodeInterpreter#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#timeouts BedrockagentcoreCodeInterpreter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  value: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#create BedrockagentcoreCodeInterpreter#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#delete BedrockagentcoreCodeInterpreter#delete}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreCodeInterpreter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreCodeInterpreter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCodeInterpreter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn">code_interpreter_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId">code_interpreter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `code_interpreter_arn`<sup>Required</sup> <a name="code_interpreter_arn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn"></a>

```python
code_interpreter_arn: str
```

- *Type:* str

---

##### `code_interpreter_id`<sup>Required</sup> <a name="code_interpreter_id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId"></a>

```python
code_interpreter_id: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration"></a>

```python
network_configuration: BedrockagentcoreCodeInterpreterNetworkConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts"></a>

```python
timeouts: BedrockagentcoreCodeInterpreterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockagentcoreCodeInterpreterTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCodeInterpreterConfig <a name="BedrockagentcoreCodeInterpreterConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  execution_role_arn: str = None,
  network_configuration: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfiguration] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreCodeInterpreterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration">network_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration"></a>

```python
network_configuration: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#network_configuration BedrockagentcoreCodeInterpreter#network_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#region BedrockagentcoreCodeInterpreter#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcoreCodeInterpreterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#timeouts BedrockagentcoreCodeInterpreter#timeouts}

---

### BedrockagentcoreCodeInterpreterNetworkConfiguration <a name="BedrockagentcoreCodeInterpreterNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration(
  network_mode: str,
  vpc_config: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode">network_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig">vpc_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>]</code> | vpc_config block. |

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig"></a>

```python
vpc_config: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#vpc_config BedrockagentcoreCodeInterpreter#vpc_config}

---

### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig(
  security_groups: typing.List[str],
  subnets: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}. |

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}.

---

### BedrockagentcoreCodeInterpreterTimeouts <a name="BedrockagentcoreCodeInterpreterTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#create BedrockagentcoreCodeInterpreter#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_code_interpreter#delete BedrockagentcoreCodeInterpreter#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCodeInterpreterNetworkConfigurationList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>]

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  value: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>]

---

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput">network_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig"></a>

```python
vpc_config: BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a>

---

##### `network_mode_input`<sup>Optional</sup> <a name="network_mode_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput"></a>

```python
network_mode_input: str
```

- *Type:* str

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>]

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>]

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreCodeInterpreterTimeoutsOutputReference <a name="BedrockagentcoreCodeInterpreterTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_code_interpreter

bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreCodeInterpreterTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---



